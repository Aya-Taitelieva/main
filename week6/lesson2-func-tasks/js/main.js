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
//? or
// function checkTask(num){
//     let newNum = num.toString();
//     let sum =0;
//    for(let elem of newNum){
//     sum+= +elem
//     }return sum
// }console.log(checkTask(456))

//? task 6
// function checkTask(arr, bool){

//     let newArr = arr.sort((a, b) => a.length - b.length)

// if(bool === true){
//     return newArr[newArr.length-1]
// }else{
//     return newArr[0]
// }
// }
// console.log(checkTask(['Финляндия', 'Япония', 'Лаос', 'Испания', 'Мексика'], true))

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
//? or
// function checkTask(str, letter){
//     let count = 0;
//     for(let i =0; i < str.length; i++){
//         if(str[i]=== letter){
//             count++
//         }
//     }return count
// }
// console.log(checkTask("hello","o"))

//? task 8
// function checkTask(n) {
//   let res = 1;

//   while (n) {
//     res *= n--;
//   }
//   return res;
// }
// console.log(checkTask(5));
//? or
// function checkTask(n) {
//   let res = 1;
//   for (let i = n; i >= 1; i--) {
//     res *= i;
//   }
//   return res;
// }

//? or
// function checkTask(n) {
//   let res = 1;
//   for (let i = 1; i <= n; i++) {
//     res *= i;
//   }
//   return res;
// }

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
//? or
// function checkTask(str) {
//   let newStr = str.split("").reverse().join("");
//   if (newStr === str) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkTask("lol"));

//?task 11
// function checkTask(str) {
//   let vowel = str.replace(/[aeiou]/gi, "");
//   let newStr = vowel.toUpperCase();
//   console.log(newStr);
//   return newStr;
// }
// console.log(checkTask("hello"));

//? or

// function checkTask(str) {
//   let word = "aeiou";
//   for (let i = 0; i < str.length; i++) {
//     for (let g = 0; g < word.length; g++) {
//       if (str[i] === word[g]) {
//         str = str.replace(str[i], "");
//       }
//     }
//   }
//   return str.toUpperCase();
// }
// console.log(checkTask("Hello"));

//? task 12

// function checkTask(num, num2) {
//   let arr = [];
//   for (let i = num; i <= num2; i++) {
//     let str = i.toString();
//     if (
//       str[0] % 2 === 0 &&
//       str[1] % 2 === 0 &&
//       str[2] % 2 === 0 &&
//       str[3] % 2 === 0
//     ) {
//       arr.push(+str);
//     }
//   }
//   return arr;
// }
// console.log(checkTask(2000, 3001));

//? task 13
// let pass = "";
// function checkTask() {
//   let symbols =
//     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   for (let i = 1; i <= 8; i++) {
//     pass += symbols.charAt(Math.floor(Math.random() * symbols.length)); //charAt - для того чтобы вытащить данные
//   }
//   return pass;
// }
// console.log(checkTask());

