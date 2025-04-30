import React from 'react'
import { tvsData } from '../data/tv'
import { Link } from "react-router-dom";




const TV = () => {
  return (
    <> 
     <div className="koreanname">
     <div className="proTitle">
        <h2>QLED 4K TVs</h2>
      </div>
      
      
      <Link to='/Tvs'>
      <div className='proSection'>
        {
           tvsData.map((item)=>{   
        
        return(
                    <div className='imgBox' key={item.id}>
                        
                <img className='proImage' src={item.image} alt="" />
                   
                    </div>
                )
        })}
    </div>
    </Link>



    </div>
   
   </>
  )
}


export default TV