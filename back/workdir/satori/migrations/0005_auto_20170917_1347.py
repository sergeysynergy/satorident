# -*- coding: utf-8 -*-
# Generated by Django 1.11.3 on 2017-09-17 10:47
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('satori', '0004_auto_20170728_1327'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='service',
            options={'ordering': ['order'], 'verbose_name': 'Услуга', 'verbose_name_plural': 'Услуги'},
        ),
        migrations.AddField(
            model_name='service',
            name='parentId',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.SET_NULL, to='satori.Service'),
        ),
    ]
