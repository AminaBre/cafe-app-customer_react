import React from 'react'

const Dessert = (props) => {
    return (
        <div className="menu-item-box-dessert">
            <div className="menu-item-title">{props.name}</div>
            <div className="price-div-dessert">Pris: {props.price} kr,-</div>
        </div>
    )
}

export default Dessert;