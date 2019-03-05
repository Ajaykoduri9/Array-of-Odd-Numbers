var findOddNumbers = function (a, result = []) {
  if(a.length > 1) {
    if(a[0] % 2 !== 0) {
        result.push(a[0])
    }
	  a.shift();
    return findOddNumbers(a, result);
  } 
  else 
    return result;
}


//testing
var testSet = [1, 3, 4, 8, 7, 9, 10];
console.log("result: ", findOddNumbers(testSet));