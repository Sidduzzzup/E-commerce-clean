import React from 'react'

const ClothsOffer = () => {
    const imagePath = '/assets/cloth.jpg';
    return (

   
   
 
   <div>
      <img className="cloth-name" src={imagePath} alt="Offers" onError={() => console.error(`Error loading image at ${imagePath}`)} />
   </div>
  
  
 );
};

export default ClothsOffer