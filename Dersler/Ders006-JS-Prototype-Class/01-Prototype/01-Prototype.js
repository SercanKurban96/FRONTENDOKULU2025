// ********** Onject Literal **********
// const person1 = {
//   name: "Sercan",
//   age: 29,
//   langs: ["C++", "Java", "Python", "JS"],
//   showInfos: function () {
//     console.log("Hello");
//   },
// };

// const person2 = {
//   name: "Ahmet",
//   age: 30,
//   langs: ["HTML", "CSS", "JS"],
//   showInfos: function () {
//     console.log("Hello");
//   },
// };

// console.log(person1);
// console.log(person2);

// ********** Yapıcı Fonksiyon (Constructor Function) **********
function Person(name, age, langs) {
  this.name = name;
  this.age = age;
  this.langs = langs;
  //   this.showInfos = function () {
  //     console.log(this.name, this.age, this.langs);
  //   };
}
// const person3 = new Person("Ayşe", 22, ["C#", "Java"]);
// const person4 = new Person("Fatma", 28, ["Go", "Rust"]);
// console.log(person3);
// console.log(person4);

// ********** Prototype **********
Person.prototype.showInfos = function () {
  console.log(this.name, this.age, this.langs);
};
// person3.showInfos();
// person4.showInfos();

// ********** Kalıtım (Inheritance) **********
function Employee(name, age, langs, maas) {
  Person.call(this, name, age, langs);
  this.maas = maas;
}

// ********** Prototype Tabanlı Kalıtım **********
Employee.prototype = Object.create(Person.prototype);

// Employee.prototype.showInfos = function(){
//     console.log(this.name, this.age, this.langs, this.maas)
// }

const emp1 = new Employee("Veli", 35, ["Python", "JS"], 15000);
console.log(emp1);
emp1.showInfos();

