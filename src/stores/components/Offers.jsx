import React from 'react';

const Offers = () => {
  const imagePath = '/offers.JPG';  // Corrected path

  return (
    <div>
      <img
        className="offers"
        src={imagePath}
        alt="Offers"
        style={{ width: '100%', height: '350px', marginTop: '0px' }} // Adjusted styles for better display
        onError={() => console.error(`Error loading image at ${imagePath}`)}
      />
    </div>
  );
};

export default Offers;
