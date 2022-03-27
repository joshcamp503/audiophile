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

// HOOKS
import { useNavbar } from '../hooks/useNavbar';

const Home = () => {
  const { showNavMenu } = useNavbar() 

  return (
    <div className="home">
      <Navbar />
      {showNavMenu && <div className="showNavMenu"><NavMenu /></div>}
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
