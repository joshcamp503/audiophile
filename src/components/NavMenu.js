// STYLES
import './component-styles/NavMenu.css'

// IMAGES
import headphoneThumb from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakerThumb from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneThumb from '../assets/shared/desktop/image-category-thumbnail-earphones.png'

// COMPONENTS
import ShopLink from './ShopLink'

const NavMenu = ({ closeNav }) => {
  return (
    <div className="nav nav-menu">
      <div className="nav nav-item">
        <img className='nav nav-img' id="headphones-thumb" src={headphoneThumb} alt="headphones thumbnail" />
        <h5 className='nav nav-title'>HEADPHONES</h5>
        <ShopLink route={'/products/headphones'} closeNav={closeNav} />
      </div>
      <div className="nav nav-item">
        <img className='nav nav-img' id="speakers-thumb" src={speakerThumb} alt="speaker thumbnail" />
        <h5 className='nav nav-title'>SPEAKERS</h5>
        <ShopLink route={'/products/speakers'} closeNav={closeNav} />
      </div>
      <div className="nav nav-item">
        <img className='nav nav-img' id="earphones-thumb" src={earphoneThumb} alt="earphones thumbnail" />
        <h5 className='nav nav-title'>EARPHONES</h5>
        <ShopLink route={'/products/earphones'} closeNav={closeNav} />
      </div>
    </div>
  )
};

export default NavMenu;
