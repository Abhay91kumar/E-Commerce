import { useContext } from 'react';
import BtnRender from './BtnRender';
import { GlobalState } from '../../../GlobalState';
import { Link } from 'react-router-dom';

const ProductLists = ({ product }) => {


    const state = useContext(GlobalState);
    const [isAdmin] = state.userAPI.isAdmin;

    return (

        <div className="product-card">

            {
                isAdmin && <input type='checkbox' checked={product.checked} />
            }
            <Link id='' to={`/detail/${product._id}`} > <img src={product.image?.url} alt='' width="100" /></Link>
            <div className='product_box'>
                <h2 title={product.title}>{product.title}</h2>
                <span>₹ {product.price}</span>
                <p>{product.description}</p>
            </div>
            <BtnRender product={product}/>
        </div>

    );
};

export default ProductLists;
