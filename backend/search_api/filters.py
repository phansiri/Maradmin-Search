from django_filters import rest_framework as filters
from .models import Maradmin

class MaradminFilter(filters.FilterSet):
    title_test = filters.CharFilter(field_name='title', lookup_expr='icontains')

    class Meta:
        model = Maradmin
        fields = "__all__"