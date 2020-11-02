import React, { useEffect, useContext, useState } from 'react';

import { useParams } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import '../../Styles/styles.css';
import { VarmDrikke } from '../Menu/Components/VarmDrikke';
import { KallDrikke } from '../Menu/Components/KallDrikke';
import { Desserts } from '../Menu/Components/Dessert';
import { MenuSelection } from '../Menu/Components/MenuSelection';
import { PricePreView } from '../../Components/PricePreView';
import { HandleKurv } from '../../Model/handleKurv';

const MainMenu = () => {
  const menuSectionNames = ['Varm drikke', 'Kald drikke', 'Dessert'];
  let totalPrice = 1;

  // Disse to er states her i MainMenu (se "useState"). Inne i useState(her) er det lagt utgangspunkt-verdier.
  // Gjeldende verdi ligger alltid i første variabel i arrayet, og endres når funksjonen (andre del av arrayet) kalles.
  const [menuSection, setMenuSection] = useState(menuSectionNames[0]); // menuSection blir til "Varm drikke", "Kald drikke" eller "Dessert".
  const [menuItems, setMenuItems] = useState([]);
  const [fontSize, setFontsize] = useState(16);
  let { area } = useParams();

  const getArea = () => {
  };

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
      <p style={{
        fontSize:`${fontSize}px`
      }}>Welcome to Kafè Judas - Choose a menu</p>
      <div id="Front-page-menu-choice-container">
        <MenuSelection/>
      </div>
      <div className="font-changer">
        
        <button onClick = {() => setFontsize(fontSize + 5)}>+ increase</button>
        <button onClick = {() => setFontsize(fontSize - 5)}>- decrease</button>
        <p></p>
      
      </div>

      <div class="cardMenu">

        <h3 class="menuText warmDrinks">Varm drikke</h3>
        <h3 class="menuText coldDrinks">Kald drikke</h3>
        <h3 class="menuText desserts">Dessert</h3>

      <Link to='/MainMenu/VarmDrikke'><img id='menuImg' src='/assets/warm-beverage-images/cortado-img.png' alt="Bilde av kaffe" />
      </Link>
      <Link to='/MainMenu/KallDrikke'><img id='menuImg' src='/assets/cold-drinks-images/ice-tea-img.png' alt="Bilde av iste" />
      </Link>
      <Link to='/MainMenu/Desserts'>
        <img id='menuImg' src='/assets/desserts-images/cinnamon-roll-img.png' alt="Bilde av kanelsnurr" />
      </Link>
      </div>
      {getArea()}
      <PricePreView totalPrice={totalPrice} />

    </>
  );
};

export default MainMenu;