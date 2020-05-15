from rest_framework import serializers
from .models import Maradmin

class MaradminSerializer(serializers.ModelSerializer):
    class Meta:
        model = Maradmin
        fields = "__all__"