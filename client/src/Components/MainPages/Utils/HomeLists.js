// import { useContext } from 'react';
// import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

const HomeLists = ({ product }) => {


    // const state = useContext(GlobalState);
    // const [products] = state.userAPI.products;

    return (
        <div className="home-slider-container">
                        <Link to={`/detail/${product._id}`}>
                            <img src={product.image?.url} alt={product.title} width="85%" height='500px' />
                        </Link>
            <div className="home-slider">
                    <div className="home-card" key={product._id}>
                        <div className="home-box">
                            <h2 title={product.title}>{product.title}</h2>
                            <span>₹ {product.price}</span>
                            <p>{product.description}</p>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default HomeLists;
