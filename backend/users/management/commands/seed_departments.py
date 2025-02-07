# filepath: /home/camatchoo/WebDev/gdg-hack-teamName.json/backend/users/management/commands/seed_departments.py
from django.core.management.base import BaseCommand
from users.seed import seed_departments

class Command(BaseCommand):
    help = 'Seed the database with initial department data'

    def handle(self, *args, **kwargs):
        seed_departments()
        self.stdout.write(self.style.SUCCESS('Successfully seeded departments'))