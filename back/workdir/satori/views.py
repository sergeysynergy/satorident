from django.shortcuts import render
from rest_framework import generics

from .models import *
from .serializers import *


class PagesList(generics.ListCreateAPIView):
    queryset = Page.objects.filter(published=True)
    serializer_class = PageSerializer
class PagesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Page.objects.filter(published=True)
    serializer_class = PageSerializer


class ServicesList(generics.ListCreateAPIView):
    queryset = Service.objects.filter(published=True)
    serializer_class = ServiceSerializer
class ServicesDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Service.objects.filter(published=True)
    serializer_class = ServiceSerializer
