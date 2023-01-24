/*returns the sum of all the numbers in an array of numbers*/
function sum(nums) {
  if (Array.isArray(nums)) return nums.reduce((a, b) => a + b);
  else {
    if (isNaN(nums)) {
      let result = [...nums];
      return result.reduce((a, b) => a + b);
    }

    return nums;
  }
}

/*returns the product of all the numbers in an array of numbers*/
function multiply(nums) {
  if (Array.isArray(nums)) return nums.reduce((a, b) => a * b);
  else {
    if (isNaN(nums)) {
      let result = [...nums];
      return result.reduce((a, b) => a * b);
    }

    return nums;
  }
}

/*returns the reversal of a string or integer*/
function reverse(word) {
  if (word === null || word === undefined) return word;

  if (isNaN(word)) return [...word].reverse().join("");

  let numResult = word.toString();
  let result = parseInt([...numResult].reverse().join(""));

  if (isNaN(result)) return word;

  return result;
}

/*returns the array of words that are longer than largest. */
function filterLongWords(largest, words) {
  if (!Array.isArray(words) || isNaN(largest)) return null;
  return words.filter((w) => w != null && w != undefined && w.length > largest);
}
