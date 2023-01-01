from django.db import models


class Article(models.Model):
    # slug = models.SlugField(max_length=40, unique=True)
    title = models.CharField(max_length=30)
    body = models.CharField(max_length=150)

    def __str__(self):
        return self.title
