import React, { useEffect, useContext, useState } from 'react';

import { HandleKurv } from '../Model/handleKurv';
import { PricePreView } from '../Components/PricePreView';
import { Beverage } from '../Components/Beverage';
import { Dessert } from '../Components/Dessert';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';
import { PaymentModal } from '../Model/PaymentModal'
import { desserts } from '../Model/productLists';

export const Shoppingcart = (props) => {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleKurv = useContext(HandleKurv);
  let audio = new Audio("/click.mp4")


  const [isOpen, setIsOpen] = useState(false);

  const start = () => {
    audio.play()
  }

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
          Handlekurv
        </Link>

        <Link to='/MainMenu' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' onClick={() => {setShow(true); start()}}/>

      </header>
      <div className="texture-background">
        <div id='all-shopping-cart-outputs'>
        {Object.keys(handleKurv.products).map((product) => {
          return Object.keys(handleKurv.products[product]).map((size) => {
            /* Increase amount in basket */
            const addToBasket = (item) => {
              
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
                    <div className="shopping-cart-output">{product} ({size}). Pris per: {aPrice} kr,-
                    </div>
                    <div className="shopping-cart-buttons-container">
                      <span onClick={() => {
                        removeFromBasket(handleKurv.products[product][size]);
                      }}
                      className={'button minus-button'}
                      >
                      -
                      </span>
                      <span className="number-of-items">{amount}</span>
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
        <div className='other-cart-container'>
          <h4 className='cart-title'>Noe ekstra?</h4>
          <img className='extras-img' src={desserts[3].img} alt={desserts[3].id}/>
          <img className='extras-img' src={desserts[6].img} alt={desserts[6].id}/>
        </div>
        <div className='other-cart-container'>
          <h4 className='cart-title'>Kommentar til bestillingen?</h4>
          <input type="text" placeholder="Vennligst havremelk i cappuccinoen"/>
        </div>
        {totalPrice > 0 &&
        <div id="payment-ready-container">  
          <button className="pay-now" onClick={() => setIsOpen(true)}>
            Fullfør ordre på <strong>{totalPrice}</strong> kroner</button> 
          <Modal open={isOpen}>Hvordan ønsker du å betale?</Modal>
        </div>
        }
      </div>
    </> 
  );
  
}

export default Shoppingcart;
