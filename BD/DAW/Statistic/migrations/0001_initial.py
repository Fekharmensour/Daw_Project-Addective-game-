# Generated by Django 5.0 on 2023-12-29 14:44

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('Users', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Statistic',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('statisticDate', models.DateTimeField()),
                ('id_User', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='Users.user')),
            ],
        ),
    ]