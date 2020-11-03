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
        
        <div>
            Our number:
        </div>
        
        </>

    )

}

export default Contact;