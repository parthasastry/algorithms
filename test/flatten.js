var flatten = require("../flatten");

var chai = require("chai");
var expect = chai.expect;

describe ("flatten", function(){
    
    it("case 1", function(){
      expect(flatten([[["a"]], [["b"]]])).to.eql(["a", "b"]);
    });
    
    it("case 2", function(){
      expect(flatten([1, [2], [3, [[4]]]])).to.eql([1, 2, 3, 4]);
    });
    
    it("case 3", function(){
      expect(flatten([1, [], [3, [[4]]]])).to.eql([1, 3, 4]);
    });
    
    it("case 4", function(){
      expect(flatten([1, {}, [3, [[4]]]])).to.eql([1, {}, 3, 4]);
    });
    
});