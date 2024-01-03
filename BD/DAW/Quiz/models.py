from django.db import models
from Users.models import Patient


class Questionnaire(models.Model):
    questionnaireName = models.CharField(max_length=45, default='')
    dateOfTheQuestionnaire = models.DateTimeField(auto_now_add=True)

    #
    def __str__(self):
        return self.questionnaireName


class ResponsesQuestionnaire(models.Model):
    id_Patient = models.ForeignKey(Patient, on_delete=models.CASCADE, null=True, blank=False)
    id_Questionnaire = models.ForeignKey(Questionnaire, on_delete=models.CASCADE, null=True, blank=False)
    dateOfResponse = models.DateTimeField(auto_now_add=True)
    score = models.DecimalField(max_digits=4, decimal_places=2, null=True, blank=False, default=0)


class Question(models.Model):
    QUESTIONTYPE = [
        ('Personal information', 'Personal information'),
        ('Video Game Addiction Assessment', 'Video Game Addiction Assessment'),
    ]
    id_Questionnaire = models.ForeignKey(Questionnaire, on_delete=models.CASCADE, null=True, blank=False,
                                         related_name='Questions')
    questionText = models.CharField(max_length=250, default='')
    questionType = models.CharField(max_length=45, choices=QUESTIONTYPE, default=QUESTIONTYPE[1])

    def __str__(self):
        return self.questionText

    class Meta:
        ordering = ['id']


class Option(models.Model):
    id_Question = models.ForeignKey(Question, on_delete=models.CASCADE, null=True, blank=False, related_name='Options')
    optionText = models.CharField(max_length=60, default='')
    point = models.DecimalField(max_digits=3, decimal_places=2, default=0)

    def __str__(self):
        return self.optionText


class ResponsesQuestion(models.Model):
    id_Reponse_Questionnaire = models.ForeignKey(ResponsesQuestionnaire, on_delete=models.CASCADE, null=True,
                                                 blank=False)
    id_Option = models.ForeignKey(Option, on_delete=models.CASCADE, null=True, blank=False)
