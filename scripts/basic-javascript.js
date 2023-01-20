/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
  // additional assertion for our tests
  console.assert(expected === found);

  if (expected === found) {
    return "TEST SUCCEEDED";
  } else {
    return "TEST FAILED.  Expected " + expected + " found " + found;
  }
}

/* max returns the maximum of 2 arguments */
function max(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}

console.log(
  "Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10))
);
console.log(
  "Expected output of max('B','A') is 'B'  " +
    myFunctionTest("B", max("B", "A"))
);
console.log(
  "Expected output of max('A',-1) is -1  " + myFunctionTest(-1, max("A", -1))
);
console.log(
  "Expected output of max('A',0) is 0  " + myFunctionTest(0, max("A", 0))
);
console.log(
  "Expected output of max(100, 'A') is 'A'  " +
    myFunctionTest("A", max(100, "A"))
);

/* max3 takes 3 numbers as arguments and returns the largest */
function maxOfThree(a, b, c) {
  return max(max(a, b), c);
}

console.log(
  "Expected output of maxOfThree(5,4,44) is 44  " +
    myFunctionTest(44, maxOfThree(5, 4, 44))
);
console.log(
  "Expected output of maxOfThree(55,4,44) is 55  " +
    myFunctionTest(55, maxOfThree(55, 4, 44))
);
console.log(
  "Expected output of maxOfThree('B','A', 'c') is 'c'  " +
    myFunctionTest("c", maxOfThree("B", "A", "c"))
);
console.log(
  "Expected output of maxOfThree('A',-1, 0) is 0  " +
    myFunctionTest(0, maxOfThree("A", -1, 0))
);
console.log(
  "Expected output of maxOfThree(1,'A',0) is 0  " +
    myFunctionTest(0, maxOfThree(1, "A", 0))
);

/*returns true if it is a vowel, false otherwise*/
function isVowel(c) {
  const vowels = ["a", "e", "i", "o", "u"];
  return vowels.includes(c);
}

console.log(
  "Expected output of isVowel(c) is false  " +
    myFunctionTest(false, isVowel("c"))
);
console.log(
  "Expected output of isVowel(A) is true  " +
    myFunctionTest(false, isVowel("A"))
);
console.log(
  "Expected output of isVowel(i) is true  " + myFunctionTest(true, isVowel("i"))
);
console.log(
  "Expected output of isVowel(1) is false  " + myFunctionTest(false, isVowel(1))
);
console.log(
  "Expected output of isVowel(null) is false  " +
    myFunctionTest(false, isVowel(null))
);
console.log(
  "Expected output of isVowel(undefined) is false  " +
    myFunctionTest(false, isVowel(undefined))
);
console.log(
  "Expected output of isVowel('') is false  " +
    myFunctionTest(false, isVowel(""))
);
console.log(
  "Expected output of isVowel(' ') is false  " +
    myFunctionTest(false, isVowel(" "))
);

/*returns the sum of all the numbers in an array of numbers*/
function sum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
  }
  return sum;
}

console.log(
  "Expected output of sum([1,2,3,4]) is 10  " +
    myFunctionTest(10, sum([1, 2, 3, 4]))
);
console.log("Expected output of sum(100) is 0  " + myFunctionTest(0, sum(100)));
console.log(
  "Expected output of sum([1,2,3,4,'Snake']) is 10Snake  " +
    myFunctionTest("10Snake", sum([1, 2, 3, 4, "Snake"]))
);
console.log(
  "Expected output of sum('1234Snake') is 01234Snake  " +
    myFunctionTest("01234Snake", sum("1234Snake"))
);
console.log(
  "Expected output of sum([1,2,'Snake',3,4]) is 3Snake34  " +
    myFunctionTest("3Snake34", sum([1, 2, "Snake", 3, 4]))
);

/*returns the product of all the numbers in an array of numbers*/
function multiply(nums) {
  let prod = 1;
  for (let i = 0; i < nums.length; i++) {
    prod *= nums[i];
  }
  return prod;
}

console.log(
  "Expected output of multiply([1,2,3,4]) is 24  " +
    myFunctionTest(24, multiply([1, 2, 3, 4]))
);
console.log(
  "Expected output of multiply(100) is 1  " + myFunctionTest(1, multiply(100))
);
console.log(
  "Expected output of multiply([1,2,3,4,'Snake']) is NaN and should failed for NaN !== NaN " +
    myFunctionTest(NaN, multiply([1, 2, 3, 4, "Snake"]))
);
console.log(
  "Expected output of multiply('1234Snake') is is NaN and should failed for NaN !== NaN " +
    myFunctionTest(NaN, multiply("1234Snake"))
);

