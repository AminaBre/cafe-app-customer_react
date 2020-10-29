import React from 'react';
import { desserts } from '../../../Model/productLists';
import Dessert from '../../../Components/Dessert';

export const Desserts = () => {
  return desserts.map((dessert) => (
    <Dessert // Dessert.jsx er litt annerledes, fordi den ikke skal inkludere valg av størrelser
      key={dessert.id}
      name={dessert.name}
      price={dessert.price}
    />
  ));
};
