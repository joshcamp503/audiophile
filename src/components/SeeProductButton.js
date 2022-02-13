// HOOKS
import { useNavigate } from 'react-router-dom';

const SeeProductButton = ({ productRoute }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate(productRoute)
  }
  
  return (
    <button 
      className="see-product" 
      onClick={handleClick}
    >SEE PRODUCT
    </button>
  )
};

export default SeeProductButton;
