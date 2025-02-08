import { LayoutGrid, Search, Edit, LogOut } from 'lucide-react';
import {Link } from 'react-router-dom';
import logo from "../assets/images/logo.png";
const Sidebar = () => {
  return (
    <div className="fixed left-0 top-0 h-full w-16 bg-black flex flex-col items-center py-4 space-y-9">
      <div className="bg-white  rounded-lg p-2">
        <img src={logo} alt="Logo" className="w-10 h-10 rounded-lg" />
      </div>
      
      <div className="flex flex-col space-y-4 mt-6">
        <button className="text-white hover:bg-white/10 p-2 rounded-lg">
          <LayoutGrid className="w-6 h-6" />
        </button>
        <button className="text-white/50 hover:bg-white/10 p-2 rounded-lg">
          <Search className="w-6 h-6" />
        </button>
        <Link to="/Events">
        <button className="text-white/50 hover:bg-white/10 p-2 rounded-lg">
          <Edit className="w-6 h-6" />
        </button></Link>
      </div>
      
      <div className="mt-auto mb-4">
        <button className="text-white/50 hover:bg-white/10 p-2 rounded-lg">
          <LogOut className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;