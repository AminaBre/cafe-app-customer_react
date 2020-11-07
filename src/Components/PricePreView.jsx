import React, { useEffect, useContext, useState } from 'react';
import { HandleKurv } from '../Model/handleKurv';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

export const PricePreView = (props) => {
  const handleKurv = useContext(HandleKurv);
  const [totalPrice, setTotalPrice] = useState(0);
  let audio = new Audio("/click.mp4")

  const start = () => {
    audio.play()
  }

  useEffect(() => {
    calcTotalPrice();
  }, [handleKurv.products]);

  const calcTotalPrice = () => {
    let total = 0;
    console.log('korgen', handleKurv.products);
    Object.keys(handleKurv.products).forEach((product) => {
      console.log('product', handleKurv.products[product]);
      Object.keys(handleKurv.products[product]).forEach((size) => {
        const amount = handleKurv.products[product][size].antal;
        const aPrice = handleKurv.products[product][size].price;
        total += amount * aPrice;
      });
    });
    setTotalPrice(total);
  };

  return (
    <>
      {totalPrice > 0 && (
        <div id='total-price-div'>
          <div id='total-price-text-div'>
            Totalpris: <p id="p-total-price">{totalPrice} kr</p>
          </div>
          <Link to='/Shoppingcart' onClick={start}>
             <button  id='go-to-shopping-cart-button'>
               <img className="shopping-cart-img" src="../assets/icons/shoppingCart.png"></img>
             <p className="p-go-to-shoppingCart">Gå til handlekurv</p>
             </button>
          </Link>

        
        </div>
      )}
    </>
  );
};
