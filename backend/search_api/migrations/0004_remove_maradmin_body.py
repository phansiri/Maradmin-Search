# Generated by Django 3.0.6 on 2020-05-22 12:09

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('search_api', '0003_maradmin_body'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='maradmin',
            name='body',
        ),
    ]
