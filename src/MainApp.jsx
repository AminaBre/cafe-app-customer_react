import React from 'react';

import FrontPage from './FrontPage';
import MainMenu from './MainMenu';
import './styles.css';
import { BrowserRouter as Router, Switch, Route, Link}  from "react-router-dom";

const MainApp = (props) =>  {

  return (
    <Router>
      <header id="header-container">
        <h1 id="header-title" className="font-cursive">Kafé Judas</h1>
        <img id="hamburger-icon" src="assets/hamburger-icon.png" />
      </header>
      <Link to="/MainMenu">Main Menu</Link>
      <Link to="/FrontPage">Front Page</Link>

      <Switch>
        <Route path="/MainMenu" component={MainMenu} />
        <Route path="/" component={FrontPage} />
      </Switch>

    </Router>
  )
}

export default MainApp;