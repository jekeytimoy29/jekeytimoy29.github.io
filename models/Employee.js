const Employee = (function () {
  "use strict";

  // private members
  var name;
  var age;
  var salary;

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
    setName: setName,
    setAge: setAge,
    setSalary: setSalary,
    getName: getName,
    getAge: getAge,
    getSalary: getSalary,
    increaseSalary: increaseSalary,
    incrementAge: incrementAge,
  };
})();
