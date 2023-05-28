//! function declaration, fuction expressio, arrow fuction
//именованный блок кода

//! function declaration,
// function name (params){
//     блок кода
// }

// function sayHello() {
//   console.log("hello");
// }

// function sayHelloTo(name = "Sergey", age = 20) {
//= это значение по умолчанию
//   console.log(`Hello, ${name}!  Age: ${age}`);
// }
// sayHelloTo("Aya", 24);
// sayHelloTo("Dana");
// sayHelloTo();

// function countUntil(num) {
//   for (let i = 1; i <= num; i++) {
//     console.log(i);
//   }
// }
// countUntil(10);
// countUntil(20);

// создайте функцию поздравление
// имя фамилия и вывод поздравляю имя фамилия
// function congratulate(name = "John", surname = "Snow") {
//   console.log(`Congratulated ${name} ${surname}!`);
// }

// congratulate();

//!-------------------return----------- нужен чтобы получить результат из функции
//? локальная область видимости. переменные не видны нам за пределами функции
//? глобальная область видимости.
// let num = 2;
// function calcTriangleArea(base, height) {
//   const area = (base * height) / num;
//   console.log(area);
// }
// calcTriangleArea(4, 3);
// console.log(area);
// var area = 50;
// console.log(area);

// let num = 2;
// function calcTriangleArea(base, height) {
//   const area = (base * height) / num;
//   return area; //?
// }
// const res = calcTriangleArea(4, 3);
//  console.log(res);

// const person = {
//   name: "Alex",
//   salary: 40000,
// };
// function calcPremium(salary, percent) {
//   return (salary * percent) / 100; // return возвращает результат для дальнейшего использования
// }
// person.premium = calcPremium(person.salary, 10);

// console.log(person);

// function getCube(num) {
//   return num ** 3;
// }

// let res = getCube(2); //сосхранили результат функции в переменной
// console.log(res);

// function getSquare(num) {
//   return num ** 2;
// }
// const res = getSquare(4);
// console.log(res);

//todo Дан массив [8, -7, -21, 44, 3]. Вывести в консоль наиболшее число из массива.
//todo Подсказка: нужно использовать метод sort().

// function findTheBiggest(arr) {
//     const sorted = arr.sort((a, b) => b - a);

//     return sorted[0];
//   }

//   const arr1 = [1, 2, 3, 4, 5];
//   const arr2 = [1, 2, 333, 45, 5, 134, 123];

//   const big1 = findTheBiggest(arr2);

//   console.log(big1 * 10);
//   findTheBiggest(arr2);
//!--------- function expression---------
//? анонимная функция без имени, сщхраняем в переменной, для переиспользования. ХОСТИНГ НЕ РАБОТАЕТ
// const sayHelloTo = function (name) {
//   console.log(`Hello, ${name}`);
// };
// sayHelloTo("Polina");

// //? Hoisting
// declareFunc();
// function declareFunc() {
//   console.log("Hoisting works");
// }
// //
// expressionFunc();
// const expressionFunc = function () {
//   console.log("Hoisting not works");
// };

//? arguments - ключевое слово, нужен для получения массива. когда мы не знаем количество элементов
// function calcSum() {
//   console.log(arguments);
//   let sum = 0;
//   for (let i of arguments) {
//     sum += i;
//   }
//   console.log(sum);
// }
// calcSum(2, 5, 4, 3, 6);

// Import stylesheets
// import "./style.css";

// Функции и области видимости. Классная работа.

// ? Задание №1
// Напишите функцию hello(), которая при
// вызове будет принимать переменную name
// (например, «Василий») и выводить строку
// (в нашем случае «Привет, Василий»).
//  При отсутствии аргумента выводить:
// "Привет, гость"
//?
// function sayHelloTo(name = "гость") {
//   console.log(`Привет, ${name}`);
// }
// sayHelloTo("Василий");
// sayHelloTo();

// ? Задание №2
// Создайте функцию rgb(), которая будет
// принимать три числовых аргумента и возвращать
// строку вида «rgb(23,100,134)»(подставить
// аргументы под числовые значения rgb).
// Если аргументы не заданы, считать их
// равными нулю, т.е возвращать «rgb(0,0,0)»
//?
// function rbg(num = 0, num2 = 0, num3 = 0) {
//   console.log(`rgb(${num}, ${num2}, ${num3})`);
// }
// rbg(23, 100, 14);
// rbg();

// ? Задание №3
// Создайте функцию которая принимает в
// аргументы 3 числовых параметра. Функция должна умножать
// первый аргумент на второй, затем отнимать третий аргумент
// и возвращать результат.
//?
// function result(number = 0, number2 = 0, number3 = 0) {
//   console.log(number * number2 - number3);
//   return result;
// }
// result(10, 2, 3);

//! Makers TASKS
//? task 1
// function checkTask() {
//   console.log("Hello World!");
// }
// checkTask();

//? task 2
// function checkTask() {
//   let str = "Привет, JavaScript!";
//   return str;
// }
// console.log(checkTask());

//?task 3
// function checkTask(num, num2) {
//   let num3 = num + num2;
//   return num3;
// }
// checkTask(2, 22);

//? task 4
// function checkTask(age) {
//   if (age >= 18) {
//     return "Добро пожаловать";
//   } else {
//     return "Вход запрещен";
//   }
// }
// checkTask(19);

//? task 5  check!
// function checkTask(num){
//     let res = String(num);
//         let sum = 0;
//         for (let i = 0; i < res.length; i++) {
//           sum += Number(res[i]);
//         }
//         return sum;
//       }

//       console.log(checkTask(456));

//todo task 6

//? task 7

// function checkTask(str, letter) {
//   let letterCount = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] === letter) {
//       letterCount += 1;
//     }
//   }
//   return letterCount;
// }
// console.log(checkTask("Hello"));

//? task 8
// function checkTask(n) {
//   let res = 1;

//   while (n) {
//     res *= n--;
//   }
//   return res;
// }
// console.log(checkTask(5));

//? task 9
// function checkTask(x,y){
//     let arr = [];
//     for(let i = x; i<=y; i++){
//         arr.push(i)
//     }
//     return arr
// }

//? task 10
// function checkTask(str){
//     return str.split('').reverse().join('') == str;}
//     console.log(checkTask("level"))

//?task 11
// function checkTask(str) {
//   let vowel = str.replace(/[aeiou]/gi, "");
//   let newStr = vowel.toUpperCase();
//   console.log(newStr);
//   return newStr;
// }
// console.log(checkTask("hello"));

//? task 12
function checkTask(x, y) {
  let x = 2000;
  let y = 3001;
  for (let x = 0; x <= y.lenght; x += 2) {
    return x, y;
  }
}
console.log(checkTask(2000, 3001));

function checkTask(x, y) {
  for (let x = 0; x <= y.lenght; x++) {
    if (x % 2 === 0) {
      console.log(x);
    }
  }
}
console.log(checkTask(2000, 3001));
