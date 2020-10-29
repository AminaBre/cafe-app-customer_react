import React from 'react';
import { warmBeverages } from '../../../Model/productLists';
import Beverage from '../../../Components/Beverage';

export const VarmDrikke = () => {
  return warmBeverages.map((
    warmBeverage // "warmBeverages" er arrayet fra productLists.js-fila. Én Beverage-komponent lages per objekt i arrayet, og alle lagres i "menuItems" med setState.
  ) => (
    <Beverage // Se Beverage.jsx for å se hvordan komponenten bygges
      type={warmBeverage}
    />
  ));
};
