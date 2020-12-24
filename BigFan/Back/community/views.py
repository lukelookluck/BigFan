from django.shortcuts import render
from .serializers import ArticleSerializer
from .models import Article
from rest_framework import generics



# Create your views here.
class ArticleViewSet(generics.ListCreateAPIView):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer