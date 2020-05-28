from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page
from django.views.decorators.vary import vary_on_cookie
from rest_framework import generics
from rest_framework.response import Response

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

    @method_decorator(vary_on_cookie)
    @method_decorator(cache_page(60 * 2))
    def dispatch(self, *args, **kwargs):
        return super(MaradminViewSet, self).dispatch(*args, **kwargs)
