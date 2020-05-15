from django.shortcuts import render

from rest_framework import viewsets
from .serializers import MaradminSerializer
from .models import Maradmin


class MaradminViewSet(viewsets.ModelViewSet):
    queryset = Maradmin.objects.all().order_by("-date")[:5]
    serializer_class = MaradminSerializer
