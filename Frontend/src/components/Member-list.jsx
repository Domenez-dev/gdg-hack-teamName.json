import { useState, useEffect } from "react";
import { useReactTable, getCoreRowModel } from "@tanstack/react-table";
import {Link } from 'react-router-dom';

function MemberList() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await fetch("http://localhost:8000/members");
        const data = await response.json();
        setMembers(data);
      } catch (error) {
        console.error("Error fetching members:", error);
        // Use the sample data as fallback if fetch fails
        setMembers(membersData);
      }
    };
    
    fetchMembers();
  }, []);

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "monthlytScore", header: "Points" },
    { accessorKey: "engagementZone", header: "Engagement" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "role", header: "Role" },
    { accessorKey: "badge", header: "Badge" }
  ];

  const table = useReactTable({
    data: members,  // Changed from 'members' to 'data'
    columns,
    getCoreRowModel: getCoreRowModel()
  });

  return (
    <div className="p-6 max-w-8xl mx-auto">
      <h2 className="text-2xl text-left italic mb-4">Member's List</h2>

      <div className="space-y-2">
        {/* HEADER */}
        <div className="grid grid-cols-6 font-semibold text-gray-600 text-sm py-2 border-b">
          <p>Name</p>
          <p>Points</p>
          <p>Engagement</p>
          <p>Department</p>
          <p>Role</p>
          <p>Badge</p>
        </div>

        {/* LISTE DES MEMBRES */}
        {members.length > 0 && table.getRowModel().rows.map((row) => (
          <Link to="Member">
          <div key={row.id} className="grid grid-cols-6 items-center py-3 bg-white shadow-sm rounded-lg px-4">
            <p className="font-medium text-gray-700">{row.original.name}</p>
            <p className="text-gray-700">{row.original.monthlytScore}</p>
            <p className={`font-semibold ${
              row.original.engagementZone === "Active" ? "text-green-500" : "text-red-500"
            }`}>
              {row.original.engagementZone}
            </p>
            <p className="text-gray-700">{row.original.department}</p>
            <p className="text-gray-700 px-2 py-1 pr-[100px] text-center">{row.original.role}</p>
            <div className="flex flex-wrap gap-1">
              {row.original.badge?.split(",").map((badge, index) => (
                <p key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-center">
                  {badge.trim()}
                </p>
              ))}
            </div>
          </div></Link>
        ))}

        {members.length === 0 && (
          <div className="text-center py-4 text-gray-500">
            No members found
          </div>
        )}
      </div>
    </div>
  );
}

export default MemberList;