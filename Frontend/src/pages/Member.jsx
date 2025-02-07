
import LeftSidebar from "../components/LeftSidebar";

const MemberProfile = () => {
  const memberData = {
    name: 'Abdelhak AMINI',
    username: '@Hako0000',
    role: 'DEVELOPMENT',
    contact: {
      email: 'ta_amini@esi.dz',
      phone: '+213555555555'
    },
    roles: ['Comm Manager', 'GDG HACK Organizer'],
    badges: [
      { text: 'MOTM Nov/2025', color: 'bg-blue-100 text-blue-600' },
      { text: 'Something', color: 'bg-yellow-100 text-yellow-600' },
      { text: 'Another thing', color: 'bg-green-100 text-green-600' },
      { text: 'Ex DEV Co-Manager', color: 'bg-red-100 text-red-500' }
    ],
    stats: {
      totalPoints: '2090',
      averageScore: '1245',
      currentScore: '1900'
    },
    contributions: [
      {
        role: 'GDG HACK - ORGANIZER',
        task: 'Preparing User registration sheet',
        date: '18/06/2024',
        rating: '4/5'
      },
      {
        role: 'GDG HACK - ORGANIZER',
        task: 'Preparing User registration sheet',
        date: '18/06/2024',
        rating: '4/5'
      },
      {
        role: 'GDG HACK - ORGANIZER',
        task: 'Preparing User registration sheet',
        date: '18/06/2024',
        rating: '4/5'
      }
    ]
  };

  return (
    <div className="flex min-h-screen">
     <LeftSidebar />
     <div className="flex-1 ml-16 p-6">
      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-bold mb-6">Member</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Info Section */}
          <div className="lg:col-span-2 bg-[#F5F9FF] rounded-xl p-6">
            <h2 className="text-xl font-semibold mb-4">Info</h2>
            
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-2xl">👾</span>
              </div>
              <div>
                <h3 className="font-bold text-lg">{memberData.name}</h3>
                <p className="text-gray-600">{memberData.username}</p>
                <p className="text-sm font-medium">{memberData.role}</p>
              </div>
              <div className="ml-auto p-4 bg-white rounded-lg">
                <h4 className="text-xs text-gray-500 mb-1">Contact Info</h4>
                <p className="text-sm">Email: {memberData.contact.email}</p>
                <p className="text-sm">Phone: {memberData.contact.phone}</p>
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg text-blue-400 mb-2">ROLES</h3>
              <div className="flex gap-2">
                {memberData.roles.map((role, index) => (
                  <span key={index} className="px-3 py-1 bg-white rounded-md text-sm">
                    {role}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg text-blue-400 mb-2">BADGES</h3>
              <div className="flex flex-wrap gap-2">
                {memberData.badges.map((badge, index) => (
                  <span key={index} className={`px-3 py-1 rounded-md text-sm ${badge.color}`}>
                    {badge.text}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Stats Section */}
          <div className="bg-black text-white rounded-xl p-6">
            <div className="space-y-6">
              <div>
                <p className="text-gray-400 text-sm">Total Accumulated Points</p>
                <p className="text-4xl font-bold">{memberData.stats.totalPoints} <span className="text-sm">Pts</span></p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Average Overall Score</p>
                <p className="text-4xl font-bold">{memberData.stats.averageScore} <span className="text-sm">Pts</span></p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Current Month's Score</p>
                <p className="text-4xl font-bold">{memberData.stats.currentScore} <span className="text-sm">Pts</span></p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Engagement Status</p>
                <div className="inline-block px-6 py-1 bg-green-500 text-white rounded-full mt-2">
                  ACTIVE
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contributions Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-6">Contributions</h2>
          <div className="space-y-4">
            {memberData.contributions.map((contribution, index) => (
              <div key={index} className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="font-medium">{contribution.role}</span>
                  <span className="text-gray-600">{contribution.task}</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-gray-500">{contribution.date}</span>
                  <span className="font-medium">{contribution.rating} ⭐</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default MemberProfile;