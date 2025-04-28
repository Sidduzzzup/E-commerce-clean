import React from 'react'
import { speakerData } from '../data/speaker'

import { Link } from 'react-router-dom'

const Speakers = () => {
  return (
    <> 
   
          <div className="proTitle">
            <h2>Dolby Atmos</h2>
          </div>

          <Link to='/speaker'>
          <div  className="proSection">

         { speakerData.map((item)=>{
            return( 
            <div  className="imgBox" key={item.id}>
                <img className="proImage"  src={ item.image } />
            </div>


          )})}

          </div>
          </Link>

 
          </>
  )
}

export default Speakers