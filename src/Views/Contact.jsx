import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';

export const Contact = () => {

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
          Kontakt oss
        </Link>
        <Link to='/FrontPage/FrontPage' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' onClick={() => {setShow(true); start()}}/>

      </header>
      
        <body>
          <div class="contact-form-container texture-background">
            <div class="contact-form">
            <h3 className="info-txt">40644715</h3>
            <h3 className="info-txt">cafe@cafe.com </h3>
              <img id='telephone-icon' src='../assets/icons/telephone-icon.png' />
              <img id='mail-icon' src='../assets/icons/mail-icon.png' />
              <div className="other-container">
                <h3 className="other-title map-txt">Hvor holder vi til?</h3>
             </div>
          <img id='map-img' src='../assets/icons/map.jpg' />
        </div>
        </div>
        </body>
        </>

    )

}

export default Contact;