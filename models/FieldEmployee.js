/* global
  Employee
*/

// eslint-disable-next-line no-unused-vars
const FieldEmployee = (function () {
  "use strict";

  // private vars
  let address;

  // getter methods
  function getAddress() {
    return address;
  }

  // setter methods
  function setAddress(addr) {
    address = addr;
  }

  return {
    ...Employee,
    getAddress,
    setAddress,
  };
})();
