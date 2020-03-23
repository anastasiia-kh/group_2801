import {
  toString,
  mapArray,
  findMax,
  getTotalPrice,
  filterValue,

} from './functions.js';

const str = toString(['Hello', 'world']);
// console.log(str);
// const cartTotal = totalSum([10, 20, 50, 100]);
// console.log(cartTotal);
const strLength = mapArray(["Ytllo ", ' qwer']);
// console.log(strLength);
const max = findMax([10, 20, 30, 40]);


const cart = [{
    name: 'iphone',
    price: 1400,
  },
  {
    name: 'xiaomi',
    price: 1400,
  },
  {
    name: 'samsung',
    price: 1400,
  },
];
const totalPrice = getTotalPrice(cart);
const filterValue = filterMaxValues([0, 23, 4, 54, 23, 56, 77, ], 40);