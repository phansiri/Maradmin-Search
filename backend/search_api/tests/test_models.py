from django.test import TestCase
from ..models import Maradmin


class MaradminTest(TestCase):
    """ Test module for Maradmin model """

    def setUp(self) -> None:
        Maradmin.objects.create(
            number="111/11",
            title="TESTING TITLE 1",
            date="2020-05-01",
            status="Active",
        )
        Maradmin.objects.create(
            number="222/22",
            title="TESTING TITLE 2",
            date="2020-05-02",
            status="Active",
        )

    def test_maradmin_string(self) -> None:
        maradmin_one = Maradmin.objects.get(number="111/11")
        maradmin_two = Maradmin.objects.get(number="222/22")
        self.assertEqual(maradmin_one.__str__(), "111/11")
        self.assertEqual(maradmin_two.__str__(), "222/22")
