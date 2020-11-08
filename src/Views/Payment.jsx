import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';

export const Payment = () => {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  let audio = new Audio("/click.mp4")

  const [isOpen, setIsOpen] = useState(false);

  const start = () => {
    audio.play()
  }

    return (
        <>
          <header id='header-container'>
            <div>
              {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
            </div>

            <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive' onClick={start}>
              Kafé Judas
            </Link>
            <Link to='/Shoppingcart' onClick={start}>
              <img id='back-arrow-icon' src='../assets/back-arrow.png' alt='arrow-icon' />
            </Link>
            
              <Modal show={show} close={closeModalHandler}/>
            <img id='hamburger-icon' src='../assets/hamburger-icon.png' alt='hamburger-icon' onClick={() => {setShow(true); start()}}/>
        </header>

        <div className="content-background">
          <div className="other-container">
            <h2 className="other-title payment-title">Velg betalingsløsning</h2>
            <Link id="test2" to='OrderComplete' onClick={start}>
              <div className="payment-option-box">
                <img id="payment-pic" src='vipps.png' alt='vipps-logo'></img>
              </div>
              <div className="payment-option-box">
                <img onclick={start}id="payment-pic" src='mastercard.jpg' alt='mastercard-logo'></img>
              </div>
            </Link>
          </div>
        </div>
      </>
    )
}

export default Payment;