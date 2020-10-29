import React, { useEffect, useContext, useState } from 'react';
import { HandleKurv } from '../Model/handleKurv';

export const PricePreView = (props) => {
  const handleKurv = useContext(HandleKurv);
  const [totalPrice, setTotalPrice] = useState(0);

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
            Totalpris: <b>{totalPrice} kr</b>
          </div>
          <button id='go-to-shopping-cart-button'>Gå til handlekurv</button>
        </div>
      )}
    </>
  );
};
