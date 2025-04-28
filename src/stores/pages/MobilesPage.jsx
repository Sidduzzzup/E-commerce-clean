import React from 'react'

import { mData } from "../data/mobiles";

import Navbarr from '../components/Navbarr'

import { Link } from 'react-router-dom'

export const MobilesPage = () => {
  return (
    <>
     <Navbarr />
          <div className="proTitle">
              <h2>Electronics Section</h2>
          </div>

<div>
          <div className='ele'>
              {mData.map((item) => {

                  return (
                    <React.Fragment>
                        <Link to={`/mobs/${item.id}`}>
                      <div  className='pageimg'>

                          <img className='imge'  src={item.image} alt="" />
                                          
                   
                     <div className='itemNames'>
                        

                        {item.model},{item.price}

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
export default MobilesPage

