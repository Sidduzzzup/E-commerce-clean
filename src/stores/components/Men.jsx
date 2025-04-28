import React from 'react'
import { menData } from '../data/men'
import { Link } from "react-router-dom";

const Men = () => {
  return (
    <> 
      <div className="proTitle">
        <h2>Men London Fashion</h2>
      </div>

      <Link to='/men'>
        <div className="proSection">
          {menData.map((item) => (
            <div key={item.id} className="imgBox">
              <img className="proImage" src={item.image} alt={item.name || 'Men\'s Fashion Item'} />
            </div>
          ))}
        </div>
      </Link>
    </>
  )
}

export default Men