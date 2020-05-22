import scrapy
from ..items import MaradminScrapyProjectItem
from search_api.models import Maradmin


class MaradminSpider(scrapy.Spider):
    name = "maradminspider"
    start_urls = ["https://www.marines.mil/News/Messages/MARADMINS.aspx/?Page=1"]
    Maradmin.objects.all().delete()

    def parse(self, response):

        for item in response.css("div.item"):
            print("scraping item inside maradminspider")
            insert_item = MaradminScrapyProjectItem()

            insert_item["number"] = item.css(".msg-num.msg-col a::text").extract_first()
            insert_item["title"] = item.css(
                ".msg-title.msg-col a span::text"
            ).extract_first()
            insert_item["date"] = item.css(
                ".msg-pub-date.msg-col::text"
            ).extract_first()
            insert_item["status"] = item.css(
                ".msg-status.msg-col::text"
            ).extract_first()
            insert_item["body_link"] = item.css(
                ".msg-title.msg-col a::attr(href)"
            ).extract_first()
            yield insert_item

        # max_counter = 436
        max_counter = 5
        for num in range(2, max_counter):
            next_page_url = (
                f"https://www.marines.mil/News/Messages/MARADMINS.aspx/?Page={num}"
            )
            if next_page_url is not None:
                yield scrapy.Request(response.urljoin(next_page_url))
