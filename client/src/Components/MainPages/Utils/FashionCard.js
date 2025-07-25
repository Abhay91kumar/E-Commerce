import { useContext } from 'react';
import BtnRender from './BtnRender';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

const FashionCard = ({ fashion }) => {
  const state = useContext(GlobalState);
  const [isAdmin] = state.userAPI.isAdmin;

  return (
    <div className="fashion-card">
      {isAdmin && (
        <input type="checkbox" checked={fashion.checked} />
      )}

      <Link to={`/detail/${fashion._id}`}>
        <img src={fashion.image?.url} alt={fashion.title} width="100" />
      </Link>

      <div className="fashion-box">
        <h2 title={fashion.title}>{fashion.title}</h2>
        <span>₹ {fashion.price}</span>
        <p>{fashion.description}</p>
      </div>

      <BtnRender product={fashion} />
    </div>
  );
};

export default FashionCard;
