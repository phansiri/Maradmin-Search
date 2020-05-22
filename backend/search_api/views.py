from django.shortcuts import render

from rest_framework import viewsets
from .serializers import MaradminSerializer
from .models import Maradmin
from .filters import MaradminFilter
from django_filters import rest_framework as filters
from rest_framework.filters import OrderingFilter


class MaradminViewSet(viewsets.ModelViewSet):
    queryset = Maradmin.objects.all()
    serializer_class = MaradminSerializer
    filter_backends = (filters.DjangoFilterBackend, OrderingFilter)
    filterset_class = MaradminFilter
    ordering_fields = [
        ("title", "title"),
        ("date", "date"),
        ("number", "number"),
    ]
    ordering = ["-date"]
