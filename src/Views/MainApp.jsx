import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
// import Varukorg from './varukorg/korg';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HandleKurv } from '../Model/handleKurv';

const MainApp = (props) => {
  const [products, setProducts] = useState({});
  return (
    <Router>
      <HandleKurv.Provider value={{ products, setProducts }}>
        <header id='header-container'>
          <h1 id='header-title' className='font-cursive'>
            Kafé Judas
          </h1>
          <img id='hamburger-icon' src='assets/hamburger-icon.png' />
        </header>
        <Link to='/MainMenu'>Main Menu</Link>
        <Link to='/FrontPage/FrontPage'>Front Page</Link>

        <Switch>
          <Route exact path='/MainMenu/:area?' component={MainMenu} />
          {/* <Route exact path='/Varukorg/' component={Varukorg} /> */}
          <Route exact path='/FrontPage/FrontPage' component={FrontPage} />
        </Switch>
      </HandleKurv.Provider>
    </Router>
  );
};

export default MainApp;
