import logo from './logo.svg';
import './home.css';
import VideoGallery from '../components/videogallery';
import Gallery from '../components/participatingiits';
import AboutSection from '../components/aboutSection';
import Footer from '../components/footer';
import InterIITExclusive from '../components/interiitexclusive';
import SponsorSection from '../components/sponsor';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Loadpage from '../components/scrolleventlistner';
import ThemeComponent from '../components/themecomponent';
import AboutUs from '../components/aboutwidgets';
import MascotSection from '../components/mascot';
import AboutTheGames from '../components/aboutthegames';
import Sports from '../components/sports';
import ParallaxHome from '../components/parallaxhome';
import ParallaxAwe from '../components/parallaxawe';
import ParallaxInspire from '../components/parallaxinspire';
import ParallaxBuffer from '../components/parallaxbuffer';
import ParallaxConquer from '../components/parallaxconquer';
import MyNavbar from '../components/HomeNav';
import Main from '../components/videoloader';


function Home() {
  return (
    <div>
        <MyNavbar/>
        <Main/>
        <AboutUs/>
        <ParallaxHome/>
        <AboutTheGames/>
        <ParallaxAwe/>
        <ThemeComponent/>
        <ParallaxConquer/>
        <MascotSection/>
        <ParallaxInspire/>
        <Sports/>
        <ParallaxBuffer/>
        {/* <AboutSection/> */}
        {/* <InterIITExclusive/> */}
        <Gallery/>
        <VideoGallery/>
        <SponsorSection/>
        <Footer/>
    </div>
  );
}

export default Home;
