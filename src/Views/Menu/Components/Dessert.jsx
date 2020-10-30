import React from 'react';
import { desserts } from '../../../Model/productLists';
import Dessert from '../../../Components/Dessert';

export const Desserts = () => {
  return desserts.map((
    dessert
  ) => (
    <Dessert
      type={dessert}
      />
  ));
}

