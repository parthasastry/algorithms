var falsyBouncer = require("../falsyBouncer");

var chai = require("chai");
var expect = chai.expect;

describe ("falsyBouncer", function(){
    
    it("case 1", function(){
      expect(falsyBouncer([7, "ate", "", false, 9])).to.eql([7, "ate", 9]);
      expect(falsyBouncer(["a", "b", "c"])).to.eql(["a", "b", "c"])
    });
    
     it("case 2", function(){
      ;
      expect(falsyBouncer([false, null, 0, NaN, undefined, ""])).to.eql([]);
      expect(falsyBouncer([1, null, NaN, 2, undefined])).to.eql([1, 2]);
    });
    
     
});