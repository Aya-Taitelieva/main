//!--------------операторы сравнения----------------
//? Всегда возвращают boolean
let num1 = 10;
let num2 = 20;

// console.log(num1 > num2);
// console.log(10 < 20);
// console.log(num1 >= num2); //больше или равно
// console.log(num1 <= num2); //меньше или равно
// console.log(num1 == num2); //равно
// console.log(num1 != num2); //не равно

// console.log("10" == 10); //сравнивает по значению, переводя в один тип данных
// console.log("10" === 10); //проверяет тип данных, строгое и быстрое равенство

// console.log("10" != 10); //false не учитывает тип данных
// console.log("10" !== 10); //true  учитывает тип данных

//!-------------логические операторы-------------
//? применяются для условий

//?------------------ && , || , ! --------------------

// let age = 40;
// console.log(age > 18 && age < 30);

// console.log(true && false); //false
// console.log(false && false); //false
// console.log(true && true); //true

//?    || оператор ИЛИ. если что то одно подойдет то true
// console.log(age >= 18 || age < 30);

// console.log(true || true); //true
// console.log(true || false); //true
// console.log(false || true); //true
// console.log(false || false); //false

//?   возвращает обратное булевое значение

// console.log(!true);
// console.log(!false);
// console.log(!1); //false
// console.log(!0); //true

// console.log(!0); //true

// console.log(!!0); //false
// console.log(Boolean); //одно и то же

// console.log(true || (false && true));
// console.log(true || false);
// console.log(true);

// console.log(true || false || (false && true) || (!false && !true));
// console.log(true || false || (false && true) || (true && false));
// console.log(true || false || false || false);
// console.log(true || false);
// console.log(true);

//!-----------------условные операторы---------
//? смотрят на булевые значения

//todo--------------IF ELSE----------------

// let age = 50;
// if (age >= 18) {
//   console.log("Доступ разрешен");
// } else {
//   console.log("Доступ запрещен");
// }

// let user = {
//   isAdmin: true,
// };
// if (user.isAdmin === true) {
//   console.log("Welcome");
// } else {
//   console.log("Bye");
// }
// //два варианта написания
// if (user.isAdmin) {
//     console.log("Welcome");
//   } else {
//     console.log("Bye");
//   }

//!-------------Тернарный оператор------------
//if-else в одну строчку, не может быть else if, только одно условие либо да либо нет

// let a = 5;
// let b = 4;

// if (a > b) {
//   console.log("a is greater");
// } else {
//   console.log("b is greater");
// }

//? условие ? код если Тру  : код если Фалс

// a > b ? console.log("a is greater") : console.log("b is greater");

// let sale = 20;
// let buyMac = sale > 50 ? true : false;

// console.log(buyMac);

// let marks = +prompt("Enter your marks : ");
// let result = marks > 60 ? "pass" : "fall";
// console.log(`You ${result} the exam.`);

// //? вложенный терновник, не читабельный, плюс терновника то что можно его записать в переменную(умеет возвращать)
// let marks = +prompt("Enter your marks : ");
// let result = marks > 80 ? "excelent" : marks >= 60 ? "pass" : "fail";
// console.log(`You ${result} the exam.`);

//!------------------SWITCH-----------------
//? спращивается только строгое равенство
// const theme = "dark";
// switch (theme) {
//   case "dark":
//     console.log("black");
//     break;
//   case "light":
//     console.log("white");
//     break;
//   default:
//     console.log("Not real theme");
// }

let dayOfWeek = 3;

// if (dayOfWeek === 1) {
//   console.log("monday");
// } else if (dayOfWeek === 2) {
//   console.log("thuesday");
// }

//? более читабельный в отличии от if-else
//? нельзя использовать логические операторы, только для сравнения
// switch (dayOfWeek) {
//   case 1:
//     console.log("monday");
//     break;
//   case 2:
//     console.log("thuesday");
//     break;
//   case 3:
//     console.log("wednesday");
//     break;
//   case 4:
//     console.log("thursday");
//     break;
//   case 5:
//     console.log("friday");
//     break;
//   case 6:
//     console.log("saturday");
//     break;
//   case 7:
//     console.log("sunday");
//     break;
//   default:
//     console.log("No such day of week");
//     break;
// }

//todo 1. Используя условынй оператор switch определите тип данных переменной x. Результат выведите в консоли.

// let z = "typ";
// let type = typeof z;
// console.log(`type of ${z} is ${typeof z}`);

// let x = {};
// switch (typeof x) {
//   case "string":
//     console.log(`тип переменной x string`);

//     break;
//   case "number":
//     console.log(`тип переменной x number`);

//     break;

//   case "boolean":
//     console.log(`тип переменной x boolean`);

//     break;

//   case "null":
//     console.log(`тип переменной x null`);

//     break;

//   case "undefined":
//     console.log(`тип переменной x undefined`);

//     break;

//   case "object":
//     console.log(`тип переменной x object`);

//     break;

//   default:
//     "not result";
//     break;
// }

// let a = 5;
// let b = 5;
// console.log(a === b);

// let a = Symbol("id");
// let b = Symbol("slug");
// console.log(a === b);

//todo 2. Используя тернарный оператор выведите в консоли прогноз погоды. К примеру, если переменная temperature < 0, вывести "Температура воздуха опустится до ${temperature} градусов", в остальных случая вывести  "Температура воздуха поднимется до ${temperature} градусов"

// let temperature = -2;

// temperature < 0
//   ? console.log(`Температура воздуха опустится до ${temperature} градусов`)
//   : console.log(`Температура воздуха поднимется до ${temperature} градусов`);

// TODO 1. Напишите программу, которая проверяет, является ли введенное число четным или нечетным, используя оператор «%». Выведите «Число ${число} четное», если число делится на 2. Иначе выведите «Число ${число} нечетное», если число возвращает остаток при делении на 2

// let num = +prompt("enter num");
// if (num % 2 === 0) {
//   console.log(`Число ${num} четное`);
// } else {
//   console.log(`Число ${num} нечетное`);
// }

//TODO 11. Напишите программу, которая запрашивает количество баллов за экзамен, и в зависимости от полученного числа выводит оценку в виде alert на экран:

// от 0 до 61 баллов - экзамен не сдан
// от 61 до 74 - удовлетворительно
// от 74 до 87 - хорошо
// от 87 до 100 отлично

// в остальных случаях попросить пользователя ввести корректные данные

let marks = +prompt("Введите ваши баллы:");

if (marks >= 0 && marks < 61) {
  console.log("экзамен не сдан");
} else if (marks >= 61 && marks < 74) {
  console.log("удовлетворительно");
} else if (marks < 87) {
  console.log("хорошо");
} else if (marks <= 100) {
  console.log("отлично");
} else {
  console.log("Введите корректные данные");
}
