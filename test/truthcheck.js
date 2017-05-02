var truthcheck = require("../truthcheck");

var chai = require("chai");
var expect = chai.expect;

describe ("truthcheck", function(){
    
    it("case 1", function(){
      expect(truthcheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")).to.equal(true);
    });
    
    it("case 2", function(){
      expect(truthcheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")).to.equal(false);
    });
    
    it("case 3", function(){
      expect(truthcheck([{"user": "Tinky-Winky", "sex": "male", "age": 0}, {"user": "Dipsy", "sex": "male", "age": 3}, {"user": "Laa-Laa", "sex": "female", "age": 5}, {"user": "Po", "sex": "female", "age": 4}], "age")).to.equal(false);
    });
    
    it("case 4", function(){
      expect(truthcheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true}, {"name": "FastFoward", "onBoat": null}], "onBoat")).to.equal(false);
    });
    
    it("case 5", function(){
      expect(truthcheck([{"name": "Pete", "onBoat": true}, {"name": "Repeat", "onBoat": true, "alias": "Repete"}, {"name": "FastFoward", "onBoat": true}], "onBoat")).to.equal(true);
    });
    
    it("case 6", function(){
      expect(truthcheck([{"single": "yes"}], "single")).to.equal(true);
    });
    
    it("case 7", function(){
      expect(truthcheck([{"single": ""}, {"single": "double"}], "single")).to.equal(false);
    });
    
    it("case 8", function(){
      expect(truthcheck([{"single": "double"}, {"single": undefined}], "single")).to.equal(false);
    });
    
    it("case 9", function(){
      expect(truthcheck([{"single": "double"}, {"single": NaN}], "single")).to.equal(false);
    });
    
    
});