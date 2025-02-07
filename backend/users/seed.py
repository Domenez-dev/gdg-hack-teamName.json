from events.models import Department

def seed_departments():
    departments = [
        {'id': 'DEV', 'name': 'Development'},
        {'id': 'RLX', 'name': 'External Relations'},
        {'id': 'MULTI', 'name': 'Multimedia'},
        {'id': 'DES', 'name': 'Design'},
        {'id': 'COM', 'name': 'Communication'},
        {'id': 'RH', 'name': 'Human Resources'},
        {'id': 'LOG', 'name': 'Logistics'},
    ]

    for dept in departments:
        obj, created = Department.objects.get_or_create(id=dept['id'], defaults={'name': dept['name']})
        if created:
            print(f"Department '{dept['name']}' created.")
        else:
            print(f"Department '{dept['name']}' already exists.")

    print("Seeding complete.")
