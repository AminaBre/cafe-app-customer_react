import React, { useState, useContext, useEffect } from 'react';

import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';
import Expander from '../Components/Expander';
import Timer from '../Views/timer';
import { Shoppingcart2 } from './Shoppingcart';
import '../Styles/styles.css';
import { PricePreView } from '../Components/PricePreView';
import { HandleKurv } from "../Model/handleKurv";


export const OrderComplete = (props) => {

  const handleKurv = useContext(HandleKurv);
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  let audio = new Audio("/click.mp4")
  const [totalPrice, setTotalPrice] = useState(0);

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

  const orderList = Object.keys(handleKurv.products).map(
    (product) =>
      Object.keys(handleKurv.products[product]).map((size) => (
        <div className="shopping-cart-output-container">
          <div className="shopping-cart-output">
            {handleKurv.products[product][size]["antal"]}{" "}
            {product} ({size}). Pris per:{" "}
            {handleKurv.products[product][size]["price"]} kr,-
          </div>
        </div>
      ))
    );

    return (
        <>

      <header id='header-container'>
        <div>
          {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
        </div>

        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive' onClick={start}>
          Kafé Judas
        </Link>
        <Link to='/Payment' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' onClick={() => {setShow(true); start()}}/>

      </header>

      <div className="content-background">
      
        <div className="other-container">
          <h2 className="other-title payment-title">Din ordre for {totalPrice} kroner</h2>
        </div>

        <div id='all-shopping-cart-outputs'>
            {orderList}
        </div>

        <div className="other-container">
          <div id="countdown"><Timer></Timer></div>
        </div>
      </div>

         
      
    
        </>

    )

}

export default OrderComplete;