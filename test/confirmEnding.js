var confirmEnding = require("../confirmEnding");

var chai = require("chai");
var expect = chai.expect;

describe ("confirmEnding", function(){
    
    it("positive", function(){
       expect(confirmEnding("Bastian", "n")).to.equal(true);
       expect(confirmEnding("He has to give me a new name", "name")).to.equal(true);
       expect(confirmEnding("Open sesame", "same")).to.equal(true);
    });
    
    it("negative", function(){
       expect(confirmEnding("Connor", "n")).to.equal(false);
       expect(confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification")).to.equal(false);
       expect(confirmEnding("Open sesame", "pen")).to.equal(false);
       expect(confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain")).to.equal(false); 
    });
    
});