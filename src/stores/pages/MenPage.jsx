import React from 'react'

import { menData } from "../data/men";

import Navbarr from '../components/Navbarr'

import { Link } from 'react-router-dom'

export const MenPage = () => {
  return (
    <>
     <Navbarr />
          <div className="proTitle">
              <h2>Electronics Section</h2>
          </div>

<div>
          <div className='ele'>
              {menData.map((item) => {

                  return (
                    <React.Fragment>
                        <Link to={`/menss/${item.id}`}>
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
export default MenPage

