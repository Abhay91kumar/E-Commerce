import React, { useContext } from 'react'
import { GlobalState } from '../../../GlobalState'
import HomeLists from '../Utils/HomeLists';

const Home = () => {
const state=useContext(GlobalState);
const [products]=state.productAPI.products

  return (
    <div className='homes'>{
      products.map((home)=>{
        return <HomeLists key={home._id} product={home}/>
      })
    }
       
    </div>
  )
}

export default Home
