import React, { useState, useContext } from 'react';
import { HandleKurv } from '../Model/handleKurv';

const Dessert = (props) => {
  const handleKurv = useContext(HandleKurv);

  const getNrOrderOf = (props) => {
    if (handleKurv.products[props.type.id] ) {
      return handleKurv.products[props.type.id].antal;

    }
    return 5;
  };

  const addToBasket = (props) => {
    const nrOrderedOf = getNrOrderOf(props);
    handleKurv.setProducts((prevstate) => {
      return {
        ...prevstate,
        [props.type.id]: {
          ...prevstate[props.type.id],
          [props.type.name]: {
            antal: nrOrderedOf + 1,
            price: props.type.price,
          },
        },
      };
    });
  };

  const removeFromBasket = (props) => {
    const nrOrderedOf = getNrOrderOf(props);
    if (nrOrderedOf > 0) {
      handleKurv.setProducts((prevstate) => {
        return {
          ...prevstate,
          [props.type.id]: {
            ...prevstate[props.type.id],
            [props.type.name]: {
              antal: nrOrderedOf - 1,
              price: props.type.price
            },
          },
        };
      });
    }
  };

  return (
    <div className='menu-item-box-beverage'>
      <div className='menu-item-title'>{props.type.id}</div>

          <div>
            <span
              onClick={() => {
                removeFromBasket(props);
              }}
              className={'button'}
            >
              -
            </span>
            <span>{getNrOrderOf(props)}</span>
            <span
              onClick={() => {
                addToBasket(props);
              }}
              className={'button'}
            >
              +
            </span>
            <span>
              {props.type.name} {props.type.price}kr
            </span>
          </div>
       
    </div>
  );
};

export default Dessert;