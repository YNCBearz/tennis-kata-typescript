import { Game001 } from "./Game001";

describe("Game001Test", () => {
	it("Love All", () => {
		let game = new Game001();
		expect(game.Score()).toBe('Love All');
	})
});
