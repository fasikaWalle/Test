const { checkEquality } = require("./server");

test("check if two nums are equal", () => {
  expect(checkEquality(11, 11)).toBe(true);
  
});
