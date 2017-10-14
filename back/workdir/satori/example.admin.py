from django.contrib import admin

from adminsortable.admin import SortableAdmin

from .models import *


class ScheduleInline(admin.StackedInline):
    model = Schedule
    max_num = 1
    exclude = ('way', 'person',)

class PersonAdminClass(SortableAdmin):
    pass

class NewsAdminClass(SortableAdmin):
    list_display = ('__str__', 'category',)
    fields = ('title', 'category', 'image', 'body',)

class WayAdminClass(SortableAdmin):
    list_display = ('__str__', 'parentID',)
    fields = ('title', 'slug', 'parentID', 'image', 'body',)
    ordering = ('parentID',)

class GroupAdminClass(SortableAdmin):
    inlines = [ScheduleInline,]
    list_display = ('__str__', 'way', 'published')
    fields = ('way', 'person', 'published')

class ImageAdminClass(SortableAdmin):
    list_display = ('__str__', )

admin.site.register(Image, ImageAdminClass)
admin.site.register(News, NewsAdminClass)
admin.site.register(NewsCategory)
admin.site.register(Way, WayAdminClass)
admin.site.register(Page)
admin.site.register(Person, PersonAdminClass)
admin.site.register(Group, GroupAdminClass)
