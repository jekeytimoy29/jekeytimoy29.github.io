/* returns the sum of all the numbers in an array of numbers */
// eslint-disable-next-line no-unused-vars
function sum(nums) {
  "use strict";
  if (Array.isArray(nums)) return nums.reduce((a, b) => a + b);
  else {
    if (isNaN(nums)) {
      const result = [...nums];
      return result.reduce((a, b) => a + b);
    }

    return nums;
  }
}

/* returns the product of all the numbers in an array of numbers */
// eslint-disable-next-line no-unused-vars
function multiply(nums) {
  "use strict";
  if (Array.isArray(nums)) return nums.reduce((a, b) => a * b);
  else {
    if (isNaN(nums)) {
      const result = [...nums];
      return result.reduce((a, b) => a * b);
    }

    return nums;
  }
}

/* returns the reversal of a string or integer */
// eslint-disable-next-line no-unused-vars
function reverse(word) {
  "use strict";
  if (word === null || word === undefined) return word;

  if (isNaN(word)) return [...word].reverse().join("");

  const numResult = word.toString();
  const result = parseInt([...numResult].reverse().join(""));

  if (isNaN(result)) return word;

  return result;
}

/* returns the array of words that are longer than largest. */
// eslint-disable-next-line no-unused-vars
function filterLongWords(largest, words) {
  "use strict";
  if (!Array.isArray(words) || isNaN(largest)) return null;
  return words.filter(
    (w) => w != null && w !== undefined && w.length > largest
  );
}
