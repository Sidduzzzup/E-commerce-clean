import React from 'react'
import { watchData } from '../data/watch'
import { Link } from "react-router-dom";

const Watch = () => {
  return (
    <> 
   
          <div className="proTitle">
            <h2>World of Watches </h2>
          </div>

          <Link to='/watch'>
          <div  className="proSection">

         { watchData.map((item)=>{
            return( 
            <div key={item.id} className="imgBox">
                <img className="proImage"  src={ item.image } alt={ item.name || 'Watch' } />
            </div>


          )})}

          </div>
          </Link>

 
          </>
  )
}

export default Watch