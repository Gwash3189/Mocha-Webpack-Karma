var localStorage = require("../localStorage.js");
var { expect } = require("chai");

describe('LocalStorage', function () {
	it('Should be a function', function () {
		expect(localStorage).to.be.a("function");
	});
	it('Should return an object add something', function () {
		expect(localStorage("key")).to.be.a("object");
	});
	describe('Add', function () {
		it('Should add something', function () {
			expect(localStorage("key").add("value")).to.be.true;
		});
	});
});