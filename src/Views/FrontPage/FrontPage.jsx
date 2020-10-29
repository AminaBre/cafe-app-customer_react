import React, { useEffect, useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  let { area } = useParams();

  const getArea = () => {
  };

  const handleKurv = () => {
    return handleKurv.map((
      orderItem 
    ) => (
    <div className="order-output">{orderItem}</div>
    ));
  };

  return (
    <>
      <div>{handleKurv}</div>
      <h3>Welcome to Kafè Judas - Choose a menu</h3>
      <div id="Front-page-menu-choice-container">
        <MenuSelection/>
      </div>
      {getArea()}
      <PricePreView totalPrice={totalPrice} />
    </>
  );
};

export default MainMenu;