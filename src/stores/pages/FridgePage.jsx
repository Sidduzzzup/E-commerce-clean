import React from 'react'

import { fridgeData } from "../data/fridge";

import Navbarr from '../components/Navbarr'

import { Link } from 'react-router-dom'

export const FridgePage = () => {
  return (
    <>
     <Navbarr />
          <div className="proTitle">
              <h2>Electronics Section</h2>
          </div>

<div>
          <div className='ele'>
              {fridgeData.map((item) => {

                  return (
                    <React.Fragment>
                        <Link to={`/fridges/${item.id}`}>
                      <div  className='pageimg'>

                          <img className='imge'  src={item.image} alt="" />
                                          
                   
                     <div className='itemNames'>
                        

                        {item.brand},{item.price}

                     </div>
                     </div>
                     </Link>
                 
                 </React.Fragment>
                  )
              })}
          </div>
          </div>

      </>
  )
}
export default FridgePage

