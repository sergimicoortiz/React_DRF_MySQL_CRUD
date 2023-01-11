from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Article
from .serializers import ArticleSerializer


class ArticleView(APIView):
    def get(self, request, slug=None):
        if slug:
            article = get_object_or_404(Article.objects.all(), slug=slug)
            serializer_one = ArticleSerializer(article)
            return Response({'data': serializer_one.data})
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response({'data': serializer.data})

    def delete(self, request, slug):
        article = get_object_or_404(Article.objects.all(), slug=slug)
        print(article)
        article.delete()
        return Response({'data': 'Article deleted'})

    def post(self, request):
        article = request.data.get('article')
        serializer = ArticleSerializer(data=article)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response({'data': serializer.data})

    def put(self, request, slug):
        article = get_object_or_404(Article.objects.all(), slug=slug)
        data = request.data.get('article')
        if 'title' in data.keys() and data['title'] != article.title:
            data['slug'] = None
        serializer = ArticleSerializer(
            instance=article, data=data, partial=True)
        if (serializer.is_valid(raise_exception=True)):
            serializer.save()
        return Response({'data': serializer.data})
