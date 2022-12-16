//const { add } = require('../add.js');
import add from "../add.js";

describe("Testing add", () => {
    it("should sum two numbers properly together", () => {
        expect(add(10, 0)).toBe(10);
    });
});