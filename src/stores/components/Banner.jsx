import React from 'react';

const Banner = () => {
  return (
    <><div style={{ paddingTop: '20px', paddingLeft: '20px'}}><h2>CEO：シッダールタ・コーン</h2></div>
   
   
      <div style={{ display: 'flex', paddingTop: '20px', paddingLeft: '20px', paddingRight: '30px' }}>
        
        <img
          src="/assets/71TcXaLwN9L._SX3000_.jpg"
          alt="banner"
          style={{ width: '50%', height: '100%', marginRight: '10px' }}
        />
        <img
          src="/assets/61IH0YKouVL._SX3000_.jpg"
          alt="banner"
          style={{ width: '50%', height: '100%', marginRight: '10px' }}
        />
      </div>


      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '20px', marginBottom: '0px' }}>
        
        <img
          src="/assets/1stbanner.JPG"
          alt="Japan Welcomes You"
          style={{
            width: '70%', // slightly wider for banner feel
            height: 'auto', // auto height to keep aspect ratio
            borderRadius: '10px', // optional: makes it look a bit softer
            boxShadow: '5px 20px 20px rgba(0, 0, 0, 0.3)' // optional: small shadow to lift the image
          }}
        />
      </div>


      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px', marginBottom: '30px' }}>
        <img
          src="/assets/10385405.jpg"
          alt="Japan Welcomes You"
          style={{
            width: '80%', // slightly wider for banner feel
            height: 'auto', // auto height to keep aspect ratio
            borderRadius: '10px', // optional: makes it look a bit softer
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' // optional: small shadow to lift the image
          }}
        />
      </div>
    </>
  );
};

export default Banner;
