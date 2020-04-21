import {
  toString,
  totalSum,
  mapArray,
  findMax,
  getTotalPrice,
  filterMaxValues
} from './function.js';
const str = toString(['Hello', 'world']);
console.log(str);

const cartTotal = totalSum([10, '20', 50, 100]);
console.log(cartTotal);

const strLength = mapArray(['Hello', 'world']);
console.log(strLength);

const max = findMax([10, 20, 150, 5, 26, 100]);
console.log(max);


const cart = [{
    name: 'iphone',
    price: 1400,
  },
  {
    name: 'mcBook',
    price: 3400,
  },
  {
    name: 'samsung',
    price: 2000,
  },
]
// const totalPrice = getTotalPrice(cart);
// console.log(totalPrice);

const filterValue = filterMaxValues([0, 23, 45, 15, 48, 20, 24, 55], 40);
console.log(filterValue);