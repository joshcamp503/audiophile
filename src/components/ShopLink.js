// IMAGES
import caret from '../assets/shared/desktop/icon-arrow-right.svg'

import { NavLink } from 'react-router-dom';

const ShopLink = ({ route, closeNav }) => {
  return (
    <NavLink to={route} onClick={closeNav} >
      <span>SHOP</span><img src={caret} alt="caret" />
    </NavLink>
  );
};

export default ShopLink;
