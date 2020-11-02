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
          return Object.keys(handleKurv.products[product]).map((size) => {
            /* Get number of items */
            const getNrOrderOf = (item) => {
              if (handleKurv.products[product] && handleKurv.products[product][item.storlek]) { // noe feil her? dunno
                // alert(JSON.stringify(handleKurv.products[product][item.storlek]));
                return handleKurv.products[product][item.storlek].antal;
              }
              return 0;
            };
            /* Increase amount in basket */
            const addToBasket = (item) => {
              const nrOrderedOf = getNrOrderOf(item);
              handleKurv.setProducts((prevstate) => {
                return {
                  ...prevstate,
                  [product]: {
                    ...prevstate[product],
                    [item.storlek]: {
                      antal: nrOrderedOf + 1,
                      price: item.price,
                    },
                  },
                };
              });
            };
          /* Decrease amount in basket */
            const removeFromBasket = (item) => {
              const nrOrderedOf = getNrOrderOf(item);
              if (nrOrderedOf > 0) {
                handleKurv.setProducts((prevstate) => {
                  return {
                    ...prevstate,
                    [product]: {
                      ...prevstate[product],
                      [item.storlek]: {
                        antal: nrOrderedOf - 1,
                        price: item.price
                      },
                    },
                  };
                });
              }
            };
            const amount = handleKurv.products[product][size].antal;
            const aPrice = handleKurv.products[product][size].price;
            console.log("Logging product:  " + product);
            console.log("Logging size:  " + size);
            console.log("Logging amount:  " + amount);
            console.log("Logging price per:  " + aPrice);

            /* Final order output */
          return <div className='shopping-cart-output-container'>
                    <div className="shopping-cart-output">Du har bestilt {amount} {product} ({size}). Pris per: {aPrice} kr,-
                    </div>
                    <div className="shopping-cart-buttons-container">
                      <span onClick={() => {
                        removeFromBasket(handleKurv.products[product][size]);
                      }}
                      className={'button minus-button'}
                      >
                      -
                      </span>
                      <span onClick={() => {
                        addToBasket(handleKurv.products[product][size]);
                      }}
                      className={'button plus-button'}
                      >
                      +
                      </span>
                    </div>
                 </div>;
          });
        })}
      </div>
      <div>Totalpris: {totalPrice}</div>
    </> 
  );
  
}

/* <div className='menu-item-box-dessert'>
        <div className='menu-item-title'>{props.type.id}</div>
            {props.type.size.map((item) => {
                return (
                <div className="size-buttons-container">
                    <span 
                    onClick={() => {
                        removeFromBasket(item);
                    }}
                    className={'button minus-button'}
                    >
                    -
                    </span>
                    <span>{getNrOrderOf(item)}</span>
                    <span 
                    onClick={() => {
                        addToBasket(item);
                    }}
                    className={'button plus-button'}
                    >
                    +
                    </span>
                    <span>
                    {item.price} kr,-
                    </span>
                </div>
                );
            })}
         </div> */

export default Shoppingcart;
