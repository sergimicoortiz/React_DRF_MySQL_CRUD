from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView
from .models import Article
from .serializers import ArticleSerializer


class ArticleView(APIView):
    def get(self, request, id=None):
        if id:
            article = get_object_or_404(Article.objects.all(), pk=id)
            serializer_one = ArticleSerializer(article)
            return Response({'data': serializer_one.data})
        articles = Article.objects.all()
        serializer = ArticleSerializer(articles, many=True)
        return Response({'data': serializer.data})
