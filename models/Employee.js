// eslint-disable-next-line no-unused-vars
const Employee = (function () {
  "use strict";

  // private members
  let name;
  let age;
  let salary;

  // getter functions
  function getName() {
    return name;
  }
  function getAge() {
    return age;
  }
  function getSalary() {
    return salary;
  }

  // setter functions
  function setName(n) {
    name = n;
  }
  function setAge(a) {
    age = a;
  }
  function setSalary(s) {
    salary = s;
  }

  // other public methods
  function increaseSalary(percentage) {
    salary += salary * percentage;
  }

  function incrementAge() {
    age++;
  }

  return {
    setName,
    setAge,
    setSalary,
    getName,
    getAge,
    getSalary,
    increaseSalary,
    incrementAge,
  };
})();
