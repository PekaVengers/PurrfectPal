# Generated by Django 4.2 on 2024-02-09 22:04

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('pets', '0008_petadopt'),
    ]

    operations = [
        migrations.AddField(
            model_name='petadopt',
            name='amount',
            field=models.IntegerField(default=1),
            preserve_default=False,
        ),
    ]
