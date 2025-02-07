import LeaderBoard from "../components/LeaderBoard";
import MemberList from "../components/Member-list";

function HR() {
  return (

  
  <div className="p-6 max-w-6xl mx-auto space-y-8">
      {/* HR OVERVIEW - Prend toute la largeur */}
      <h2 className="text-2xl text-white-600 font-bold text-left w-full">
        HR OVERVIEW
      </h2>
      {/* LeaderBoard au-dessus */}
      <LeaderBoard />

      {/* MemberList en dessous */}
      <MemberList />
    </div>
  );
}

export default HR;
