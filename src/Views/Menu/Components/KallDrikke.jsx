import React from 'react';
import { coldBeverages } from '../../../Model/productLists';
import Beverage from '../../../Components/Beverage';

export const KallDrikke = () => {
  return coldBeverages.map((
    coldBeverage 
  ) => (
    <Beverage // Se Beverage.jsx for å se hvordan komponenten bygges
      type={coldBeverage}
    />
  ));
};
