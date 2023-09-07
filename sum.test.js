const sum = require("./sum");

// describe used to group common tests together
describe("example tests", () => {
	it("should add 1 + 2 to equal 3", () => {
		const result = sum(1, 2);
		expect(result).toBe(3);
	})

	it("object assignment", () => {
		const obj = {};
		// use toEqual over toBe here b/c you want to check the value. If comparing using toBe then test would be false b/c
		// objects are referenced by memory. Even if they have the same properties they're different objects.
		expect(obj).toEqual({});
	})
})

describe("truthy or falsy", () => {
	it("null should be falsy", () => {
		const n = null;
		expect(n).toBeFalsy();
		// following test does same thing except showing use of .not method chained in
		expect(n).not.toBeTruthy();
		// expect(n).toBeNull();
		// expect(n).not.toBeUndefined();
	})
})

describe("numbers", () => {
	it("two plus two", () => {
		const value = 2 + 2;
		expect(value).toBe(4);
		expect(value).toBeGreaterThan(3);
		expect(value).toBeGreaterThanOrEqual(4);
		expect(value).toBeLessThan(5);
		expect(value).toBeLessThanOrEqual(4);
	})

	it("adding floats", () => {
		const value = 0.1 + 0.2;
		expect(value).toBeCloseTo(0.3);
	})
})

describe("strings", () => {
	it("there is no I in team", () => {
		// checking to see if the string matches the regular expression given inside .toMatch
		expect("team").not.toMatch(/I/);
	})
})