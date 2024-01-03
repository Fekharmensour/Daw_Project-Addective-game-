from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import Question, Questionnaire, Option
from .serializers import QuestionnaireSerializer, QuestionSerializer, OptionSerializer


# Create your views here.


@api_view(['GET'])
def get_quizs(request):
    questionnaires = Questionnaire.objects.all()
    serializers = QuestionnaireSerializer(questionnaires, many=True)
    return Response(
        {
            'Quizs': serializers.data
        }
    )
