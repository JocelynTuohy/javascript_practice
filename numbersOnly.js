function numbersOnly(arr){
  var newArray = [];
  for (var i = 0; i < arr. length; ++i){
    if (typeof arr[i] === "number"){
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

function numbersOnlySameArray(arr){
  for (var i = 0; i < arr.length; ++i){
    if (typeof arr[i] !== "number"){
      for (var x = i; x < arr.length-1; ++x){
        arr[x] = arr[x + 1];
      }
      arr.pop();
      --i;
    }
  }
  return arr;
}