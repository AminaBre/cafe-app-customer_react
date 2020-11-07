import React, { useEffect, useContext, useState } from 'react';

import { HandleKurv } from '../Model/handleKurv';
import { PricePreView } from '../Components/PricePreView';
import { Beverage } from '../Components/Beverage';
import { Dessert } from '../Components/Dessert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';
import { PaymentModal } from '../Model/PaymentModal'

export const Shoppingcart = (props) => {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleKurv = useContext(HandleKurv);
  let audio1 = new Audio("/addSound.mp4")
  let audio2 = new Audio("/removeSound.mp4")
  let audio = new Audio("/click.mp4")

  const start = () => {
    audio.play()
  }
  const startAudio1 = () => {
    audio1.play()
  }

  const startAudio2 = () => {
    audio2.play()
  }



  const [isOpen, setIsOpen] = useState(false);


  useEffect(() => {
    calcTotalPrice();
  }, [handleKurv.products]);

  const calcTotalPrice = () => {
    let total = 0;
    Object.keys(handleKurv.products).forEach((product) => {
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
     <header id='header-container'>
        <div>
          {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
        </div>

        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive' onClick={start}>
          Kafé Judas
        </Link>

        <Link to='/MainMenu' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' onClick={() => {setShow(true); start()}}/>

      </header>
      <div>
        {Object.keys(handleKurv.products).map((product) => {
          return Object.keys(handleKurv.products[product]).map((size) => {
            /* Increase amount in basket */
            const addToBasket = (item) => {
              startAudio1();
              
              handleKurv.setProducts((prevstate) => {                                          
                  return {
                    /* Get previous state and update [product] */          
                    ...prevstate,
                    [product]: {
                      [item.storlek]: {
                        size: item.storlek,
                        antal: item.antal + 1,
                        price: item.price
                      },
                    },
                  };                                
              });
            };
          /* Decrease amount in basket */
            const removeFromBasket = (item) => {
              startAudio2();
              if (amount > 0) {
                handleKurv.setProducts((prevstate) => {
                  return {
                    /* Get previous state and update [product] */
                    ...prevstate,
                    [product]: {                  
                      [item.storlek]: {
                        size: item.storlek,
                        antal: item.antal - 1,
                        price: item.price
                      },
                    },
                  };
                });
              }
            };
            const amount = handleKurv.products[product][size].antal;
            const aPrice = handleKurv.products[product][size].price;

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
      <div className="payment-ready-container">
      <div id="totPrice"><strong>Totalpris: {totalPrice}</strong></div>    
        <button className="pay-now" onClick={() => {setIsOpen(true); start(); }}>
          Bekreft min ordre</button> 
        <Modal open={isOpen}>Hvordan ønsker du å betale?</Modal>
        </div>
    </> 
  );
  
}

export default Shoppingcart;
