from django.db import models

from Users.models import User

# Create your models here.


class Statistic(models.Model):
    id_User = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=False)
    statisticDate = models.DateTimeField()

