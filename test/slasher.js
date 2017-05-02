var slasher = require("../slasher");

var chai = require("chai");
var expect = chai.expect;

describe ("slasher", function(){
    
    it("positive", function(){
       expect(slasher([1, 2, 3], 2)).to.eql([3]);
       expect(slasher([1, 2, 3], 0)).to.eql([1, 2, 3]);
       expect(slasher(["burgers", "fries", "shake"], 1)).to.eql(["fries", "shake"]);
       expect(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4], 5)).to.eql(["cheese", 4]);
    });
    
    it("negative", function(){
       expect(slasher([1, 2, 3], 9)).to.eql([]);
       expect(slasher([1, 2, 3], 4)).to.eql([]);
    });
     
});