import MyNavbar from "../components/navbar";
import Footer from "../components/footer";
import ImageSlider from "../components/brochure";
import Heading from "../components/brochureheading";

function Brochure() {
    return (
      <div>
          <MyNavbar/>
          <ImageSlider/>
          {/* <Heading/> */}
          <Footer/> 
      </div>
    );
  }
  
  export default Brochure;