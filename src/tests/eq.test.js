import eq from "../eq";

describe("Testing eq", () => {
    it("Should return false (non eq)", () => {
        expect(eq(0, 1)).toBe(false);
        expect(eq([1, 1, 1], [1, 1, "1"])).toBe(false);

        expect(eq("", [""])).toBe(false);
        expect(eq("", [])).toBe(false);
        expect(eq(1, true)).toBe(false);
        expect(eq("1", 1)).toBe(false);
    });
    it("Should return true (eq values)", () => {
        expect(eq(0, 0)).toBe(true);
        expect(eq([1, 1, 1], [1, 1, 1])).toBe(true);
        expect(eq({a : "b"}, {a : "b"})).toBe(true);

        expect(eq(0, -0)).toBe(true);
        expect(eq(0, NaN)).toBe(true);
        expect(eq(-0, NaN)).toBe(true);
        expect(eq(NaN, NaN)).toBe(true);
    });
    it("Should return right value for objects", () => {
        const object = {'a' : 1};
        const other = {'a' : 1};
        expect(eq(object, object)).toBe(true);
        expect(eq(object, other)).toBe(false);
        expect(eq('a', Object('a'))).toBe(false);
    });
    it("Should return right value for other general tests", () => {
        expect(eq(NaN, NaN)).toBe(true);
    });
});