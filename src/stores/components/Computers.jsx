import React from "react";
import { Link } from "react-router-dom";

import { computerData } from "../data/computers";
import ComputersPage from '../pages/ComputersPage'


const Computers = () => {
    return (
        <>
         
          <div className="proTitle">
            <h2>Laptops</h2>
          </div>
         
          <Link to='/coms'>
          <div className="proSection">
          {computerData.map((item) => {
        return (
          <div className="imgBox" key={item.id}>
           
            <img className="proImage" src={item.image} alt="" />
            
          </div>
        );
      })}
      </div>
      </Link>
     
      
    </>
  );
};

export default Computers;