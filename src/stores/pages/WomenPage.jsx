import React from 'react'

import { womanData } from "../data/woman";

import Navbarr from '../components/Navbarr'

import { Link } from 'react-router-dom'

export const WomenPage = () => {
  return (
    <>
     <Navbarr />
          <div className="proTitle">
              <h2>Electronics Section</h2>
          </div>

<div>
          <div className='ele'>
              {womanData.map((item) => {

                  return (
                    <React.Fragment>
                        <Link to={`/womenss/${item.id}`}>
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
export default WomenPage

