// STYLES
import './component-styles/NavMenu.css'

// IMAGES
import headphoneThumb from '../assets/shared/desktop/image-category-thumbnail-headphones.png'
import speakerThumb from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import earphoneThumb from '../assets/shared/desktop/image-category-thumbnail-earphones.png'
import caret from '../assets/shared/desktop/icon-arrow-right.svg'

const NavMenu = () => {

return (
    <div className='nav-menu'>
      <div className="nav-item">
        <img className='nav-img' id="headphones-thumb" src={headphoneThumb} alt="headphones thumbnail" />
        <h5 className='nav-title'>HEADPHONES</h5>
        <button className='nav-btn'><span>SHOP</span><img src={caret} alt="caret" /></button>
      </div>
      <div className="nav-item">
        <img className='nav-img' id="speakers-thumb" src={speakerThumb} alt="speaker thumbnail" />
        <h5 className='nav-title'>SPEAKERS</h5>
        <button className='nav-btn'><span>SHOP</span><img src={caret} alt="caret" /></button>
      </div>
      <div className="nav-item">
        <img className='nav-img' id="earphones-thumb" src={earphoneThumb} alt="earphones thumbnail" />
        <h5 className='nav-title'>EARPHONES</h5>
        <button className='nav-btn'><span>SHOP</span><img src={caret} alt="caret" /></button>
      </div>
    </div>
  )
};

export default NavMenu;
