from django.db import models
from django.contrib.auth.models import AbstractUser, BaseUserManager, Permission, Group
from django.utils import timezone


class Department(models.Model):
    id = models.CharField(max_length=10, primary_key=True)  # e.g., 'DEV'
    name = models.CharField(max_length=100)  # e.g., 'Development'


class UserSession(models.Model):
    user = models.ForeignKey('CustomUser', on_delete=models.CASCADE)
    session_key = models.CharField(max_length=40, unique=True)
    login_time = models.DateTimeField(default=timezone.now)
    logout_time = models.DateTimeField(null=True, blank=True)
    is_active = models.BooleanField(default=True)

    def __str__(self):
        return f"{self.user.name} - {self.session_key}"


class DiscordUser(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    username = models.CharField(max_length=50)
    discriminator = models.CharField(max_length=4)
    avatar = models.CharField(max_length=100)
    email = models.EmailField()
    verified = models.BooleanField()
    mfa_enabled = models.BooleanField()
    flags = models.IntegerField()
    public_flags = models.IntegerField()

    def __str__(self):
        return str(self.username)

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
    department = models.ForeignKey(Department, on_delete=models.CASCADE)
    is_admin = models.BooleanField(default=False)
    is_active = models.BooleanField(default=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'discord_id'
    REQUIRED_FIELDS = ['name', 'department']

    def __str__(self):
        return self.name

    @property
    def is_staff(self):
        return self.is_admin or self.department.id == Department.HR

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
