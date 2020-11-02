import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../../Styles/styles.css';
import { VarmDrikke } from './Components/VarmDrikke';
import { KallDrikke } from './Components/KallDrikke';
import { Desserts } from './Components/Dessert';
import { MenuSelection } from './Components/MenuSelection';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { PricePreView } from '../../Components/PricePreView';
import { HandleKurv } from '../../Model/handleKurv';
import { render } from '@testing-library/react';

const MainMenu = () => {
  const menuSectionNames = ['Varm drikke', 'Kald drikke', 'Dessert'];
  let totalPrice = 1;

  // Disse to er states her i MainMenu (se "useState"). Inne i useState(her) er det lagt utgangspunkt-verdier.
  // Gjeldende verdi ligger alltid i første variabel i arrayet, og endres når funksjonen (andre del av arrayet) kalles.
  const [menuSection, setMenuSection] = useState(menuSectionNames[0]); // menuSection blir til "Varm drikke", "Kald drikke" eller "Dessert".
  const [menuItems, setMenuItems] = useState([]);
  let { area } = useParams();

  const getArea = () => {
    switch (area) {
      case 'VarmDrikke':
        return <VarmDrikke />;
      case 'KallDrikke':
        return <KallDrikke />;
      case 'Desserts':
        return <Desserts />;
      default:
        return <VarmDrikke />;
    }
  };

  return (
    
    <>
    <header id='header-container'>
        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive'>
          Kafé Judas
        </Link>
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' />
        <Link to='/FrontPage/FrontPage'>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
      </header>

      <div className="menu-background">
        <MenuSelection />
        {getArea()}
        <div className="space-maker"></div>
        <PricePreView totalPrice={totalPrice} />
      </div>
    </>
  );
};

export default MainMenu;

/*
          const App = (props) => {
            const [buttonClicked, changeComponent] = useState(0);

    return (
        <div>
            <EnkelKnapp
                trykketPaa={buttonClicked}
                change={()=>{changeComponent(0)}}
            />
            <EnkelKnapp
                trykketPaa={buttonClicked}
                change={()=>{changeComponent(1)}}
            />
            <EnkelKnapp
                trykketPaa={buttonClicked}
                change={()=>{changeComponent(2)}}
            />

            {buttonClicked === 0 &&
                <h1>varme drikker</h1>}

            {buttonClicked === 1 &&
                <h1>kalde drikker</h1>
            }

            {buttonClicked === 2 &&
                <h1>desserter</h1>
            }
        <div/>
    );
}

const MenuChangerButton = (props) => {

    return (
        <button 
            onCick={props.change}
            className="menu-changer-button">
                {props.buttonText}
        </button>
    );
}
*/
