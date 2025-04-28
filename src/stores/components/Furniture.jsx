import React from 'react'
import { furnitureData } from '../data/furniture'
import { Link } from 'react-router-dom'

const Furniture = () => {
  return (
    <> 
   
          <div className="proTitle">
            <h2>Foreign Style Furniture</h2>
          </div>

         <Link to='/fur'>
          <div  className="proSection">

         { furnitureData.map((item)=>{
            return( 
            <div  className="imgBox" key={item.id}>
                <img className="proImagebooks"  src={ item.image } />
            </div>


          )})}

          </div>
          </Link>

 
          </>
  )
}

export default Furniture