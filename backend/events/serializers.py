from rest_framework import serializers
from .models import Event, Contribution
#from members.models import Member
from users.models import Department

class DepartementSerializer(serializers.ModelSerializer):
    class Meta:
        model = Department
        fields = ['id', 'name']

class EventSerializer(serializers.ModelSerializer):
    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation['departments'] = DepartementSerializer(instance.departments, many=True).data

        return representation
    class Meta:
        model = Event
        fields = ['id', 'event_name', 'event_start_date', 'event_end_date', 
                 'event_description', 'departments']

class ContributionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contribution
        fields = ['id', 'event', 'user', 'task_name', 'weight', 'submited_on']