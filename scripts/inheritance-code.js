// eslint-disable-next-line no-extend-native
Object.prototype.filter = function (bannedWord) {
  "use strict";

  const split = this.split(" ");
  const filtered = split.filter((s) => s !== bannedWord);

  return filtered.reduce((a, b) => a + " " + b);
};

// eslint-disable-next-line no-extend-native
Array.prototype.bubbleSort = function () {
  "use strict";
  return this.sort();
};

const Person = function () {};

Person.prototype.initialize = function (name, age) {
  "use strict";
  this.name = name;
  this.age = age;
};

Person.prototype.describe = function () {
  "use strict";
  return this.name + ", " + this.age + " years old.";
};

const Student = function () {};
Student.prototype = new Person();

Student.prototype.learn = function (subject) {
  "use strict";
  console.log(this.name + " just learned " + subject);
};

const student1 = new Student();

student1.initialize("John", 25);
student1.learn("Inheritance");

const Teacher = function () {};
Teacher.prototype = new Person();

Teacher.prototype.teach = function (subject) {
  "use strict";
  console.log(this.name + " is now teaching " + subject);
};

const teacher1 = new Teacher();

teacher1.initialize("Elmatary", 35);
teacher1.teach("Web Application Programming");
