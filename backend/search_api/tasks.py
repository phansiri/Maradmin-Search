from celery import shared_task
from maradmin_scrapy_project.maradmin_scrapy_project.spiders.maradminspider import (
    MaradminSpider,
)
from scrapy.utils.project import get_project_settings
from scrapy.crawler import CrawlerProcess, CrawlerRunner
from twisted.internet import reactor
from multiprocessing import Process, Queue
import scrapy


@shared_task
def scrape_maradmins():
    from crochet import setup

    setup()
    process = CrawlerRunner(get_project_settings())
    d = process.crawl(MaradminSpider)
    d.addBoth(lambda _: reactor.stop())
    reactor.run()

    # Runner
    # def f(q):
    #     try:
    #         process = CrawlerRunner(get_project_settings())
    #         d = process.crawl(MaradminSpider)
    #         d.addBoth(lambda _: reactor.stop())
    #         reactor.run()
    #         q.put(None)
    #     except Exception as e:
    #         q.put(e)
    # q = Queue()
    # p = Process(target=f, args=(q,))
    # p.start()
    # result = q.get()
    # p.join()
    #
    # if result is not None:
    #     raise result

    # Processor
    # process = CrawlerProcess(get_project_settings())
    # process.crawl(MaradminSpider)
    # process.run()
