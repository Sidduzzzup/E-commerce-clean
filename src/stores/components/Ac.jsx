import React from "react";
import { acData } from "../data/ac";
import { Link } from "react-router-dom";


const Ac = () => {
 

  return (
    <>
      <div className="proTitle">
        <h2>Air Condition</h2>
      </div>

      <Link to='/acs'>
      <div className="proSection">
        {acData.map((item) => {
          return (
            <div key={item.id} className="imgBox">
              <img className="proImage" src={item.image} alt={item.name || 'Air Conditioner'} />
            </div>
          );
        })}
      </div>
      </Link>
    </>
  );
};

export default Ac;