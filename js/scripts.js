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
    if ((count % 3 === 0) && (count % 5 != 0)) {
      countArray[arrayIndex] = "ping";
    }
  });

  countArray.forEach(function(count) {
    var arrayIndex = countArray.indexOf(count)
    if ((count % 5 === 0) && (count % 3 != 0)) {
      countArray[arrayIndex] = "pong";
    }
  });

  countArray.forEach(function(count) {
    var arrayIndex = countArray.indexOf(count)
    if ((count % 5 === 0) && (count % 3 === 0)) {
      countArray[arrayIndex] = "pingpong";
    }
  });
  return countArray;
}


$(document).ready(function(){
  $("form#numberEnter").submit(function(event) {
  var countTo = parseInt($("input#countTo").val());
  var countBy = parseInt($("input#countBy").val());

  var ppResult = pingPong(divCount(countTo, countBy));

  // ppResult.forEach(function(result) {
  //   $("ul#results").prepend("<li>Goodbye, dear user!</li>");
  // });

var list = $("#results");

list.each(function(i){
    for (var x = 0; x < ppResult.length; x++){
      $(this).prepend('<li>' + ppResult[x] + '</li>');
  }
});

  event.preventDefault();

  });
});
