/* global
  sum, multiply, reverse, filterLongWords
 */
/* function sum() tests */
describe("Function sum() Test1", function () {
  it("Expected output of sum([1,2,3,4]) is 10  ", function () {
    assert.equal(sum([1, 2, 3, 4]), 10);
  });
});
describe("Function sum() Test2", function () {
  it("Expected output of sum(100) is 100", function () {
    assert.equal(sum(100), 100);
  });
});
describe("Function sum() Test3", function () {
  it("Expected output of sum([1,2,3,4,'Snake']) is 10Snake  ", function () {
    assert.equal(sum([1, 2, 3, 4, "Snake"]), "10Snake");
  });
});
describe("Function sum() Test4", function () {
  it("Expected output of sum('1234Snake') is 1234Snake ", function () {
    assert.equal(sum("1234Snake"), "1234Snake");
  });
});
describe("Function sum() Test5", function () {
  it("Expected output of sum([1,2,'Snake',3,4]) is 3Snake34 ", function () {
    assert.equal(sum([1, 2, "Snake", 3, 4]), "3Snake34");
  });
});

/* function multiply() tests */
describe("Function multiplyul() Test1", function () {
  it("Expected output of multiply([1,2,3,4]) is 24  ", function () {
    assert.equal(multiply([1, 2, 3, 4]), 24);
  });
});
describe("Function multiply() Test2", function () {
  it("Expected output of multiply(100) is 100", function () {
    assert.equal(multiply(100), 100);
  });
});
describe("Function multiply() Test3", function () {
  it("Expected output of multiply([1,2,3,4,'Snake']) is NaN and should failed for NaN !== NaN ", function () {
    assert.equal(multiply([1, 2, 3, 4, "Snake"]), NaN);
  });
});
describe("Function multiply() Test4", function () {
  it("Expected output of multiply('1234Snake') is NaN and should failed for NaN !== NaN ", function () {
    assert.equal(multiply("1234Snake"), NaN);
  });
});

/* function reverse() tests */
describe("Function reverse() Test1", function () {
  it("Expected output of reverse('jag testar') is ratset gaj ", function () {
    assert.equal(reverse("jag testar"), "ratset gaj");
  });
});
describe("Function reverse() Test2", function () {
  it("Expected output of reverse(1234) is 4321 ", function () {
    assert.equal(reverse(1234), 4321);
  });
});
describe("Function reverse() Test3", function () {
  it("Expected output of reverse(null) is null ", function () {
    assert.equal(reverse(null), null);
  });
});
describe("Function reverse() Test4", function () {
  it("Expected output of reverse(undefined) is undefined ", function () {
    assert.equal(reverse(undefined), undefined);
  });
});
describe("Function reverse() Test6", function () {
  it("Expected output of reverse('') is '' ", function () {
    assert.equal(reverse(""), "");
  });
});
describe("Function reverse() Test7", function () {
  it("Expected output of reverse(' ') is ' ' ", function () {
    assert.equal(reverse(" "), " ");
  });
});

/* function filterLongWords() tests */
describe("Function filterLongWords() Test1", function () {
  it("Expected output of filterLongWords(4, ['One', 'Two', 'Three', 'Snakey', 'Snake']) is ['Three', 'Snakey', 'Snake'] ", function () {
    assert.deepEqual(
      filterLongWords(4, ["One", "Two", "Three", "Snakey", "Snake"]),
      ["Three", "Snakey", "Snake"]
    );
  });
});
describe("Function filterLongWords() Test2", function () {
  it("Expected output of filterLongWords(2, [1, 3, 'Six']) is ['Six'] ", function () {
    assert.deepEqual(filterLongWords(2, [1, 3, "Six"]), ["Six"]);
  });
});
describe("Function filterLongWords() Test3", function () {
  it("Expected output of filterLongWords(3, ['One', undefined, null, ' ', '']) is [] ", function () {
    assert.deepEqual(filterLongWords(3, ["One", undefined, null, " ", ""]), []);
  });
});
describe("Function filterLongWords() Test4", function () {
  it("Expected output of filterLongWords(3, 'Snake') is null ", function () {
    assert.equal(filterLongWords(3, "Snake"), null);
  });
});
