import React from 'react';

const Offers = () => {
  const imagePath = '/assets/offers.jpg';  // Define the image path
  
  //console.log(`Image path: ${imagePath}`);  // Log the image path

  return (
    <div style={{ position: "" }}>
      <img className="offers" src={imagePath} alt="Offers" onError={() => console.error(`Error loading image at ${imagePath}`)} />
    </div>
  );
};

export default Offers;
