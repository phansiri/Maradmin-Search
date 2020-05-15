from django.db import models


class Maradmin(models.Model):
    number = models.CharField(max_length=8)
    title = models.CharField(max_length=200)
    date = models.DateField()
    status = models.CharField(max_length=20)

    def __str__(self):
        return self.number