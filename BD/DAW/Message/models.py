from django.db import models

from Users.models import User

# Create your models here.


class Message(models.Model):
    sender = models.ForeignKey(User, related_name='sent_messages', on_delete=models.CASCADE,null=True, blank=False)
    recipient = models.ForeignKey(User, related_name='received_messages', on_delete=models.CASCADE,null=True, blank=False)
    content = models.TextField(null=True,blank=False)
    date_sent = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-date_sent']

