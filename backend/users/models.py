from django.db import models
from django.conf import settings
from django.db import models
from django.utils import timezone
from django.contrib.auth.models import AbstractUser, BaseUserManager, Permission, Group


class Department(models.TextChoices):
    HR = 'HR', 'Human Resources'
    DEVELOPMENT = 'DEV', 'Development'
    COMMUNICATION = 'COM', 'Communication'
    VISUALS = 'VIS', 'visuals'
    LOGISTICS = 'LOG', 'Logistics'
    EXTERNAL_RELATIONS = 'RLX', 'External Relations'


class CustomUserManager(BaseUserManager):
    def create_user(self, discord_id, name, department,password=None):
        if not discord_id:
            raise ValueError('Users must have a discord ID')
        
        user = self.model(
            discord_id=discord_id,
            name=name,
            department=department,
          
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, discord_id, name, department, password=None):
        user = self.create_user(
            discord_id=discord_id,
            name=name,
            department=department,
            password=password,

        )
        user.is_admin = True
        user.save(using=self._db)
        return user

class CustomUser(AbstractUser):
    name = models.CharField(max_length=255)
    discord_id = models.CharField(max_length=255, unique=True)
    department = models.CharField(
        max_length=3,
        choices=Department.choices,
    )
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'discord_id'
    REQUIRED_FIELDS = ['name', 'department']

    def __str__(self):
        return self.name

    @property
    def is_staff(self):
        return self.is_admin or self.department == Department.HR

    groups = models.ManyToManyField(
        Group,
        related_name='customuser_set',  
        blank=True,
        help_text='The groups this user belongs to.',
        verbose_name='groups',
    )
    user_permissions = models.ManyToManyField(
        Permission,
        related_name='customuser_set',  
        blank=True,
        help_text='Specific permissions for this user.',
        verbose_name='user permissions',
    )