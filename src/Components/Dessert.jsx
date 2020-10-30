import React, { useState, useContext } from 'react';
import { HandleKurv } from '../Model/handleKurv';

const Dessert = (props) => {
  const handleKurv = useContext(HandleKurv);

  const getNrOrderOf = (item) => {
    if (handleKurv.products[props.type.id] && handleKurv.products[props.type.id][item.storlek]) {
      return handleKurv.products[props.type.id][item.storlek].antal;

    }
    return 0;
  };

  const addToBasket = (item) => {
    const nrOrderedOf = getNrOrderOf(item);
    handleKurv.setProducts((prevstate) => {
      return {
        ...prevstate,
        [props.type.id]: {
          ...prevstate[props.type.id],
          [props.type.name]: {
            antal: nrOrderedOf + 1,
            price: item.price,
          },
        },
      };
    });
  };

  const removeFromBasket = (item) => {
    const nrOrderedOf = getNrOrderOf(item);
    if (nrOrderedOf > 0) {
      handleKurv.setProducts((prevstate) => {
        return {
          ...prevstate,
          [props.type.id]: {
            ...prevstate[props.type.id],
            [props.type.name]: {
              antal: nrOrderedOf - 1,
              price: item.price
            },
          },
        };
      });
    }
  };

  return (
    <div className='menu-item-box-dessert'>
        <div className='menu-item-title'>{props.type.id}</div>
            {props.type.size.map((item) => {
                return (
                <div className="size-buttons-container">
                    <span 
                    onClick={() => {
                        removeFromBasket(item);
                    }}
                    className={'button minus-button'}
                    >
                    -
                    </span>
                    <span>{getNrOrderOf(item)}</span>
                    <span 
                    onClick={() => {
                        addToBasket(item);
                    }}
                    className={'button plus-button'}
                    >
                    +
                    </span>
                    <span>
                    {item.storlek}: {item.price} kr,-
                    </span>
                </div>
                );
            })}
         </div>
  );
};

/*
  return (
    <div className='menu-item-box-beverage'>
        <div className='menu-item-title'>{props.id}</div>
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
*/

export default Dessert;