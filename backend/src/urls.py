from django.urls import path, include

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('api/article/', include('src.app.article.urls')),
]
