import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { GlobalState } from '../../../GlobalState';

const BtnRender = ({product}) => {

    const state = useContext(GlobalState);
    const [isAdmin] = state.userAPI.isAdmin;
    return (
        <div className='row_btn'>
            {
                isAdmin ? <>
                    <Link id='btn_buy' to={`#!`} >Delete</Link>
                    <Link id='btn_view' to={`'/detail/'${product._id}'`} >Edit</Link>
                </> :<></>
            }
        </div>
    )
}

export default BtnRender
