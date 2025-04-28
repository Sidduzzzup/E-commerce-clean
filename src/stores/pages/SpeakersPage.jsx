import React from 'react'

import { speakerData } from "../data/speaker";

import Navbarr from '../components/Navbarr'

import { Link } from 'react-router-dom'

const SpeakersPage = () => {
  return (
    <>
     <Navbarr />
          <div className="proTitle">
              <h2>Electronics Section</h2>
          </div>

<div>
          <div className='ele'>
              {speakerData.map((item) => {

                  return (
                  
                        <Link to={`/speakerss/${item.id}`}>
                      <div  className='pageimg'>

                          <img className='imge'  src={item.image} alt="" />
                                          
                   
                     <div className='itemNames'>
                        

                        {item.brand},{item.price}

                     </div>
                     </div>
                     </Link>
                
                  )
              })}
          </div>
          </div>

      </>
  )
}
export default SpeakersPage

