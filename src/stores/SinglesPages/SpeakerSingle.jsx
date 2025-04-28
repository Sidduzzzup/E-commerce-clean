import React from "react"
import { speakerData } from "../data/speaker"
import { useParams } from "react-router-dom"
import Navbarr from "../components/Navbarr"

const SpeakerSingle = () => {
  const { id } = useParams();
  
const product = speakerData.find((item) => item.id === id);

  if (!product) {
    return (
      <>
        {/* <Navbarr /> */}
            <div className="ind-section">
          <h2>Product not found</h2>
        </div>
      </>
    );
  }

  console.log("Image URL:", product.image); // Log the image URL

  return (
    <>
    <div className="navsin">
      <Navbarr />
      </div>
  
  
    
      <div className="ind-section">

        <div className="ind-image">
          <img src={product.image} />
        </div>
        
        <div className="ind-details">
          <div className="ind-company">
            <h2>{product.company}</h2>
          </div>
          <div className="ind-model space">
            <h3>{product.model}</h3>
          </div>
          <div className="ind-price space">
            <h2>{product.price}</h2>
          </div>
        
          <div className="ind-desc space">
            <p>{product.model}</p>
          </div>
          <div className="ind-desc space">
            <p>{product.category}</p>
          </div>
          <div className="ind-desc space">
            <p>{product.description}</p>
          </div>
          <button onClick={()=>addToCart(product)}>Add to Cart</button>
        </div>
      </div>
    
    </>
  )
}

export default SpeakerSingle;
