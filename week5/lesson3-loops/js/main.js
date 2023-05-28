//!--------------incriment | decrement------------
//? incriment увеличение на один
// let inc = 0;
// inc = inc + 1;
// //или
// inc += 5; //сокращенный вариант
// //или
// inc++;
// console.log(inc);
// //?decrement уменьшение на один
// let dec = 0;
// dec--; //постфиксный вариант
// console.log(dec);

// let i = 0;
// console.log(i++); //постфиксный.выводит и потом увеличивыет. еще не увеличил = 0
// console.log(i); //=1

// console.log(++i); //префиксный. сразу увеличивает =1
// console.log(i); //=1

//!--Циклы----------------for------------------

// for(начало; условие; шаг){
//     тело цикла
// }

// for (let i = 50; i <= 100; i++) {
//   console.log(i);
// }

//?как с помощью цикла for переберать массив
// let arr = [3, 54, 12, 34, 123, 53, 98];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// } //?каждый элемент

// for (let i = 0; i < arr.length; i += 2) {
//   console.log(arr[i]);
// } //?перепрыгиваем через 1. шаг 2

//!-----------break | continue ------------------
//? break - останавливает цикл

// let arr = [1, 2, 3, 0, 6, 7, 8, 0, 78, 4, 0];

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     console.log("we find null");
//     break;
//   }
//   console.log(arr[i]);
// }

//? continue - пропускает один шаг

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     continue;
//   }
//   console.log(arr[i]);
// }

//todo количество
// let arr = [1, 2, 3, 0, 6, 7, 8, 0, 78, 4, 0];
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 0) {
//     count++;
//   }
// }
// console.log(count);

//todo сумма
// let arr = [1, 2, 3, 0, 6, 7, 8, 0, 78, 4, 0];
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//!------------------while-----------------
//?до тех пор, например : запращивай данные пока не введет правильно имя
//?используем когда мы не знаем сколько будет итнраций

// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let arr = ["a", "b", "c", "d", "f"];

// let i = 0;

// while (i < arr.length) {
//   console.log(arr[i]);
//   i++;
// }

// let pass = prompt("enter password: ");
// while (pass !== "qwerty") {
//   pass = prompt("enter pass");
// }

// while (true) {
//   let pass = prompt("enter pass: ");
//   if (pass === "qwerty") {
//     break;
//     alert("Success");
//   } else {
//     alert("wrong pass\n try again");
//   }
// }

// let num = 0;
// do {
//   console.log(num);
//   num++;
// } while (num <= 100);
//делает потом думает. отработает минимум один раз

//!--------------------------for in |for of------------
//todo for in
//? переберает ключи.  единтвенный цикл через который можно перебрать объект
//? у нас есть доступ и к ключам (i) и к значениям (obj[i])
//? работает и с упорядочными(str,arr) и не с упорядочными(obj) (массивы|строки и объекты)

// const obj = {
//   name: "John",
//   surname: "Snow",
//   age: 30,
// };

// let key = "name";
// console.log(obj[key]);

// for (let i in obj) {
//   console.log(`${i}: ${obj[i]}`);
// }

// let arr = [9, 5, 7, 5, 6, 8, 3, 4];
// for (let i in arr) {
//   console.log(arr[i]);
// }

// let str = "hello";
// for (let i in str) {
//   console.log(i); //выведет индексы
//   console.log(str[i]); //выведет по буквам h e l l o
// }

//todo for of
//?  сразу перебирает значения,
//? есть доступ к значениям, нет доступа к ключам
//? работает только для итерируемых объектов (упорядочные- массивы. строки)
//? не работает с не упорядочными (obj), нет доступа к индексам

// let arr = [9, 5, 7, 5, 6, 8, 3, 4];
// for (let elem of arr) {
//   console.log(elem);
// }

// let str = "hello";
// for (let value of str) {
//   console.log(value);
// }

// let obj = {
//   name: "John",
//   surname: "Snow",
//   age: 30,
// };
// for (let value of obj) {
//   console.log(value);
// }

//!-----вложенные циклы-----------
//? нужны чтобы перебирать вложенность

// let arr = [
//   [12, 3, 4],
//   [1, 7, 2, 9],
//   [4, 5],
// ];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log(`i: ${i}, j: ${j}`);
//   }
// }

// let arr = ["makers", "incubator", "in", "Bishkek"];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
//? тоже самое ->
// for (let str of arr) {
//   console.log(str);
//   for (let letter of str) {
//     console.log(letter);
//   }
// }

//! 0--- массивы ---key, values, entries------------
// const keys = Object.keys(obj);
// const values = Object.values(obj);
// const entries = Object.entries(obj);

// console.log(keys);
// console.log(values);
// console.log(entries);

// let arr = [
//   ["name", "John"],
//   ["surname", "Snow"],
//   ["age", 30],
// ];

// const obj = Object.fromEntries(arr); // превращает массив в объект
// console.log(obj);

// console.log(arr[0][0], arr[0][1]);

// for (let elem of arr) {
//   console.log(elem);
// }
