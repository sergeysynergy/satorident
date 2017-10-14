from django.contrib import admin
from adminsortable2.admin import SortableAdminMixin
# from adminsortable.admin import NonSortableParentAdmin, SortableStackedInline

from .models import *


class ImageAdminClass(admin.ModelAdmin):
    list_display = ('__str__', )

# class ServiceInline(SortableStackedInline):
class ServiceInline(admin.StackedInline):
    model = Service
    fields = ['parentId']
    extra = 0
# class ServiceAdmin(SortableAdminMixin):
class ServiceAdmin(SortableAdminMixin, admin.ModelAdmin):
    list_display = ('__str__', 'title', 'published',)
    inlines = [ServiceInline]


admin.site.register(Image, ImageAdminClass)
admin.site.register(Service, ServiceAdmin)
#admin.site.register(Service)
admin.site.register(Page)
