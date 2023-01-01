from rest_framework import serializers
from .models import Article


# class ArticleSerializer(serializers.ModelSerializer):
    # class Meta:
    #     model = Article
    #     fields = ['id', 'title', 'body']

class ArticleSerializer(serializers.Serializer):
    id = serializers.ReadOnlyField()
    title = serializers.CharField(max_length=30)
    body = serializers.CharField(max_length=150)

    def create(self, validated_data):
        return Article.objects.create(**validated_data)
