const axios = require("axios");

const fetchData = async (id) => {
	const results = await axios.get(
		`https://jsonplaceholder.typicode.com/todos/${id}`
	);
	return results;
}

const forEach = (items, callback) => {
	for (let i = 0; i < items.length; i++) {
		callback(items[i]);
	}
}

it("mock callback", () => {
	// jest.fn() creates a mock function
	const mockCallback = jest.fn(x => 42 + x);

	forEach([0, 4, 8], mockCallback);

	// calls returns an array of all the calls
	expect(mockCallback.mock.calls.length).toBe(3);
	// that's why here our array is length 2 b/c we called it twice
	// [call1 = 0, call2 = 1, call3 = 8]

	expect(mockCallback.mock.calls[2][0]).toBe(8);

	expect(mockCallback.mock.calls[1][0]).toBe(4);

	// get value function is returning
	expect(mockCallback.mock.results[2].value).toBe(50);
})

it("mock return", () => {
	const mock = jest.fn();

	// can place whatever value you want as param, this way requires no logic like on line 9
	mock.mockReturnValueOnce(true).mockReturnValueOnce(5).mockReturnValueOnce("Hello World!");

	// each call to mock returns matching call value assigned on line 30
	const results = mock();
	const results2 = mock();
	const results3 = mock();

	expect(results).toBe(true);
	expect(results2).toBe(5);
	expect(results3).toBe("Hello World!");
})

it("mock fetch", async () => {
	jest.spyOn(axios, "get").mockReturnValueOnce({
		data: {
			id: 1,
			todo: "Clean room"
		}
	});
	const results = await fetchData(1);

	expect(results.data.todo).toBe("Clean room");
})