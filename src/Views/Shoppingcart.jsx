import React, { useEffect, useContext, useState } from 'react';

import { HandleKurv } from '../Model/handleKurv';
import { PricePreView } from '../Components/PricePreView';
import { Beverage } from '../Components/Beverage';
import { Dessert } from '../Components/Dessert';

export const Shoppingcart = (props) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const handleKurv = useContext(HandleKurv);

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
      <div>
        {Object.keys(handleKurv.products).map((product) => {
          console.log("Vara:  " + product);
          return Object.keys(handleKurv.products[product]).map((size) => {
            console.log("Storlek:  " + size);
            const amount = handleKurv.products[product][size].antal;
            const aPrice = handleKurv.products[product][size].price;
            console.log("Antal:  " + amount);
            console.log("Pris:  " + aPrice);
          return <div className="shopping-cart-output">Du har beställt {amount} {product} ({size}). Pris per: {aPrice} kr,-</div>;
          });
        })}
      </div>
      <div>Totalpris: {totalPrice}</div>
    </>
  );
}

export default Shoppingcart;
