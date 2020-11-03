import React from 'react';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Styles/Modal.css'

export const Modal = ({ show, close}) => {
    return (
        <div className="modal-wrapper" 
        style={{
            display: show ? 'block' : 'none'
            //transform: show ? 'translateY(0vh)' : 'translateY(-100vh)',
            //opacity: show ? '1' : '0'
        }}>
            <div className="modal-content">
                <div className="modal-header">
                <button onClick={close} classnName="close-modal-button">x</button>
                </div>
                    <div className="modal-body">
                        <h2 className="modal-menu-text">Hva leter du etter?</h2>
                        <Link to='/FrontPage/FrontPage'>
                            <h3>Fremsiden</h3>
                        </Link>
                        <Link to='/MainMenu'>
                            <h3>Hovedmeny</h3>
                        </Link>
                        <Link to='/ShoppingCart'>
                            <h3>Handlekurv</h3>
                        </Link>
                        <Link to='/FrontPage/FrontPage'>
                            <h3>Ordrehistorikk</h3>
                        </Link>
                        <Link to='/Contact'>
                            <h3>Kontakt oss</h3>
                        </Link>
                        <Link to='/FrontPage/FrontPage'>
                            <h3>Andre kaféer</h3>
                        </Link>
                    </div>
            </div>
        </div>
    )
};
