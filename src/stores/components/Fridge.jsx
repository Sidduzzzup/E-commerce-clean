import React from 'react'
import { fridgeData } from '../data/fridge'
import { Link } from "react-router-dom";

const Fridge = () => {
  return (
    <> 
   
          <div className="proTitle">
            <h2>American Fridges</h2>
          </div>

          <Link to='/fridge'>
          <div  className="proSection">

         { fridgeData.map((item)=>{
            return( 
            <div key={item.id} className="imgBox">
                <img className="proImage"  src={ item.image } alt={ item.name || 'Refrigerator' } />
            </div>


          )})}

          </div>
          </Link>

 
          </>
  )
}

export default Fridge