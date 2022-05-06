function sort(arr) {

    var newArr = [];
  
    for(var i = arr.length - 1; i >= 0; i--) {
  
      newArr.push(arr[i]);
  
    }
  
    return newArr;
  
  }
  
  var res = sort(['a', 'b', 'c']);
  console.log(res);