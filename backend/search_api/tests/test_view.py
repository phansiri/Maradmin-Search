import json
from rest_framework import status
from django.test import TestCase, Client
from django.urls import reverse
from ..models import Maradmin
from ..serializers import MaradminSerializer

client = Client()


class GetAllMaradminTest(TestCase):
    """ Test module for GET all Maradmin API """

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

    def test_get_all_maradmin(self) -> None:
        # get API response
        response = client.get(reverse("maradmin-list"))
        # get data from db
        maradmins = Maradmin.objects.all().order_by("-date")
        serializer = MaradminSerializer(maradmins, many=True)
        self.assertEqual(response.data["results"], serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)


class GetSingleMaradminTest(TestCase):
    """ Test module for GET single Maradmin API """

    def setUp(self) -> None:
        self.one = Maradmin.objects.create(
            number="111/11",
            title="TESTING TITLE 1",
            date="2020-05-01",
            status="Active",
        )
        self.two = Maradmin.objects.create(
            number="222/22",
            title="TESTING TITLE 2",
            date="2020-05-02",
            status="Active",
        )

    def test_get_valid_single_maradmin(self) -> None:
        response = client.get(reverse("maradmin-detail", kwargs={"pk": self.one.pk}))
        maradmin = Maradmin.objects.get(pk=self.one.pk)
        serializer = MaradminSerializer(maradmin)
        self.assertEqual(response.data, serializer.data)
        self.assertEqual(response.status_code, status.HTTP_200_OK)

    def test_get_invalid_single_maradmin(self) -> None:
        response = client.get(reverse("maradmin-detail", kwargs={"pk": 30}))
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)


class CreateNewMaradminTest(TestCase):
    """ Test module for inserting a new maradmin """

    def setUp(self):
        self.valid_payload = {
            "number": "111/11",
            "title": "TESTING TITLE 1",
            "date": "2020-05-01",
            "status": "Active",
        }
        self.invalid_payload = {
            "number": "222/22",
            "title": "TESTING TITLE 2",
            "date": "05/01/2020",
            "status": "Active",
        }

    def test_create_valid_maradmin(self):
        response = client.post(
            reverse("maradmin-list"),
            data=json.dumps(self.valid_payload),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_create_invalid_maradmin(self):
        response = client.post(
            reverse("maradmin-list"),
            data=json.dumps(self.invalid_payload),
            content_type="application/json",
        )
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)


""" NO PUT OR DELETE TESTS """
