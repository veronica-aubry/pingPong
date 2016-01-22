describe('divCount', function() {

  it("returns error if countBy is larger than countTo", function() {
    expect(divCount(5, 50)).to.equal("error");
});

  it("counts to specified number when countBy number fits exactly", function() {
    expect(divCount(10, 5)).to.eql([ 5, 10]);
  });

  it("counts closest to (but does not exceed) specified number when countBy number does not fit exactly", function() {
    expect(divCount(11, 5)).to.eql([ 5, 10]);
  });

  it("replaces numbers divisible by 3 with ping", function() {
    expect(divCount(9, 3)).to.eql([ "ping", "ping", "ping"]);
  });
});