/*returns the reversal of a string*/
function reverse(word) {
  if (word == null || word == undefined || word == NaN) return word;

  let w = word.toString();
  let lastIndex = w.length - 1;
  let result = "";

  while (lastIndex >= 0) {
    result += w[lastIndex];
    lastIndex--;
  }

  return result;
}

console.log(
  "Expected output of reverse('jag testar') is ratset gaj " +
    myFunctionTest("ratset gaj", reverse("jag testar"))
);
console.log(
  "Expected output of reverse(1234) is 4321 " +
    myFunctionTest("4321", reverse(1234))
);
console.log(
  "Expected output of reverse(null) is null " +
    myFunctionTest(null, reverse(null))
);
console.log(
  "Expected output of reverse(undefined) is undefined " +
    myFunctionTest(undefined, reverse(undefined))
);
console.log(
  "Expected output of reverse(NaN) is is NaN and should failed for NaN !== NaN " +
    myFunctionTest(NaN, reverse(NaN))
);
console.log(
  "Expected output of reverse('') is '' " + myFunctionTest("", reverse(""))
);
console.log(
  "Expected output of reverse(' ') is ' ' " + myFunctionTest(" ", reverse(" "))
);

/*returns the length of the longest one in an array of words */
function findLongestWord(words) {
  if (!Array.isArray(words)) return null;

  let wordsFiltered = words.filter((w) => w != null && w != undefined);

  if (wordsFiltered.length == 0) return null;

  let wordsSorted = wordsFiltered.sort((a, b) => a.length - b.length);
  return wordsSorted[wordsSorted.length - 1].toString();
}

console.log(
  "Expected output of findLongestWord(['One', 'Three', 'Six']) is 'Three' " +
    myFunctionTest("Three", findLongestWord(["One", "Three", "Six"]))
);
console.log(
  "Expected output of findLongestWord([1, 3, 'Six']) is 'Six' " +
    myFunctionTest("Six", findLongestWord([1, 3, "Six"]))
);
console.log(
  "Expected output of findLongestWord(['One', undefined, null, ' ', '']) is 'One' " +
    myFunctionTest("One", findLongestWord(["One", undefined, null, " ", ""]))
);
console.log(
  "Expected output of findLongestWord([undefined, null]) is null " +
    myFunctionTest(null, findLongestWord([undefined, null]))
);
console.log(
  "Expected output of findLongestWord(1234) is null " +
    myFunctionTest(null, findLongestWord(1234))
);
console.log(
  "Expected output of findLongestWord('Snake') is null " +
    myFunctionTest(null, findLongestWord("Snake"))
);
console.log(
  "Expected output of findLongestWord(['']) is '' " +
    myFunctionTest("", findLongestWord([""]))
);
console.log(
  "Expected output of findLongestWord([1,2,3,4,'Snakey', 'Snake']) is 'Snakey' " +
    myFunctionTest("Snakey", findLongestWord([1, 2, 3, 4, , "Snakey", "Snake"]))
);

/*returns the array of words that are longer than largest. */
function filterLongWords(largest, words) {
  if (!Array.isArray(words) || isNaN(largest)) return null;
  return words.filter((w) => w != null && w != undefined && w.length > largest);
}

/*returns if Array values are equal or not */
function areArrayValuesEqual(arr1, arr2) {
  if (arr1.length != arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }

  return true;
}

console.log(
  "Expected output of filterLongWords(4, ['One', 'Two', 'Three', 'Snakey', 'Snake']) is ['Three', 'Snakey', 'Snake'] " +
    myFunctionTest(
      true,
      areArrayValuesEqual(
        ["Three", "Snakey", "Snake"],
        filterLongWords(4, ["One", "Two", "Three", "Snakey", "Snake"])
      )
    )
);
console.log(
  "Expected output of filterLongWords(2, [1, 3, 'Six']) is ['Six'] " +
    myFunctionTest(
      true,
      areArrayValuesEqual(["Six"], filterLongWords(2, [1, 3, "Six"]))
    )
);
console.log(
  "Expected output of filterLongWords(3, ['One', undefined, null, ' ', '']) is [] " +
    myFunctionTest(
      true,
      areArrayValuesEqual(
        [],
        filterLongWords(3, ["One", undefined, null, " ", ""])
      )
    )
);
console.log(
  "Expected output of filterLongWords(3, 'Snake') is null " +
    myFunctionTest(null, filterLongWords(3, "Snake"))
);

const a = [1, 3, 5, 3, 3];
const b = a.map((e) => e * 10);
document.writeln(b.toString() + "<br/>");

const c = a.filter((e) => e === 3);
document.writeln(c.toString() + "<br/>");

const d = a.reduce((a, b) => a * b);
document.writeln(d + "<br/>");

const d2 = a.find((e) => e > 1); //3

const d3 = a.findIndex((e) => e > 1); //1
document.writeln(d2 + "<br/>");
document.writeln(d3);
