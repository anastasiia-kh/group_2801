export function toString(stringArray) {
  let resultString = '';
  for (let i = 0; i < stringArray.length; i++) {
    resultString += '-' + stringArray[i];
  }
  return resultString;

}

export function totalSum(numberArray) {
  let resultTotal = 0;
  for (let i = 0; i < numberArray.length; i++) {
    if (typeof numberArray[i] === 'number') {
      resultTotal += numberArray[i];

    } else {}
  }
  return resultTotal;
}


export function mapArray(stringArray) {
  const numberArray = [];
  for (let i = 0; i < stringArray.length; i++) {
    const item = stringArray[i];
    numberArray.push(item.length);
  }
  return numberArray;
}

export function findMax(numberArray) {
  let maxValue = numberArray[0];
  for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > maxValue) {
      maxValue = numberArray[i];
    }
  }
  return maxValue;
}

export function getTotalPrice(arrayProducts) {
  let total = 0;
  for (let i = 0; i < arrayProducts.length; i++) {
    totalPrice += arrayProducts[i].price;
  }

  return total;
}

export function filterMaxValues(arratToFilter, maxValue) {
  let filtered = [];
  for (let i = 0; i < arratToFilter.length; i++) {
    if (arratToFilter[i] < maxValue) {
      filtered.push(arratToFilter[i])
    }
  }
  return filtered;
}




// const mapArray = mapArray(['hello', 'world']);
// newArray = [5, 5]