import React, { useState } from 'react';
import FrontPage from './FrontPage/FrontPage';
import MainMenu from './Menu/MainMenu';
import Shoppingcart from './Shoppingcart';
import '../Styles/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Modal } from '../Modal';
import Expander from '../Components/Expander';

export const OrderHistory = () => {

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
          Ordrehistorikk
        </Link>
        <Link to='/FrontPage/FrontPage' onClick={start}>
          <img id='back-arrow-icon' src='../assets/back-arrow.png' alt='arrow-icon'/>
        </Link>
        
          <Modal show={show} close={closeModalHandler}/>   
        <img id='hamburger-icon' src='../assets/hamburger-icon.png' alt='hamburger-icon' onClick={() => {setShow(true); start()}}/>

      </header>

     <div className='content-background'>
        <div className="other-container">
          <h2 className="other-title payment-title">Ordrehistorikk</h2>
        </div>
        <Expander title='1. august 2020' icon="shopping-cart.png">
          <div className='expander-text'>
            2 filterkaffe (liten) for kroner 28 per stk. <br/>
            1 kanelbolle for kroner 46. <br/><br/>
            Totalpris: 102 kroner.
          </div>
        </Expander>
        <Expander title='28. august 2020' icon="shopping-cart.png">
          <div className='expander-text'>
            1 cappucino (stor) for kroner 46. <br/>
            1 croissant for kroner 38. <br/><br/>
            Totalpris: 84 kroner.
          </div>
        </Expander>
        <Expander title='3. september 2020' icon="shopping-cart.png">
          <div className='expander-text'>
            2 filterkaffe (liten) for kroner 28 per stk. <br/>
            1 kanelbolle for kroner 46. <br/><br/>
            Totalpris: 102 kroner.
          </div>
        </Expander>
        <Expander title='21. september 2020' icon="shopping-cart.png">
          <div className='expander-text'>
            1 cappucino (stor) for kroner 46. <br/>
            1 croissant for kroner 38. <br/><br/>
            Totalpris: 84 kroner.
          </div>
        </Expander>
        <Expander title='7. oktober 2020' icon="shopping-cart.png">
          <div className='expander-text'>
            2 filterkaffe (liten) for kroner 28 per stk. <br/>
            1 kanelbolle for kroner 46. <br/><br/>
            Totalpris: 102 kroner.
          </div>
        </Expander>
        
     </div>
      
    
        </>

    )

}

export default OrderHistory;