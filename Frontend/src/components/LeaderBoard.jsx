
import { LineChart, Line } from 'recharts';

import {  YAxis, CartesianGrid } from 'recharts';

const chartData = [
    { x: 0, value: 100 },
    { x: 25, value: 600 },
    { x: 50, value: 800 },
    { x: 75, value: 600 },
    { x: 100, value: 100 }
  ];

const LeaderBoard = () => {
  const leaders = [
    { 
      id: 1, 
      username: '@HakoOooo', 
      category: 'DEV', 
      points: 1268, 
      bgColor: 'bg-blue-100',
      categoryColor: 'bg-blue-200',
      textColor: 'text-blue-800'
    },
    { 
      id: 2, 
      username: '@Zakiiiii', 
      category: 'RELEX', 
      points: 1012, 
      bgColor: 'bg-purple-100',
      categoryColor: 'bg-purple-200',
      textColor: 'text-purple-800'
    },
    { 
      id: 3, 
      username: '@marouazi', 
      category: 'COMM', 
      points: 960, 
      bgColor: 'bg-yellow-100',
      categoryColor: 'bg-yellow-200',
      textColor: 'text-yellow-800'
    }
  ];

  return (
    <div className="flex gap-8 p-6  mb-5">
    
 <div className="flex gap-8 p-6 rounded-lg shadow-lg">
  {/* HR OVERVIEW - Prend toute la largeur */}
 
    
      <div className="flex gap-4">
        {leaders.map((leader, index) => (
          <div key={leader.id} className={`relative w-48 p-4 rounded-lg ${leader.bgColor}`}>
            <div className="absolute  text-gray-400 text-2xl font-bold">
              #{index + 1}
            </div>
            <div className="flex flex-col items-center gap-2">
              <div className="p-2  rounded-full">
              <img src={`https://robohash.org/${leader.username}.png`} alt={leader.username} className="w-12 h-12 rounded-full" />

              </div>
              <span className="text-bold text-gray-900">{leader.username}</span>
              <div className="flex items-center gap-2 mt-2">
                <div className={`flex items-center ${leader.textColor}`}>
                  <span className={`px-2 py-1 rounded text-sm font-bold ${leader.categoryColor}`}>
                    {leader.category}
                  </span>
                  <span className="mx-2 font-bold">|</span>
                  <span className="text-lg font-bold">
                    {leader.points}
                    <span className="text-sm text-gray-500 ml-1">pts</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="w-64 p-4 bg-gray-900 rounded-lg text-white">
        <h2 className="mb-4 text-lg">Statistics</h2>
        <div className="h-32">
          <LineChart width={200} height={100} data={chartData}>
                {/* Grid lines for better readability */}
                <CartesianGrid strokeDasharray="3 3" stroke="gray" opacity={0.3} />
                
                {/* Y-Axis for "Points (pts)" */}
                <YAxis tick={{ fill: "white" }} label={{ value: "Pts", angle: -90, position: "insideLeft", fill: "white" }} />

              

                    <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#ffffff" 
                    strokeWidth={2} 
                    dot={false}
                    />
          </LineChart>
        </div>
        <div className="mt-4">
          <div className="flex justify-between text-sm">
            <span>Active</span>
            <span>Inactive</span>
          </div>
          <div className="w-full h-2 bg-gray-700 rounded-full mt-2">
            <div className="w-3/5 h-full  rounded-full"></div>
          </div>
          <div className="flex justify-between text-sm mt-1">
            <span>58%</span>
            <span className="text-gray-400">42%</span>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default LeaderBoard;