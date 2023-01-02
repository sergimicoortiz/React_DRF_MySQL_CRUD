from django.urls import path

from .views import ArticleView


app_name = "articles"


urlpatterns = [
    path('', ArticleView.as_view()),
    path('<int:id>', ArticleView.as_view()),
    # path('/<int:id>', ArticleView.as_view()),
]
