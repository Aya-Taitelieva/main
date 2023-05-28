//!-------Arrow Function-------
//? разный синтаксис, сразу возвращает без return, не работает аргументс

//? func dicloration
// func("hello");
// function func(params) {
//   console.log(params);
// }

// const someFunc = (params) => console.log(params);
// someFunc("привет");

// function sum(a, b) {
//   return a + b;
// }

// let sumFunc = (x, y) => x + y;
// console.log(sumFunc(2, 2));

// let num = (param) => (typeof param === "number" ? "yes" : "no");
// console.log(num("jgf"));

//массивоподобный объект
// function func(a, b, c) {
//   console.log([...arguments]);
// }
// func(1, 2, 3);

// let func = (a, b, c) => {
//   console.log(arguments);
// };
// func(1, 2, 3);
//! arguments не работает

//! TASKS
//? task 1
// function converter(km) {
//   return km * 1000;
// }
//? or
// const converter = (km) => km * 1000;
// console.log(converter(3));

//? task 2
// const arr1 = [125, 66, 1, 55, 48, 25, 345, 755, 823, 2];
// const checkTask = (arr) => {
//   let newArr = [];
//   for (let elem of arr) {
//     if (elem >= 50) {
//       newArr.push(elem);
//     }
//   }
//   return newArr;
// };

// console.log(checkTask(arr1));

//? функция внутри объекта называется методом Объекта
// let airplane = {
//   type: "Boing",
//   isActive: true,
//   inService: 200,
//   fly(city) {
//     console.log(`Летит в ${city}`);
//     //airplane.inService++;
//     this.inService++;
//   },
//   addNew() {
//     airplane.inService++;
//   },
// };
// // fly("Bishkek");
// // console.log(airplane.isActive);

// console.log(airplane.inService);
// airplane.fly("Bishkek");
// // airplane.addNew();
// console.log(airplane.inService);

// let dog = {
//   name: "Sumkar",
//   paradise: "ovcharka",
//   sayHello: function () {
//     console.log("gav");
//     console.log(this);
//   },
// };
// dog.sayHello();

// let obj1 = {
//   hello: function () {
//     console.log("hello world");
//     return this;
//   },
//   obj2: {
//     pet: "dog",
//     name: "Barsik",
//     voice: function () {
//       console.log("gav");
//       return this;
//     },
//   },
// };
// // console.log(obj1);
// console.log(obj1.hello());
// console.log(obj1.obj2);
// console.log(obj1.obj2.voice());

// let arrowTest = {
//   hello: function () {
//     return this;
//   },
// };
// console.log(arrowTest.hello());

// let arrowTest = {
//   hello: () => this,
// };
// console.log(arrowTest.hello());
//! стрелочная функция не может ссылаться на родителя, не рабоатет THIS
//? чтобы мы могли вызвать this в стрелочной функции, нужно обернуть ее в функциюю
// let user = {
//   name: "Said",
//   sayHi() {
//     let arr = () => console.log(this.name);
//     arr();
//   },
// };
// user.sayHi();

//todo спросить почему мы вызываем фкнкцию внутри функции

//TODO 1. Дан объект passenger. Напишите метод для этого объекта,который возвращает информацию о пассажире. Также, напишите второй метод, который меняет значение свойства baggage на то значение, которое получает в качестве параметра.
// let passenger = {
//   firstName: "Sam",
//   lastName: "Winchester",
//   passportNum: "US12345678",
//   baggage: 20,
// };

// passenger.getInfo = function () {
//   return `Passenger name: ${this.firstName}. LastName ${this.lastName}. Passport number${this.passportNum}. Maximum luggage weigth ${this.baggage}kg`;
// };

// passenger.newBaggage = function (num) {
//   this.baggage = num;
//   //тоже самое
//   //passenger.baggage = num;
// };
// console.log(passenger.getInfo());
// passenger.newBaggage(500);
// console.log(passenger.getInfo());

// TODO 3. Создайте объект calculator (калькулятор) с тремя методами: read() (читать) запрашивает два значения и сохраняет их как свойства объекта. sum() (суммировать) возвращает сумму сохранённых значений. mul() (умножить) перемножает сохранённые значения и возвращает результат.

const calculator = {
  read(num, num2) {
    this.a = +prompt("enter a", 0);
    this.b = +prompt("enter b", 0);
  },
  sum(num, num2) {
    // this.a = +prompt("enter a", 0);
    // this.b = +prompt("enter b", 0);
    return this.a + this.b;
  },
  mul(num, num2) {
    // this.a = +prompt("enter a", 0);
    // this.b = +prompt("enter b", 0);
    return this.a * this.b;
  },
};
console.log(calculator.read());
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul());

// Задание №1
// Создайте стрелочную функцию, которая принимает 2 аргумента и  возвращает сумму всех аргументов.
const arr = (num, num2) => console.log(num + num2);
arr(2, 3);

// Задание №2
// Создайте объект user со свойствами name, surname и age.
let user = {
  name: "Aya",
  surname: "Tai",
  age: 24,
};
// Задание №3
// Создайте у объекта user метод SayHi, который будет выводить в консоль “Hello World”.

user.sayHi = function () {
  console.log("Hello World");
};
user.sayHi();
