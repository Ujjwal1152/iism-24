import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import GameCelebration from "../components/aboutuspage";
import AboutUs from "../components/aboutwidgets";
import CoreTeamPage from "../components/coreteampage";
import Content from "../components/coreteamcontent";
import TeamMembersGrid from "../components/coreteamcontent";

function CoreTeam() {
    return (
      <div>
          <MyNavbar/>
          <CoreTeamPage/>
          <TeamMembersGrid/>
          {/* <Content/> */}
          {/* <AboutUs/> */}
          <Footer/> 
      </div>
    );
  }
  
  export default CoreTeam;