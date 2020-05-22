# -*- coding: utf-8 -*-

# Define your item pipelines here
#
# Don't forget to add your pipeline to the ITEM_PIPELINES setting
# See: https://docs.scrapy.org/en/latest/topics/item-pipeline.html
from datetime import datetime


class MaradminScrapyProjectPipeline:
    def process_item(self, item, spider):
        print(f'saving item...title: {item["title"]}')
        item["date"] = datetime.strptime(item["date"], "%m/%d/%Y").strftime("%Y-%m-%d")
        item.save()
        print("Save success")
        return item
