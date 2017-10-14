from rest_framework import serializers

from .models import *


class PageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Page
        fields = ('pk', 'title', 'slug', 'body', 'published',)


class ServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Service
        fields = ('pk', 'parentId', 'title', 'menuTitle', 'slug', 'body',
            'order', 'published',)
