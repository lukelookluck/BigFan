from django.db import models

# Create your models here.
class Article(models.Model):
    # 게시글 관련 정보 필드
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    title = models.CharField(max_length=20)
    detail = models.TextField()