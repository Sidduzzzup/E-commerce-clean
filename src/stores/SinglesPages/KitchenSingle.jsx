import React from "react"
import { kitchenData } from "../data/kitchen"
import { useParams } from "react-router-dom"
import Navbarr from "../components/Navbarr"

const KitchenSingle = () => {
  const { id } = useParams();
  
const products = kitchenData.find((item) => item.id === id);

  if (!products) {
    return (
      <>
        <Navbarr />
            <div className="ind-section">
          <h2>Product not found</h2>
        </div>
      </>
    );
  }

  console.log("Image URL:", products.image); // Log the image URL

  return (
    <>
    <div className="navsin">
      <Navbarr />
      </div>
  
  
    
      <div className="ind-section">

        <div className="ind-image">
          <img src={products.image} />
        </div>
        
        <div className="ind-details">
          <div className="ind-company">
            <h2>{products.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{products.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{products.price}</h2>
          </div>
        
          <div className="ind-desc space">
            <p>{products.model}</p>
          </div>
          <div className="ind-desc space">
            <p>{products.category}</p>
          </div>
          <div className="ind-desc space">
            <p>{products.description}</p>
          </div>
          <button onClick={()=>addToCart(products)}>Add to Cart</button>
        </div>
      </div>
    
    </>
  )
}

export default KitchenSingle
