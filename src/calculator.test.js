const add = require("./calculator");

it("should return zero on an empty string", () => {
	expect(add("")).toBe(0);
});

it("should return number when only one number is in the string", () => {
	expect(add("5")).toBe(5);
});

it("should return the sum of two given numbers", () => {
	expect(add("1,2")).toBe(3);
});

it("should return the sum of multiple numbers", () => {
	expect(add("1,2,3")).toBe(6);
});

it("should return the sum of two given numbers", () => {
	expect(add("2\n3")).toBe(5);
});

it("should return the sum of multiple numbers", () => {
	expect(add("1\n2,3")).toBe(6);
});