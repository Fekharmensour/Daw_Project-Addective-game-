from django.urls import path
from . import views

urlpatterns = [
    path('get_quizs/', views.get_quizs, name='get_quizs')
]
