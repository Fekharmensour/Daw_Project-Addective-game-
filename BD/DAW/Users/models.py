import uuid
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin


class CustomUserManager(BaseUserManager):
    def create_user(self, username, email=None, password=None, **extra_fields):
        if not username:
            raise ValueError('The username field must be set')
        email = self.normalize_email(email) if email else None
        user = self.model(username=username, email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, username, email=None, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(username, email, password, **extra_fields)


class User(AbstractBaseUser, PermissionsMixin):
    Gender = (
        ('m', 'male'),
        ('f', 'female'),
    )
    username = models.CharField(max_length=150, unique=True)
    firstName = models.CharField(max_length=45)
    lastName = models.CharField(max_length=45)
    gender = models.CharField(max_length=1, choices=Gender, default='m', blank=True)
    dateOfBirth = models.DateField(null=True, )
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    email = models.EmailField(null=True, unique=True)
    password = models.CharField(max_length=255)
    banned = models.BooleanField(default=False)

    USERNAME_FIELD = 'username'

    objects = CustomUserManager()


def __str__(self):
    return self.username


class Doctor(models.Model, ):
    idUser = models.OneToOneField(User, on_delete=models.CASCADE, blank=False, primary_key=True)
    specialty = models.CharField(max_length=45, null=False)
    scheduledTherapySessions = models.IntegerField(null=False)
    cv = models.FileField(upload_to='assets/files/', null=True)


class Patient(models.Model):
    idUser = models.OneToOneField(User, on_delete=models.CASCADE, blank=False, primary_key=True)
    levelOfAddiction = models.DecimalField(max_digits=4, decimal_places=2)
    averageHoursOfGammingPerWeek = models.DecimalField(max_digits=5, decimal_places=2)
    averageHoursOfGammingPerMounth = models.DecimalField(max_digits=5, decimal_places=2)
    insomniaScore = models.DecimalField(max_digits=4, decimal_places=2)
    excessiveSleepinessScore = models.DecimalField(max_digits=4, decimal_places=2)
    anxietyScore = models.DecimalField(max_digits=4, decimal_places=2)
    depressionScore = models.DecimalField(max_digits=4, decimal_places=2)


class Admin(models.Model):
    ROLE = ()
    PERMISSIONS = (
        ('Doctor', 'Doctor'),
        ('Patient', 'Patient'),
        ('Admin', 'Admin'),
    )
    idUser = models.OneToOneField(User, on_delete=models.CASCADE, null=True, blank=False)
    role = models.CharField(max_length=45, null=False, choices=ROLE)
    permissions = models.CharField(max_length=45, null=False, choices=PERMISSIONS)
