function exponentiate(arr, pow) {

  var newArr = [];

  for (item of arr) {
    newArr.push(item ** pow);
  }

  return newArr;

}

var res = exponentiate([2, 4, 3, 1], 2);

console.log(res);