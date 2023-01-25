describe("Function closure incrementAndResetNumber() tests", function () {
  it("Tests the incrementAndResetNumber which returns an object that it can increment and reset a number.", function () {
    let count = incrementAndResetNumber();
    assert.equal(count.add(), 1);
    assert.equal(count.add(), 2);
    assert.equal(count.add(), 3);
    assert.equal(count.reset(), 0);
    assert.equal(count.add(), 1);
    assert.equal(count.add(), 2);
  });
});

describe("Function closure addWithNumber() tests", function () {
  it("Tests the addWithNumber() that accepts a number and then add it inot the counter.", function () {
    let adder = addWithNumber(5);
    assert.equal(adder.add(), 5);
    assert.equal(adder.add(), 10);
    assert.equal(adder.add(), 15);
    assert.equal(adder.reset(), 0);
    assert.equal(adder.add(), 5);
    assert.equal(adder.add(), 10);

    adder = addWithNumber(7);
    assert.equal(adder.add(), 7);
    assert.equal(adder.add(), 14);
    assert.equal(adder.add(), 21);
    assert.equal(adder.reset(), 0);
    assert.equal(adder.add(), 7);
    assert.equal(adder.add(), 14);
  });
});

describe("Module Employee Unit Tests", function () {
  it("Tests all the functionalities of the module Employee", function () {
    let employee = Employee;
    employee.setAge(39);
    employee.setName("Jake");
    employee.setSalary(3000.0);

    assert.equal(employee.getAge(), 39);
    assert.equal(employee.getName(), "Jake");
    assert.equal(employee.getSalary(), 3000.0);

    employee.increaseSalary(0.6);
    employee.incrementAge();

    assert.equal(employee.getAge(), 40);
    assert.equal(employee.getSalary(), 4800.0);
  });
});

describe("Module FieldEmployee Unit Tests", function () {
  it("Tests all the functionalities of the module FieldEmployee", function () {
    let fieldEmployee = FieldEmployee;
    fieldEmployee.setAge(39);
    fieldEmployee.setName("Jake");
    fieldEmployee.setSalary(3000.0);
    fieldEmployee.setAddress("Fairfield, IA");

    assert.equal(fieldEmployee.getAge(), 39);
    assert.equal(fieldEmployee.getName(), "Jake");
    assert.equal(fieldEmployee.getSalary(), 3000.0);
    assert.equal(fieldEmployee.getAddress(), "Fairfield, IA");

    fieldEmployee.increaseSalary(0.6);
    fieldEmployee.incrementAge();

    assert.equal(fieldEmployee.getAge(), 40);
    assert.equal(fieldEmployee.getSalary(), 4800.0);
  });
});
