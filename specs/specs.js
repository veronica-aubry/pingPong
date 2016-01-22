describe('divCount', function() {

  it("returns error if countBy is larger than countTo", function() {
    expect(divCount(5, 50)).to.equal("error");
  });

  it("counts to specified number when countBy number fits exactly", function() {
    expect(divCount(10, 5)).to.eql([ 10, 5]);
  });

  it("counts closest to (but does not exceed) specified number when countBy number does not fit exactly", function() {
    expect(divCount(11, 5)).to.eql([ 10, 5]);
  });
});

describe('pingPong', function() {

  it("replaces numbers divisible by 3 with ping", function() {
    expect(pingPong([3, 6, 9])).to.eql([ "ping", "ping", "ping"]);
  });

  it("does not replace numbers not divisible by 3 with ping",     function() {
    expect(pingPong([3, 6, 11])).to.eql([ "ping", "ping", 11]);
  });

  it("replaces numbers divisible by 3, 5, and 15 with ping, pong, and pingpong", function() {
    expect(pingPong([3, 5, 15])).to.eql([ "ping", "pong", "pingpong"]);
  });
});
