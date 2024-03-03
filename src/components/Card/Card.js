import React from 'react'

export function Card(props) {
    const {itemDetails}=props
    const {name, price, backgroundUrl}=itemDetails
    const cardStyle={
    backgroundImage: `url(${backgroundUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    color: 'white',
    padding: '20px',
    margin: '10px',
    borderRadius: '10px',
    textAlign: 'center',
    }
  return (
    <div>
        <li style={cardStyle}>
            <p>{name}</p>
            <p>{price}</p>
        </li>
      
    </div>
  )
}
