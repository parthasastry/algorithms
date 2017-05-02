var reverse = require("../reverse");

var chai = require("chai");
var expect = chai.expect;

describe ("reverse", function(){
    it("empty string", function(){
        expect(reverse("")).to.equal("Empty String");
    });
    
    it("simple string", function(){
        expect(reverse("Hello")).to.equal("olleH");
    });
    
    it("Sentence string", function(){
        expect(reverse("This is a string")).to.equal("gnirts a si sihT");
    });
    
});