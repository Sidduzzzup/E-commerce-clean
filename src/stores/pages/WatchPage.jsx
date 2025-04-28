import React from 'react'

import { watchData } from "../data/watch";

import Navbarr from '../components/Navbarr'

import { Link } from 'react-router-dom'

export const WatchPage = () => {
  return (
    <>
     <Navbarr />
          <div className="proTitle">
              <h2>Electronics Section</h2>
          </div>

<div>
          <div className='ele'>
              {watchData.map((item) => {

                  return (
                    <React.Fragment>
                        <Link to={`/watches/${item.id}`}>
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
export default WatchPage

