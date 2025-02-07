import LeaderBoard from "../components/LeaderBoard";
import MemberList from "../components/Member-list";

import AddNewForm from "../components/Add";
import { useState } from "react";

import LeftSidebar from "../components/LeftSidebar";

function HR() {
  const [isOpen,setisOpen]=useState(false)

  return (

  
  <div className="p-6 max-w-6xl mx-auto space-y-8">
    <LeftSidebar />

      
      <h2 className="text-2xl text-white-600 font-bold text-left w-full">
        HR OVERVIEW
      </h2>
      <button onClick={()=> setisOpen(true)}>ADD</button>
      
      {isOpen && <AddNewForm onClose={()=> setisOpen(false)}/>}

    </div>
  );
}

export default HR;
