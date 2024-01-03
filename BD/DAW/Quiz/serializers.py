from rest_framework import serializers
from .models import Questionnaire, Question, Option


class OptionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Option
        fields = ('id', 'optionText', 'point')


class QuestionSerializer(serializers.ModelSerializer):
    Options = OptionSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = ('id', 'questionText', 'questionType', 'Options')


class QuestionnaireSerializer(serializers.ModelSerializer):
    Questions = QuestionSerializer(many=True, read_only=True)

    class Meta:
        model = Questionnaire
        fields = ('id', 'questionnaireName', 'dateOfTheQuestionnaire', 'Questions')
