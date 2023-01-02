from django.urls import path

from .views import ArticleView


app_name = "articles"


urlpatterns = [
    #POST don't work if the url didn't end with /
    path('', ArticleView.as_view()),
    path('<int:id>', ArticleView.as_view()),
]
