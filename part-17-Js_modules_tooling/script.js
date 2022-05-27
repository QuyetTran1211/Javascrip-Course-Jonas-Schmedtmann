'use strict';
/*
// Importing modules
import {
  addToCart,
  totalPrice as price,
  totalQuantity,
} from './shoppingCart.js';

console.log('Importing modules');
*/
// addToCart('bread', 5);
// console.log(totalPrice, totalQuantity);

/*
const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push({ product, quantity });
    console.log(`${quantity} ${product} added to cart`);
  };

  const oderBook = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    cart,
    shippingCost,
    addToCart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
*/

import { cloneDeep } from 'lodash-es';
