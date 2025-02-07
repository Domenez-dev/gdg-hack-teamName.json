import { Plus, Calendar, Users } from 'lucide-react';
import { useState } from 'react';
import LeftSidebar from "../components/LeftSidebar";
import AddEvent from '../components/AddEvent';

const Timeline = () => {
  const [showAddEvent, setShowAddEvent] = useState(false);
  
  const events = [
    {
      id: 1,
      title: 'GDG HACK',
      type: 'EVENT',
      description: 'GDG Hack is An event that specializes in making things that are something',
      date: '11/05/2025',
      isActive: true,
      icon: 'event'
    },
    {
      id: 2,
      title: 'GDG Organizers',
      type: 'Project',
      description: 'GDG Hack is An event that specializes in making things that are something',
      date: '02/04/2025',
      isActive: false,
      icon: 'project'
    }
  ];

  const getIcon = (iconType) => {
    switch(iconType) {
      case 'event':
        return <Calendar className="w-6 h-6 text-white" />;
      case 'project':
        return <Users className="w-6 h-6 text-white" />;
      default:
        return <Calendar className="w-6 h-6 text-white" />;
    }
  };

  return (
    <div className="flex">
      <LeftSidebar />
      <div className="flex-1 ml-16 p-6">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-xl font-semibold">Events & Projects</h1>
          <button 
            onClick={() => setShowAddEvent(true)}
            className="bg-black text-white px-3 py-1.5 cursor-pointer rounded-lg text-sm flex items-center gap-1"
          >
            <Plus className="w-4 h-4" />
            New
          </button>
        </div>

        {showAddEvent && (
          <AddEvent onClose={() => setShowAddEvent(false)} />
        )}

        <div className="relative">
          <div className="absolute left-2 top-2 h-full w-0.5 bg-green-500" />
          
          <div className="space-y-4">
            {events.map((event) => (
              <div key={event.id} className="relative flex items-start">
                <div className="absolute left-0 w-4 h-4 rounded-full bg-green-500 border-4 border-white" />
                
                <div className={`ml-8 p-4 rounded-lg w-full flex items-start gap-4 ${
                  event.isActive ? 'bg-green-500 text-white' : 'bg-gray-700 text-white'
                }`}>
                  <div className="bg-white/20 p-2 rounded">
                    {getIcon(event.icon)}
                  </div>
                  
                  <div className="flex-grow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-bold">{event.title}</h3>
                        <p className="text-sm opacity-80">{event.type}</p>
                      </div>
                      <div className="text-right space-y-1">
                        <p className="text-sm">{event.date}</p>
                        {event.isActive && (
                          <button className="px-3 py-1 text-sm bg-white/20 rounded">
                            Edit
                          </button>
                        )}
                      </div>
                    </div>
                    <p className="mt-2 text-sm opacity-80">{event.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;