divCount = function(countTo, countBy) {
  if(countBy <= countTo) {
      var quotient = Math.floor(countTo / countBy);
      var result = 0;
      var countArray = [];
      for (var i = 0; i < quotient; i++) {
        var result = result + countBy;
        countArray.push(result);
      }
        return countArray;
  }else {
    return "error";
    alert("Make sure you enter integers and your divisor is less than your dividend");
  }
}

pingPong = function(countArray) {
  var divisors = [3,5,15];
  countArray.forEach(function(count) {
    var arrayIndex = countArray.indexOf(count)
    if (count % 3 === 0) {
      countArray[arrayIndex] = "ping";
    }
  });
  return countArray;
}
