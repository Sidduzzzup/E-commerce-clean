import React from 'react'

const RussianBanners = () => {
  return (
    <div>
       <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '60px', marginBottom: '0px' }}>
        
        <img
          src="/actions_1731921905.jpeg"
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
          src="/actions_1742463707.jpg"
          alt="Japan Welcomes You"
          style={{
            width: '80%', // slightly wider for banner feel
            height: 'auto', // auto height to keep aspect ratio
            borderRadius: '10px', // optional: makes it look a bit softer
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' // optional: small shadow to lift the image
          }}
        />
      </div>
    </div>
  )
}

export default RussianBanners
