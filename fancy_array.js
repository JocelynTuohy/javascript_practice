function fancyArray(arr, sym, reversed){
  if (!reversed){
    for (var i = 0; i < arr.length, i++){
      console.log(i + " " + sym + " " + arr[i]);
    }
  }
  else if(reversed){
    for (var i = arr.length - 1; i >= 0; i--){
      console.log(i + " " + sym + " " + arr[i]);
    }
  }
}

fancyArray(["James", "Jill", "Jane", "Jack"], "::", false);