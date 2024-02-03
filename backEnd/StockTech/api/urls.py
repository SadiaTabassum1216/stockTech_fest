from django.urls import path


from .view import *

urlpatterns = [
    path('marketData/', market_data),
    path('bullbear/', bullbear),
    path('news/', news),
    path('indices/',indices),
    path('sectorwise/',sectorwise),
    path('companyprofile/',companyprofile),
    path('price/',price),
    path('companyNews/',companyNews),
    path('companyFinance/',companyFinance),
    path('SMA50/',SMA50),
    path('EMA50/',EMA50),
    path('MACD/',MACD),
    path('STOCH/',STOCH),
    path('RSI/',RSI),
    path('BB/',BB),
    path('predict/',prediction),

]