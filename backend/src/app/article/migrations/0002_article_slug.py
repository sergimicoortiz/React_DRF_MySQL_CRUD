# Generated by Django 4.1.5 on 2023-01-11 19:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('article', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='article',
            name='slug',
            field=models.SlugField(max_length=40, null=True, unique=True),
        ),
    ]
