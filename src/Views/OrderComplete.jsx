import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';
import Expander from '../Components/Expander';
import Timer from '../Views/timer';

export const OrderComplete = () => {

  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  let audio = new Audio("/click.mp4")

  const [isOpen, setIsOpen] = useState(false);

  const start = () => {
    audio.play()
  }

    return(

        
        

        <>

<header id='header-container'>
        <div>
          {show ? <div className="back-drop" onClick={closeModalHandler}></div> : null}
        </div>

        <Link to='/FrontPage/FrontPage' h1 id='header-title' className='font-cursive' onClick={start}>
          Kafé Judas
        </Link>
        <Link to='/Payment' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' />
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' onClick={() => {setShow(true); start()}}/>

      </header>

      <div id="order-details">
          <h1 id="order-details-header">Ordredetaljer</h1>
          <p id="order-details-text">1 Cappuchino (liten)</p>
          <p id="order-details-text">1 Brownie</p>
          <div id="countdown"><Timer></Timer></div>
      </div>


        <Expander title="Din ordrehistorikk" >
            <div className="order-hisory">
                <h3>2020 - 11 - 06</h3>
                <p>Kaffe (liten)</p>
            </div>
            <div className="order-hisory">
                <h3>2020 - 10 - 07</h3>
                <p>Brownie</p>
            </div>
            <div className="order-hisory">
                <h3>2020 - 09 - 01</h3>
                <p>Americano (Stor)</p>
            </div>
         </Expander>

         
      
    
        </>

    )

}

export default OrderComplete;