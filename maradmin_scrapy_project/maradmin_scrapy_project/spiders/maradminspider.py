import scrapy

class MaradminSpider(scrapy.Spider):
    name = "maradminspider"
    start_urls = ["https://www.marines.mil/News/Messages/MARADMINS.aspx/?Page=1"]

    def parse(self, response):
        for item in response.css("div.item"):
            yield {
                "number": item.css(".msg-num.msg-col a::text").extract_first(),
                "title": item.css(".msg-title.msg-col a span::text").extract_first(),
                "date": item.css(".msg-pub-date.msg-col::text").extract_first(),
                "status": item.css(".msg-status.msg-col::text").extract_first(),
            }

        max_counter = 50
        for num in range(2, max_counter):
            next_page_url = (
                f"https://www.marines.mil/News/Messages/MARADMINS.aspx/?Page={num}"
            )
            if next_page_url is not None:
                yield scrapy.Request(response.urljoin(next_page_url))
