export function toString(stringArray) {
  let resultStr = '';
  for (let i = 0; i < stringArray.length; i++) {
    resultStr += '-' + stringArray[i];
  }

  return resultStr;
}

// export function totalSum(numberArray) {
//   let total = 0;
//   for (let i = 0; i < numberArray.length; i++) {
//     if (typeof numberArray[i] === 'number') {
//       total += numberArray[i];
//     }
//   }
//   return total;
// }


// export function mapArray(stringArray) {
//   const nemNumberArray = [];
//   for (let i = 0; i < stringArray.length; i++) {
//     const item = stringArray[i];
//     nemNumberArray.push(item.length);
//   }
//   return nemNumberArray;
// }


// export function findMax(numberArray) {
//   let maxValue = numberArray[0];
//   for (let i = 1; i < numberArray.length; i++) {
//     if (numberArray[i] > maxValue) {
//       maxValue = numberArray[i];
//     }
//     return maxValue;
//   }
// };

export function totalPrice(arrayProducts) {
  let totalPrice = 0;
  for (let i = 1; i < arrayProducts.length; i++) {
    totalPrice += arrayProducts[i].price;
  }

  return totalPrice;

}

export function filterMaxValues(arrayToFilter, maxValue) {
  let filterValue = [];
  for (let i = 0; i < arrayToFilter.length; i++) {
    if (arrayToFilter[i] < maxValue) {
      filterValue.push(arrayToFilter[i]);
    }
  }
  return filterValue;
}

export function filterMaxValues(arrayToFilter, maxValue) {
  let filterValue = [];
  for (let someValue of arrayToFilter) {
    console.log(someValue);
    if (arrayToFilter[i] < maxValue) {
      filterValue.push(arrayToFilter[i]);
    }
  }
  return filterValue;
}