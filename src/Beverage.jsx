import React from 'react'

const Beverage = (props) => {
    return (
        <div className="menu-item-box-beverage">
            <div className="menu-item-title">{props.name}</div>
            <div className="size-button-container">
                <button className="size-button">S</button>
                <button className="size-button">M</button>
                <button className="size-button">L</button>
            </div>
            <div className="price-div-beverage">Pris: {props.price} kr,-</div>
        </div>
    )
}

export default Beverage;