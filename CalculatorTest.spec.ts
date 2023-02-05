import { Calculator } from "./Calculator";

describe("CalculatorTest", () => {
	it("adds 1 + 2 to equal 3", () => {
		let sut = new Calculator();
		expect(sut.Sum(1, 2)).toBe(3);
	})
});
