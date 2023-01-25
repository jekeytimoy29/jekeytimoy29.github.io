var FieldEmployee = (() => {
  //private vars
  var address;

  //getter methods
  function getAddress() {
    return address;
  }

  //setter methods
  function setAddress(addr) {
    address = addr;
  }

  return {
    ...Employee,
    getAddress: getAddress,
    setAddress: setAddress,
  };
})();
