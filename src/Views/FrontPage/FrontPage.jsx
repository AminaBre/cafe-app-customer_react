import React, { useEffect, useContext, useState } from 'react';

import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../Styles/styles.css';
import { VarmDrikke } from '../Menu/Components/VarmDrikke';
import { KallDrikke } from '../Menu/Components/KallDrikke';
import { Desserts } from '../Menu/Components/Dessert';
import { PricePreView } from '../../Components/PricePreView';
import { HandleKurv } from '../../Model/handleKurv';

const MainMenu = () => {
  let totalPrice = 1;

  // Disse to er states her i MainMenu (se "useState"). Inne i useState(her) er det lagt utgangspunkt-verdier.
  // Gjeldende verdi ligger alltid i første variabel i arrayet, og endres når funksjonen (andre del av arrayet) kalles.

  const handleKurv = () => {
    return HandleKurv.map((
      orderItem 
    ) => (
    <div className="order-output">{orderItem}</div>
    ));
  };

  return (
    <>
      <div>{handleKurv}</div>
      <div id="Front-page-menu-choice-container">
      </div>
      
      <div class="card-menu">

        <div class="warmDrinks">
          <Link to='/MainMenu/VarmDrikke'>
            <img class='menuImg' src='/assets/menuWarmDrinks.jpg' alt="Kaffe" />
            <h1 className="frontpage-card-text">Test</h1>
        </Link>
        </div>
        <div class="coldDrinks">
        <Link to='/MainMenu/KallDrikke'>
          <img class='menuImg' src='/assets/cold-drinks-menu.jpg' alt="Iste" />
        </Link>
        </div>
        <div class="dessert">
          <Link to='/MainMenu/Desserts'>
            <img class='menuImg' src='/assets/dessert-image.jpg' alt="Kanelsnurr" />
        </Link>
        </div>
      </div>

      <PricePreView totalPrice={totalPrice} />

    </>
  );
};

export default MainMenu;