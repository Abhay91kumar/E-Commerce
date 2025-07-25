import { useContext } from 'react';
import BtnRender from './BtnRender';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

const MobileCard = ({ mobile }) => {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <div className="mobile-card">
      {isAdmin && (
        <input type="checkbox" checked={mobile.checked} />
      )}

      <Link to={`/detail/${mobile._id}`}>
        <img src={mobile.image?.url} alt={mobile.title} width="100" />
      </Link>

      <div className="mobile-box">
        <h2 title={mobile.title}>{mobile.title}</h2>
        <span>₹ {mobile.price}</span>
        <p>{mobile.description}</p>
      </div>

      <BtnRender product={mobile} />
    </div>
  );
};

export default MobileCard;
