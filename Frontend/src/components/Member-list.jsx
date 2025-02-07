import { useReactTable, getCoreRowModel } from "@tanstack/react-table";

function MemberList() {
  const data = [
    { name: "Alice", points: 100, engagement: "Active", department: "HR", role: "Manager", badge: "Gold" },
    { name: "Bob", points: 50, engagement: "Inactive", department: "IT", role: "Developer", badge: "CO-Manager,CO-EX,LEAD" },
  ];

  const columns = [
    { accessorKey: "name", header: "Name" },
    { accessorKey: "points", header: "Points" },
    { accessorKey: "engagement", header: "Engagement" },
    { accessorKey: "department", header: "Department" },
    { accessorKey: "role", header: "Role" },
    { accessorKey: "badge", header: "Badge" },
  ];

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="p-6 max-w-8xl mx-auto  ">
      <h2 className="text-2xl text-left italic mb-4 ">Member's List</h2>

 
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
        {table.getRowModel().rows.map((row) => (
          <div key={row.id} className="grid grid-cols-6 items-center py-3 bg-white shadow-sm rounded-lg px-4">
            <p className="font-medium text-gray-400">{row.getValue("name")}</p>
            <p className="text-gray-700">{row.getValue("points")}</p>
            <p className={`font-semibold ${row.getValue("engagement") === "Active" ? "text-green-500" : "text-red-500"}`}>
              {row.getValue("engagement")}
            </p>
            <p className="text-gray-700">{row.getValue("department")}</p>
            <p className=" text-gray-700 px-2 py-1 pr-[100px] text-center">{row.getValue("role")}</p>
            <div className="flex flex-wrap gap-1">
            {row.getValue("badge").split(",").map((badge, index) => (
                <p key={index} className="bg-blue-100 text-blue-600 px-2 py-1 rounded-md text-center">
                  {badge.trim()}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MemberList;
