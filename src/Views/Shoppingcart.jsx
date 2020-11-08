import React, { useEffect, useContext, useState } from "react";

import { HandleKurv } from "../Model/handleKurv";
import { PricePreView } from "../Components/PricePreView";
import { Beverage } from "../Components/Beverage";
import { Dessert } from "../Components/Dessert";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Modal } from "../Modal";
import { PaymentModal } from "../Model/PaymentModal";
import { desserts } from '../Model/productLists';

export const Shoppingcart2 = (props) => {
  const [show, setShow] = useState(false);
  const closeModalHandler = () => setShow(false);
  const [totalPrice, setTotalPrice] = useState(0);
  const handleKurv = useContext(HandleKurv);
  let audio = new Audio("/click.mp4");
  let audio1 = new Audio("/addSound.mp4")
  let audio2 = new Audio("/removeSound.mp4")

  const [isOpen, setIsOpen] = useState(false);

  const startAudio1 = () => {
    audio1.play()
  }

  const startAudio2 = () => {
    audio2.play()
  }


  const start = () => {
    audio.play();
  };

  useEffect(() => {
    calcTotalPrice();
  }, [handleKurv.products]);

  const calcTotalPrice = () => {
    let total = 0;
    Object.keys(handleKurv.products).forEach((product) => {
      Object.keys(handleKurv.products[product]).forEach((size) => {
        const amount = handleKurv.products[product][size].antal;
        const aPrice = handleKurv.products[product][size].price;
        total += amount * aPrice;
      });
    });
    setTotalPrice(total);
  };

  const removeFromBasket = (productName, sizeName) => {
    startAudio2();
    if (handleKurv.products[productName][sizeName]["antal"] > 0) {
      const newProducts = {
        ...handleKurv.products,
        [productName]: {
          ...handleKurv.products[productName],
          [sizeName]: {
            antal: handleKurv.products[productName][sizeName]["antal"] - 1,
            price: handleKurv.products[productName][sizeName]["price"],
          },
        },
      };
      handleKurv.setProducts(newProducts);
    };
  };

  const addToBasket = (productName, sizeName) => {
    startAudio1();
    const newProducts = {
      ...handleKurv.products,
      [productName]: {
        ...handleKurv.products[productName],
        [sizeName]: {
          antal: handleKurv.products[productName][sizeName]["antal"] + 1,
          price: handleKurv.products[productName][sizeName]["price"],
        },
      },
    };
    handleKurv.setProducts(newProducts);
  };

  
  const addExtra = (productName, sizeName) => {
  }

  const orderList = Object.keys(handleKurv.products).map(
    (product) =>
      Object.keys(handleKurv.products[product]).map((size) => (
        <div className="shopping-cart-output-container">
          <div className="shopping-cart-output">
            {handleKurv.products[product][size]["antal"]}{" "}
            {product} ({size}). Pris per:{" "}
            {handleKurv.products[product][size]["price"]} kr,-
          </div>
          <div className="shopping-cart-buttons-container">
            <span
              onClick={() => {
                removeFromBasket(product, size);
              }}
              className={"button minus-button"}
            >
              -
            </span>
            <span className="number-of-items">{handleKurv.products[product][size]["antal"]}</span>
            <span
              onClick={() => {
                addToBasket(product, size);
              }}
              className={"button plus-button"}
            >
              +
            </span>
          </div>
        </div>
      ))
      );


  return (
    <>
      <header id="header-container">
        <div>
          {show ? (
            <div className="back-drop" onClick={closeModalHandler}></div>
          ) : null}
        </div>

        <Link
          to="/FrontPage/FrontPage"
          h1
          id="header-title"
          className="font-cursive"
          onClick={start}
        >
          Handlekurv
        </Link>

        <Link to="/MainMenu" onClick={start}>
          <img id="back-arrow-icon" src="../assets/back-arrow.png" />
        </Link>

        <Modal show={show} close={closeModalHandler} />
        <img
          id="hamburger-icon"
          src="../assets/hamburger-icon.png"
          onClick={() => {
            setShow(true);
            start();
          }}
        />
      </header>

      <div className="content-background">
        <div id='all-shopping-cart-outputs'>
          {orderList}
        </div>

        <div className='other-container'>
            <h4 className='other-title'>Noe ekstra?</h4>
            <img onClick={addExtra('Croissant', 'vanlig')} className='extras-img' src="../assets/noe-ekstra (1).jpg" alt={desserts[3].id}></img>
            <img className='extras-img' src="../assets/noe-ekstra (2).jpg" alt={desserts[6].id}></img>
          </div>
          <div className='other-container'>
            <h4 className='other-title'>Kommentar til bestillingen?</h4>
            <input type="text" placeholder="Vennligst havremelk i cappuccinoen"/>
          </div>
          {totalPrice > 0 &&
          <div id="payment-ready-container">  
          <Link to= '/Payment'>
            <button className="pay-now" onClick={() => {setIsOpen(true); start(); }}>
              Fullfør ordre på <strong>{totalPrice}</strong> kroner</button> 
              </Link>
            <Modal open={isOpen}>Hvordan ønsker du å betale?</Modal>
          </div>
          }
        </div>

        <Modal open={isOpen}>Hvordan ønsker du å betale?</Modal>
      

    </>
  );
};
export default Shoppingcart2;