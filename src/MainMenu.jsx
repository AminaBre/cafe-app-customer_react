import React, { useState, useEffect } from 'react';

import './styles.css';
import { warmBeverages, coldBeverages, desserts } from './productLists';
import Beverage from './Beverage';
import Dessert from './Dessert';

const MainMenu = () => {

    const menuSectionNames = ["Varm drikke", "Kald drikke", "Dessert"];

    // Disse to er states her i MainMenu (se "useState"). Inne i useState(her) er det lagt utgangspunkt-verdier.
    // Gjeldende verdi ligger alltid i første variabel i arrayet, og endres når funksjonen (andre del av arrayet) kalles.
    // "setMenuSection(verdi)" kalles når man trykker på én av de tre meny-knappene (onClick... set...(x) i hver button).
    const [menuSection, setMenuSection] = useState(menuSectionNames[0]); // menuSection blir til "Varm drikke", "Kald drikke" eller "Dessert".
    const [menuItems, setMenuItems] = useState([]);

    // useEffect tar to argumenter, nr. 2 er "[menuSection]". Alt i nr. 1 kjører dersom [menuSection] endres!
    useEffect(() => {
        if (menuSection === menuSectionNames[0]) { // Altså: dersom man har trykket på "Varme drikker"
            setMenuItems(warmBeverages.map(warmBeverage => // "warmBeverages" er arrayet fra productLists.js-fila. Én Beverage-komponent lages per objekt i arrayet, og alle lagres i "menuItems" med setState.
                <Beverage   // Se Beverage.jsx for å se hvordan komponenten bygges
                    key={warmBeverage.id}
                    name={warmBeverage.name[0]}
                    price={warmBeverage.price[0]}
                />))
        } else if (menuSection === menuSectionNames[1]) { // Dersom man har trykket på "Kalde drikker"...
            setMenuItems(coldBeverages.map(coldBeverage => 
                <Beverage 
                    key={coldBeverage.id}
                    name={coldBeverage.name[0]}
                    price={coldBeverage.price[0]}
                />))
        } else if (menuSection === menuSectionNames[2]) {
            setMenuItems(desserts.map(dessert => 
                <Dessert    // Dessert.jsx er litt annerledes, fordi den ikke skal inkludere valg av størrelser
                    key={dessert.id}
                    name={dessert.name}
                    price={dessert.price}
                />))
        }
    }, [menuSection]) // Når denne endres, altså hvilken meny-knapp man har trykket på (varm d, kald d, dessert) så kjøres det over.

    return (
        <>
            <div>
                {/* Ternary if-else i className, sånn at den legger til "active-button" som klasse dersom state (menuSection) tilsvarer,
                og dermed kan man ha egen CSS-styling på den knappen som er aktiv.
                onClick endrer state på menuSection med argumentet i funksjonen (altså som setState) */}
                <button
                    className={`menu-section-button ${menuSection === menuSectionNames[0] ? "active-button" : ""}`}
                    onClick={() => setMenuSection(menuSectionNames[0])}>
                    {menuSectionNames[0]} {/* Det som står på knappen. Hentes bare statisk fra menuSectionNames-array øverst */}
                </button>
                <button 
                    className={`menu-section-button ${menuSection === menuSectionNames[1] ? "active-button" : ""}`}
                    onClick={() => setMenuSection(menuSectionNames[1])}>
                    {menuSectionNames[1]}
                </button>
                <button 
                    className={`menu-section-button ${menuSection === menuSectionNames[2] ? "active-button" : ""}`}
                    onClick={() => setMenuSection(menuSectionNames[2])}>
                    {menuSectionNames[2]}
                </button>
            </div>

            <div>
                <h1>{menuSection}</h1>

                {/* Siden laster/menyknapp trykkes på > [menuSection] endres og trigger useEffect > 
                ett komponent lages per objekt i riktig array i productList.js og lagres som array i [menuItems] > 
                og denne her rendrer til slutt én per komponent i menuItems */}
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