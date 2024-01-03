from django.db import models

from Users.models import Patient

# Create your models here.


class Alert(models.Model):
    alertTypes=(
        ('Type 1','Type 1')
        ),
    id_Patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True, blank=False)
    alertDate = models.DateTimeField()
    alertType = models.CharField(max_length=45,choices=alertTypes)

