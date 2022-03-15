// IMAGES
import caret from '../assets/shared/desktop/icon-arrow-right.svg'

import { NavLink } from 'react-router-dom';

const ShopLink = ({ route }) => {
  return (
    <NavLink to={route} >
      <span>SHOP</span><img src={caret} alt="caret" />
    </NavLink>
  );
};

export default ShopLink;
