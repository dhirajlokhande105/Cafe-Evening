import React from 'react'
import "./index.css"

export default function InnerBanner() {
  return (
    <div className='inner-banner'>
        <div className="banner-heading">
          <h1 style={{
            fontSize: "72px", textShadowColor: 'black', textShadowRadius: 10,
            borderColor: 'black',
            borderWidth: 2,
            textShadowOffset: {
              width: 2,
              height: 2,
            },
            color: 'white'
          }}>
            Experience the taste of freshness
          </h1>
        </div>
      
    </div>
  )
}
