from django.db import models
# from adminsortable.models import SortableMixin
# from adminsortable.fields import SortableForeignKey


class Page(models.Model):
    title = models.CharField('Заголовок',
        max_length=200, default='')
    slug = models.SlugField('Название для ссылок латиницей',
        max_length=200, default='')
    body = models.TextField('Содержимое',
        default='',)
    published = models.BooleanField('Опубликовано',
        default=True)

    class Meta:
        verbose_name = 'Базовая страница'
        verbose_name_plural = 'Страницы'

    def __str__(self):
        return self.title


class Image(models.Model):
    title = models.CharField('Заголовок',
        max_length=200, default='', blank=True,)
    image = models.ImageField('Картинка', upload_to="images", blank=True)

    class Meta:
        verbose_name = 'Картинка'
        verbose_name_plural = 'Картинки'

    def __str__(self):
        name = 'id_' + str(self.id) + ' ' + str(self.title)
        return name


class Service(models.Model):
# class Service(SortableMixin):
    parentId = models.ForeignKey('self', models.SET_NULL, blank=True, null=True)
    # parentId = SortableForeignKey('self', models.SET_NULL, blank=True, null=True)
    title = models.CharField('Заголовок',
        max_length=255, default='', unique=True)
    menuTitle = models.CharField('Заголовок в меню',
        max_length=255, default='', blank=True)
    # slug = models.SlugField('Название для ссылок латиницей',
    slug = models.CharField('Название для ссылок латиницей',
        max_length=200, default='')
    body = models.TextField('Содержимое',
        default='',)
    # order = models.PositiveIntegerField(default=0, editable=False, db_index=True)
    order = models.PositiveIntegerField(default=0, blank=False, null=False)
    published = models.BooleanField('Опубликовано',
        default=True)

    class Meta:
        verbose_name = 'Услуга'
        verbose_name_plural = 'Услуги'
        ordering = ['order']

    def __str__(self):
        if self.parentId:
            if self.menuTitle != '':
                name = str(self.parentId) + ' > ' + str(self.menuTitle)
            else:
                name = str(self.parentId) + ' > ' + str(self.title)
        else:
            name = self.title
        return name
