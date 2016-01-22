divCount = function(countTo, countBy) {
  if(countBy <= countTo) {
      var quotient = Math.floor(countTo / countBy);
      var result = 0;
      var countArray = [];
      for (var i = 0; i < quotient; i++) {
        var result = result + countBy;
        countArray.push(result);
      }
  }else {
    return "error";
    alert("Make sure you enter integers and your divisor is less than your dividend");
  }
}

pingPong = function(countArray) {
  var divisors = [
                  [3, "ping"],
                  [5, "pong"],
                  [15, "pingpong"]
                  ]
  divisors.forEach(function(divisor) {
