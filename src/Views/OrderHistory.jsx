import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';

export const OrderHistory = () => {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  let audio = new Audio("/click.mp4")

  const [isOpen, setIsOpen] = useState(false);

  const start = () => {
    audio.play()
  }

    return(

        <>

<header id='header-container'>
        <div>
          {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
        </div>

        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive' onClick={start}>
          Kafé Judas
        </Link>
        <Link to='/OrderComplete' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' onClick={() => {setShow(true); start()}}/>

      </header>

     <div>Tidligere ordre</div>
      
    
        </>

    )

}

export default OrderHistory;