//? task 14
// function checkTask(str) {
//   let sever = 0;
//   let yug = 0;
//   let zapad = 0;
//   let vostok = 0;
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] == "с") {
//       sever++;
//       // return sever;
//     } else if (str[i] === "ю") {
//       yug++;
//       // return yug;
//     } else if (str[i] === "з") {
//       zapad++;
//       // return zapad;
//     } else if (str[i] === "в") {
//       vostok++;
//       // return vostok;
//     }
//   }
//   if (sever === yug && zapad === vostok && str.length === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(checkTask("сюсюсюсюсю"));
//? or
// function checkTask(str) {
//   let sum = 0;
//   for (let i of str) {
//     if (i === "с") {
//       sum++;
//     } else if (i === "ю") {
//       sum--;
//     } else if (i === "з") {
//       sum += 2;
//     } else if (i === "в") {
//       sum -= 2;
//     }
//   }
//   if (sum === 0 && str.length === 10) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(checkTask("сюсюсюзтсю"));

//? task 15
// function checkTask(rafael, novak) {
//   let rafaelRes = 0;
//   let novakRes = 0;
//   for (let i = 0; i < rafael.length; i++) {
//     if (rafael[i] < novak[i]) {
//       novakRes++;
//     } else {
//       rafaelRes++;
//     }
//   }
//   if (rafaelRes > novakRes) {
//     return "рафаель";
//   } else {
//     return "новак";
//   }
// }
// console.log(checkTask([1, 0, 3], [2, 2, 1]));
//? task 16
// function checkTask(num, num2, num3) {
//   let sum = 0;
//   if (num3 === 0) {
//     sum = num + num2;
//   } else {
//     sum = (num + num2) / num3;
//   }
//   return sum;
// }
// console.log(checkTask(5, 4, 6));

//? task 17
// function checkTask(arr, bool) {
//   let newArr = [];
//   for (let elem of arr) {
//     if (bool) {
//       newArr.push(elem.toUpperCase());
//     } else {
//       newArr.push(elem.toLowerCase());
//     }
//   }
//   return newArr;
// }
// console.log(checkTask(["hello", "World"], true));

//? task 18
// function checkTask(str) {
//   let strObj = {};
//   for (let i = 0; i < str.length; i++) {
//     if (strObj[str[i]]) {
//       strObj[str[i]]++;
//     } else {
//       strObj[str[i]] = 1;
//     }
//   }
//   return strObj;
// }
// console.log(checkTask("Hello"));
//?task 19
// function checkTask(num, num2, calc) {
//   let sum = 0;
//   let mull = 1;
//   if (calc === "+") {
//     sum = num + num2;
//   } else if (calc === "-") {
//     sum = num - num2;
//   } else if (calc === "*") {
//     mull = num * num2;
//   } else if (calc === "/") {
//     mull = num / num2;
//   }
//   if (sum) {
//     return sum;
//   } else {
//     return mull;
//   }
// }
// console.log(checkTask(5, 7, "+"));

//? task 20
// function checkTask(arr) {
//   for (let elem of arr) {
//     for (let i in elem) {
//       if (i === "work" && elem[i].includes("IT")) {
//         console.log(
//           `Здравствуйте ${elem.name}, в магазине Sulpak идет акция скидка на все ноутбуки 10%`
//         );
//       }
//     }
//   }
// }
// checkTask([
//   { name: "Jack", age: 35, work: "IT-backend developer" },
//   { name: "Helen", age: 35, work: "Nurse" },
//   { name: "Bob", age: 35, work: "Driver" },
//   { name: "Jessica", age: 35, work: "IT-frontend developer" },
//   { name: "Helga", age: 35, work: "IT-HR" },
// ]);
//? or
// function checkTask(users) {
//     users.forEach(function(user) {
//     if(user.work.includes('IT')) {
//     console.log(Здравствуйте ${user.name}, в магазине Sulpak идет акция скидка на все ноутбуки 10%);
//     }
//     });
//     }

//? task 21
// function checkTask(str, newStr) {
//   let num = parseInt(str);
//   if (newStr === "km") {
//     return num / 1000 + "km";
//   } else if (newStr === "cm") {
//     return num * 100 + "cm";
//   } else if (newStr === "mm") {
//     return num * 1000 + "mm";
//   }
// }
// console.log(checkTask("1200m", "km"));
//!---------tasks Ilya-----------

//? task 1
// function getSum(a, b, c) {
//   let sum = (a + b) * c;
//   return sum;
// }
// console.log(getSum(1, 2, 3));

//? task 2
// function arrSum(array) {
//   //   let array = [1, 2, 3];
//   let sum = 0;
//   for (elem of array) {
//     sum += elem; // сразу пишу индекс
//   }
//   return sum;
// }
// console.log(arrSum([1, 2, 3, 4]));

//? task 3
// let one = getSum(1, 1, 1);
// let two = arrSum([2, 2, 2]);
// newSum = one + two;
// console.log(newSum);
