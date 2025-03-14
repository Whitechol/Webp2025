from django.contrib import admin
from django.urls import path, include
from myhello.views import add_course, list_course

urlpatterns = [
    path('admin/', admin.site.urls),
    path('addcourse', add_course, name='add_course'),
    path('courselist', list_course, name='list_course')
]

urlpatterns += [
    path('myhello/', include('myhello.urls')),
]
