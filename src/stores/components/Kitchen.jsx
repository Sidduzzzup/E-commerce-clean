import React from 'react'
import { kitchenData } from '../data/kitchen'
import { Link } from 'react-router-dom'

const Kitchen = () => {
  return (
    <> 
   
          <div className="proTitle">
            <h2>Luxurious Kitchen</h2>
          </div>

          <Link to='/kitchen'>
          <div  className="proSection">

         { kitchenData.map((item)=>{
            return( 
            <div key={item.id} className="imgBox">
                <img className="proImage"  src={ item.image } alt={ item.name || 'Kitchen Item' } />
            </div>


          )})}

          </div>
          </Link>
 
          </>
  )
}

export default Kitchen