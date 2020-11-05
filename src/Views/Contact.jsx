import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HandleKurv } from '../Model/handleKurv';

export const Contact = () => {

    return(

        <>

<header id='header-container'>
        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive'>
          Kafé Judas
        </Link>
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' />
      </header>
        <body>
          <div class="contact-form-container texture-background">
            <div class="contact-form">
            <h3 className="info-txt">40644715</h3>
            <h3 className="info-txt">cafe@judas.com </h3>
              <img id='telephone-icon' src='../assets/icons/telephone-icon.png' />
              <img id='mail-icon' src='../assets/icons/mail-icon.png' />
            </div>
          <div class="cafe-map">
            <h3 className="map-txt">Hvor holder vi til?</h3>
          <img id='map-img' src='../assets/icons/map.jpg' />
        </div>
        </div>
        </body>
        </>

    )

}

export default Contact;