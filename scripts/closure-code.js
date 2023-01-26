// eslint-disable-next-line no-unused-vars
function incrementAndResetNumber() {
  "use strict";
  let counter = 0;

  return {
    add: () => {
      return (counter += 1);
    },
    reset: () => {
      counter = 0;
      return counter;
    },
  };
}

// eslint-disable-next-line no-unused-vars
function addWithNumber(x) {
  "use strict";
  let counter = 0;

  return {
    add: () => {
      return (counter += x);
    },
    reset: () => {
      counter = 0;
      return counter;
    },
  };
}
