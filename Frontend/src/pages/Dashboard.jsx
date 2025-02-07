import LeaderBoard from "../components/LeaderBoard";
import MemberList from "../components/Member-list";
import LeftSidebar from "../components/LeftSidebar";  




function Dashboard () {
  


  return (

  
  <div className="p-6 max-w-6xl mx-auto space-y-8">
     <LeftSidebar />
    <LeaderBoard />
    <MemberList/> 
    


      
      

    </div>
  );
}

export default Dashboard; 
