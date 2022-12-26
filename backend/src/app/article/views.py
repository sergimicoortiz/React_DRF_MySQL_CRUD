# from rest_framework.generics import get_object_or_404
from rest_framework.response import Response
from rest_framework.views import APIView

# from .models import Article
# from .serializers import ArticleSerializer


class ArticleView(APIView):
    def get(self, request, pk=None):
        return Response({"ping": "pong"})
