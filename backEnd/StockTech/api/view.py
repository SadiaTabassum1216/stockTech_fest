import sys
import os
from django.shortcuts import render

sys.path.append("..")

# Create your views here.
from rest_framework import status
from django.shortcuts import render, redirect
from rest_framework.decorators import api_view
from rest_framework.response import Response
from django.http import JsonResponse

from dataProcessing.market_data import *
from dataProcessing.news import *
from dataProcessing.dseindices import *
from dataProcessing.sectorwiseGL import *
from dataProcessing.companyProfile import *
from dataProcessing.technicalIndicators import *
from dataProcessing.prediction import *


@api_view(['GET'])
def market_data(request):
    return Response(data=get_market_data())

@api_view(['GET'])
def news(request):
    return Response(data=get_news())

@api_view(['GET'])
def bullbear(request):
    return Response(data=get_bullbear(request))

@api_view(['GET'])
def SMA50(request):
    return Response(data=getSMA(request))

@api_view(['GET'])
def EMA50(request):
    return Response(data=getEMA(request))

@api_view(['GET'])
def STOCH(request):
    return Response(data=getSTOCH(request))

@api_view(['GET'])
def MACD(request):
    return Response(data=getMACD(request))

@api_view(['GET'])
def BB(request):
    return Response(data=getBB(request))

@api_view(['GET'])
def RSI(request):
    return Response(data=getRSI(request))

@api_view(['GET'])
def indices(request):
    return Response(data=getIndices())

@api_view(['GET'])
def companyprofile(request):
    return Response(data=getProfile(request))

@api_view(['GET'])
def price(request):
    return Response(data=getPrice(request))

@api_view(['GET'])
def prediction(request):
    return Response(data=getPrediction(request))

@api_view(['GET'])
def companyNews(request):
    return JsonResponse(data=getCompanyNews(request))

@api_view(['GET'])
def companyFinance(request):
    return Response(data=getFinance(request))

@api_view(['GET'])
def sectorwise(request):
    return Response(data=getSectorwise())


