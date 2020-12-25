from django.contrib.auth.models import AbstractUser
from django.db import models

# Create your models here.
class User(AbstractUser):
    kakao_id = models.BigIntegerField(null=True)
    pass