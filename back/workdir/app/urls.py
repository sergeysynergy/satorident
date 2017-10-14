from django.conf.urls import include, url
from django.contrib import admin
from django.views.static import serve
from rest_framework.authtoken import views as apiViews

from app.settings import STATIC_ROOT, MEDIA_ROOT, \
    ADMIN_SITE_HEADER, ADMIN_SITE_TITLE, ADMIN_INDEX_TITLE


urlpatterns = [
    url(r'^admin/', admin.site.urls),
    url(r'^satori/', include('satori.urls')),

    # Serving files in static directory
    url(r'^static/(?P<path>.*)$', serve, { 'document_root': STATIC_ROOT }),
    # Serving files in media directory
    url(r'^media/(?P<path>.*)$', serve, { 'document_root': MEDIA_ROOT }),

    # REST API
    # Obtain a token given the username and password
    url(r'^api-token-auth/', apiViews.obtain_auth_token),
]

admin.site.site_header = ADMIN_SITE_HEADER
admin.site.site_title = ADMIN_SITE_TITLE
admin.site.index_title = ADMIN_INDEX_TITLE
