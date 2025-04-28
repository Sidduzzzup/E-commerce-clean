import React from 'react'


import { mData } from '../data/mobiles'
import { Link } from 'react-router-dom'



const Mobiles = () => {



  return (
   <>
    <div className="proTitle">
        <h2>Mobiles</h2>
      </div>

      <Link to='/mob'>
   <div className='proSection'>
        {
     mData.map((item)=>{   
        
        return(
                    <div key={item.id} className='imgBox'>
                        
                <img className='proImage' src={item.image} alt={item.name || 'Mobile Phone'} />
                   
                    </div>
                )
        })
        }
    </div>
    </Link>
   
   </>
  )
}

export default Mobiles