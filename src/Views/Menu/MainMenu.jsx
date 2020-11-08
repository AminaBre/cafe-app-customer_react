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
import { Modal } from '../../Modal';

const MainMenu = () => {
  const menuSectionNames = ['Varm drikke', 'Kald drikke', 'Dessert'];
  let totalPrice = 1;
  let audio = new Audio("/click.mp4")

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [menuSection, setMenuSection] = useState(menuSectionNames[0]); // menuSection blir til "Varm drikke", "Kald drikke" eller "Dessert".
  const [menuItems, setMenuItems] = useState([]);
  let { area } = useParams();

  const start = () => {
    audio.play()
  }


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
        <div>
          {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
        </div>

        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive' onClick={start}>
          Hovedmeny
        </Link>
        <Link to='/FrontPage/FrontPage' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' alt="arrow-icon" />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' alt = "hamburger-icon" src='../assets/hamburger-icon.png' onClick={() => {setShow(true); start()}}/>

      </header>
      
      

      <div className="content-background">
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
blabla
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
