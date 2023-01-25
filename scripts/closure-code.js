function incrementAndResetNumber() {
  "use strict";
  var counter = 0;

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

function addWithNumber(x) {
  "use strict";
  var counter = 0;

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
