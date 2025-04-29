import React from 'react'

const PsOffers = () => {
    const imagePath = '/assets/ps5.png';  // Define the image path
  
    //console.log(`Image path: ${imagePath}`);  // Log the image path
  return (
<div>
   
    <div className="sony-name">
   <h2>Play Station Sony Japan Edition</h2>
  </div>
  
    <div>
       <img className="offerss" src={imagePath} alt="Offers" onError={() => console.error(`Error loading image at ${imagePath}`)} />
    </div>
    </div>
   
  );
};

export default PsOffers;