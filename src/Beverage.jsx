import React, { useState, useEffect } from 'react';

const Beverage = (props) => {

    const [sizeChoice, setSizeChoice] = useState(0);

    return (
        <div className="menu-item-box-beverage">
            <div className="menu-item-title">{props.name}</div>
            <div className="size-button-container">
                <button className={`size-button`}>Liten</button>
                <button className={`size-button`}>Medium</button>
                <button className={`size-button`}>Stor</button>
            </div>
            <div className="price-div-beverage">Pris: {props.price} kr,-</div>
            <button className="add-to-cart-button">+</button>
        </div>
    )
}

export default Beverage;

/*
<button className={`size-button ${menuSection === menuSectionNames[0] ? "active-button" : ""}`}>Liten</button>
<button className={`size-button ${menuSection === menuSectionNames[1] ? "active-button" : ""}`}>Medium</button>
<button className={`size-button ${menuSection === menuSectionNames[2] ? "active-button" : ""}`}>Stor</button>
*/