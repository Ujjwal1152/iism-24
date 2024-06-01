import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import GameCelebration from "../components/aboutuspage";
import AboutUs from "../components/aboutwidgets";

function Videos() {
    return (
      <div>
          <MyNavbar/>
          <GameCelebration/>
          {/* <AboutUs/> */}
          <Footer/> 
      </div>
    );
  }
  
  export default Videos;