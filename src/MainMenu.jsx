import React, { useState, useEffect } from 'react';

import './styles.css';
import { warmBeverages, coldBeverages, desserts } from './productLists';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Beverage from './Beverage';
import Dessert from './Dessert';

const MainMenu = () => {

    const menuSectionNames = ["Varm drikke", "Kald drikke", "Dessert"];

    const [menuSection, setMenuSection] = useState(menuSectionNames[0]);
    const [menuItems, setMenuItems] = useState([]);

    let menuItem;

    useEffect(() => {
        if (menuSection === menuSectionNames[0]) {
            setMenuItems(warmBeverages.map(warmBeverage => 
                <Beverage 
                    key={warmBeverage.id}
                    name={warmBeverage.name[0]}
                    price={warmBeverage.price[0]}
                />))
        } else if (menuSection === menuSectionNames[1]) {
            setMenuItems(coldBeverages.map(coldBeverage => 
                <Beverage 
                    key={coldBeverage.id}
                    name={coldBeverage.name[0]}
                    price={coldBeverage.price[0]}
                />))
        } else if (menuSection === menuSectionNames[2]) {
            setMenuItems(desserts.map(dessert => 
                <Dessert 
                    key={dessert.id}
                    name={dessert.name}
                    price={dessert.price}
                />))
        }
    }, [menuSection])

    return (
        <>
            <div>
                <button 
                    className={`menu-section-button ${menuSection === menuSectionNames[0] ? "active-button" : ""}`}
                    onClick={() => setMenuSection(menuSectionNames[0])}>{menuSectionNames[0]}
                </button>
                <button 
                    className={`menu-section-button ${menuSection === menuSectionNames[1] ? "active-button" : ""}`}
                    onClick={() => setMenuSection(menuSectionNames[1])}>{menuSectionNames[1]}
                </button>
                <button 
                    className={`menu-section-button ${menuSection === menuSectionNames[2] ? "active-button" : ""}`}
                    onClick={() => setMenuSection(menuSectionNames[2])}>{menuSectionNames[2]}
                </button>
            </div>

            <div>
                <h1>{menuSection}</h1>
                <div className="menu-item-container">
                    {menuItems.map(item => {
                        return <>{item}</>
                    })}
                </div>
            </div>
        </>
    )
}

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

innsiden av button i ManuChangerButton: {props.clicked ? 'Jeg er trykket på ' : 'Trykk på meg'}

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