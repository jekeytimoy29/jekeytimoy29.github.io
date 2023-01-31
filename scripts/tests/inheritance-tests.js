"use strict";

describe("Native Prototype Object.filter() tests", function () {
  it("Tests the Object.filter() which  accepts an array of strings that specifies a list of banned words. The function returns the string after removing all the banned words.", function () {
    assert.equal(
      "This house is not nice!".filter("not"),
      "This house is nice!"
    );
    assert.equal(
      "This house is not nice!".filter(""),
      "This house is not nice!"
    );
    assert.equal(
      "This house is not nice!".filter(" "),
      "This house is not nice!"
    );
  });
});

describe("Native Prototype Array.bubbleSort() tests", function () {
  it("Tests the Array.bubbleSort() which is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted.", function () {
    assert.deepEqual([6, 4, 0, 3, -2, 1].bubbleSort(), [-2, 0, 1, 3, 4, 6]);
    assert.deepEqual([].bubbleSort(), []);
    assert.deepEqual(
      ["Cammy", "Bobby", "Camila", "Amber", "Zeny"].bubbleSort(),
      ["Amber", "Bobby", "Camila", "Cammy", "Zeny"]
    );
  });
});
