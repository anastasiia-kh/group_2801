// ____________first____________________________
var multiply = function () {
  var num1 = parseFloat(36325);
  var num2 = parseFloat(9824);
  return num1 * num2;
};
var add = function () {
  var num3 = parseFloat(777);
  return num3 + multiply();
};

// ____________second___________________________
var a = [1, 2, 3];
var b = [5, 4, 6];
var c = [1, 2, 3];
var d = [1, 2, 3, 4];

var сompareAB = function () {
  for (var i = 0; i < b.length; i++) {
    for (var j = 0; j < a.length; i++) {
      if (a.length === b.length) {
        if (b[i] === a[j]) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};
var сompareAC = function () {
  for (var i = 0; i < c.length; i++) {
    for (var j = 0; j < a.length; i++) {
      if (a.length === c.length) {
        if (c[i] === a[j]) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};
var сompareAD = function () {
  for (var i = 0; i < d.length; i++) {
    for (var j = 0; j < a.length; i++) {
      if (d.length === a.length) {
        if (d[i] === a[j]) {
          return true;
        } else {
          return false;
        }
      } else {
        return false;
      }
    }
  }
};