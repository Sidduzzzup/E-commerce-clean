import React from 'react'
import { furnitureData } from '../data/furniture'
import Navbarr from '../components/Navbarr'
import { Link } from 'react-router-dom'

export const FurniturePage = () => {
  return (
    <>
     <Navbarr />
          <div className="proTitle">
              <h2>Electronics Section</h2>
          </div>

<div>
          <div className='ele'>
              {furnitureData.map((item) => {

                  return (
                    
                    <Link to={`/furs/${item.id}`} > 
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



export default FurniturePage