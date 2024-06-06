import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import GameCelebration from "../components/aboutuspage";
import SportsSchedule from "../components/sportscards";

function Schedule() {
    return (
      <div>
          <MyNavbar/>
          <GameCelebration/>
          <SportsSchedule/> 
          <Footer/>
      </div>
    );
  }
  
  export default Schedule;