from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=100)
    content = models.TextField(blank=True)
    photo = models.URLField(blank=True)
    location = models.CharField(max_length=100)
    created_at = models.DateField(auto_now_add=True)

class Course(models.Model):
    department = models.CharField(max_length=100)
    course_title = models.CharField(max_length=100)
    instructor = models.CharField(max_length=100)