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