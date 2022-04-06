// STYLES
import About from './About';
import BgImgTeaser from './BgImgTeaser';
import './component-styles/Home.css'
import Footer from './Footer';

// COMPONENTS
import HeroBanner from './HeroBanner';
import Navbar from './Navbar';
import NavMenu from './NavMenu';
import SplitTeaser from './SplitTeaser';
import TallTeaser from './TallTeaser';

const Home = () => {

  return (
    <div className="home">
      <Navbar />
      <HeroBanner />
      <NavMenu />
      <TallTeaser />
      <BgImgTeaser />
      <SplitTeaser />
      <About />
      <Footer />
    </div>
  )
};

export default Home;
