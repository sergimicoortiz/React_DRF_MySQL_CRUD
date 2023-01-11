from django.db import models
from django.template.defaultfilters import slugify
from django.utils.crypto import get_random_string


class Article(models.Model):
    slug = models.SlugField(max_length=40, unique=True, null=True)
    title = models.CharField(max_length=30)
    body = models.CharField(max_length=150)

    def save(self, *args, **kwargs):
        if not self.slug:
            self.slug = slugify(self.title) + '-' + \
                get_random_string(8, '0123456789')
        return super().save(*args, **kwargs)
