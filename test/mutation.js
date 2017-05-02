var mutation = require("../mutation");

var chai = require("chai");
var expect = chai.expect;

describe ("mutation", function(){
    
    it("positive", function(){
       expect(mutation(["hello", "Hello"])).to.equal(true);
       expect(mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"])).to.equal(true);
       expect(mutation(["Mary", "Army"])).to.equal(true);
       expect(mutation(["Mary", "Aarmy"])).to.equal(true);
       expect(mutation(["Alien", "line"])).to.equal(true);
       expect(mutation(["floor", "for"])).to.equal(true);
    });
    
    it("negative", function(){
       expect(mutation(["hello", "hey"])).to.equal(false);
       expect(mutation(["hello", "neo"])).to.equal(false);
       expect(mutation(["voodoo", "no"])).to.equal(false);
    });
     
});