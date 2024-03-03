import React from 'react';
import { Card } from '../Card/Card';

const menu = {
  'tea': [
    { name: 'Special Tea', price: '20' },
    { name: 'Black Tea', price: '20' },
    { name: 'Hot Coffee', price: '30' },
    { name: 'Black Coffee', price: '30' },
    { name: 'Hot Milk', price: '50' },
    {backgroundUrl: 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709463696/tea-bg_n5iq1b.jpg'}
  ],
  'coffee': [
    { name: 'Cappuccino', price: '25' },
    { name: 'Espresso', price: '22' },
    { name: 'Latte', price: '28' },
    { name: 'Mocha', price: '32' },
    { name: 'Iced Coffee', price: '35' },
    {backgroundUrl: 'https://res.cloudinary.com/dx2ukhurs/image/upload/v1709463696/tea-bg_n5iq1b.jpg'}
  ],
};

export function Menu() {
  return (
    <div>
      {Object.keys(menu).map(category => (
        <ul key={category}>
          <h2>{category}</h2>
          {menu[category].map((item, index) => (
            <div key={index}>
              <Card itemDetails={item}/>
            </div>
          ))}
        </ul>
      ))}
    </div>
  );
}
