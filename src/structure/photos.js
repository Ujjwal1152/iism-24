import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import GameCelebration from "../components/aboutuspage";
import AboutUs from "../components/aboutwidgets";

function Photos() {
    return (
      <div>
          <MyNavbar/>
          <GameCelebration/>
          {/* <AboutUs/> */}
          <Footer/> 
      </div>
    );
  }
  
  export default Photos;