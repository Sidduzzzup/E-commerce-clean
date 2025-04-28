import React from 'react'
import { womanData } from '../data/woman'
import { Link } from "react-router-dom";

const Women = () => {
  return (
    <> 
      <div className="proTitle">
        <h2>Women Korean Fashion</h2>
      </div>

      <Link to='/women'>
        <div className="proSection">
          {womanData.map((item) => (
            <div key={item.id} className="imgBox">
              <img className="proImage" src={item.image} alt={item.name || 'Women\'s Fashion Item'} />
            </div>
          ))}
        </div>
      </Link>
    </>
  )
}

export default Women