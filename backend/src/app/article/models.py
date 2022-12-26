from django.db import models


class Article(models.Model):
    title = models.CharField(max_length=30)
    body = models.CharField(max_length=150)
