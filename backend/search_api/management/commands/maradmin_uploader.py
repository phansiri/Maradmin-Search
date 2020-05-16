from django.core.management.base import BaseCommand
import json
from datetime import datetime
from search_api.models import Maradmin
from search_api.bulkmanager import BulkCreateManager


def upload_data() -> None:
    Maradmin.objects.all().delete()

    test_file = '../maradmin.json'

    with open(test_file, 'r', encoding='utf8') as json_file:
        bulk_mgr = BulkCreateManager(chunk_size=20)
        data = json.load(json_file)
        for item in data:
            number = item['number']
            print(f'Adding...{number}')
            bulk_mgr.add(
                Maradmin(
                    number=number,
                    title=item['title'],
                    date=datetime.strptime(item['date'], '%m/%d/%Y').strftime("%Y-%m-%d"),
                    status=item['status'],
                )
            )
        bulk_mgr.done()


class Command(BaseCommand):
    def handle(self, *args, **options):
        self.stdout.write("Uploading json into database...")
        upload_data()
        self.stdout.write(self.style.SUCCESS("ok"))
