import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HandleKurv } from '../Model/handleKurv';

const MainApp = (props) => {

  const [fontSize, setFontsize] = useState(16);
  const [products, setProducts] = useState({});


  const allElements = document.getElementById("root");
  allElements.style.fontSize = `${fontSize}px`;

  return (
    <Router>
      <HandleKurv.Provider value={{ products, setProducts }}>
        <header id='header-container'>
          <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive'>
            Kafé Judas
          </Link>
          <img id='hamburger-icon' src='assets/hamburger-icon.png' />

          <div className="font-changer">
            <button onClick = {() => setFontsize(fontSize + 5)}>+ increase</button>
            <button onClick = {() => setFontsize(fontSize - 5)}>- decrease</button>
          </div>

        </header>

        <Switch>
          <Route exact path='/MainMenu/:area?' component={MainMenu} />
          <Route exact path='/ShoppingCart/' component={Shoppingcart} />
          <Route component={FrontPage} />
        </Switch>
      </HandleKurv.Provider>
    </Router>
  );
};

export default MainApp;
