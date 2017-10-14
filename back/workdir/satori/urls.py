from django.conf.urls import url

from .views import *

urlpatterns = [
    url(r'^pages/$', PagesList.as_view()),
    url(r'^pages/(?P<pk>[0-9]+)$', PagesDetail.as_view()),
    url(r'^services/$', ServicesList.as_view()),
    url(r'^services/(?P<pk>[0-9]+)$', ServicesDetail.as_view()),
]
