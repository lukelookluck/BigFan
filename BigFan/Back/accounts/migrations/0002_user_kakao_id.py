# Generated by Django 3.1.4 on 2020-12-25 13:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='kakao_id',
            field=models.BigIntegerField(null=True),
        ),
    ]
