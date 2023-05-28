//!---------TASKS------------
//? task 2
// const checkTask = (age, name) =>
//   console.log(`Happy Birthday ${name}! You are ${age}!`);
// checkTask(18, "Jena");

// ?task 3
// const checkTask = (arr) => {
//     {
//     arr[i] += "is cool";
//   }
//   console.log(arr);
// };
// checkTask(["John", "Mike", "Rick", "Drake"]);

//? task 4
// const checkTask = (str) => {
//   let reverse = str.split("").reverse().join("");
//   console.log(reverse);
// };
// checkTask("JavaScript");

//? task 5
// const checkTask = (str, letter) => {
//   let sum = 0;
//   for (let elem of str) {
//     if (elem === letter) {
//       sum++;
//     }
//   }
//   console.log(sum);
// };
// checkTask("JavaScript", "v");

//? task 6
// const checkTask = (arr) => {
//   let newArr = [];
//   for (let elem of arr) {
//     if (elem % 2 === 0) {
//       elem *= 5;
//       newArr.push(elem);
//     }
//   }
//   console.log(newArr);
// };
// checkTask([1, 2, 3, 4, 5, 6]);

//? task 7
// const checkTask = (user) => {
//   if (user === "User") {
//     return "Hello User";
//   } else {
//     return "Error";
//   }
// };
// checkTask("User");

//? task 8
// const checkTask = (num) => {
//   switch (true) {
//     case num >= 0 && num < 15:
//       console.log("в первую");
//       break;
//     case num >= 15 && num < 30:
//       console.log("во вторую");
//       break;
//     case num >= 30 && num < 45:
//       console.log("в третью");
//       break;
//     case num >= 45 && num <= 59:
//       console.log("в четвертую");
//       break;
//     default:
//       console.log("Invalid Input");
//   }
// };
// checkTask(12);

//? task 9
// const checkTask = (time) => time * 3600;
// console.log(checkTask(8));

//? task 10
// const checkTask = (first, second) => {
//   if (first % second === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(checkTask(5, 2));

//? task 11
// const checkTask = {
//   language: "JS",
//   framework: "React",
//   describe() {
//     return this.language + this.framework;
//   },
// };

// console.log(checkTask.describe());

//? task 12
// const checkTask = {
//   students: ["Helly", "Joe", "Tommy"],
//   title: "Our student",
//   showList() {
//     for (let elem in this.students) {
//       console.log(`${this.title}: ${this.students[elem]}`);
//     }
//   },
// };
// checkTask.showList();

//? or
// const checkTask = {
//   students: ["Helly", "Joe", "Tommy"],
//   title: "Our student",
//   showList() {
//     this.students.forEach((student) => {
//       console.log(`${this.title}: ${student}`);
//     });
//   },
// };

//? task 13
// const checkTask = {
//   name: "John",
//   age: 30,
//   job: "Engineer",

//   show() {
//     for (let key in this) {
//       if (typeof this[key] !== "function" && key !== "show") {
//         console.log(`${key}: ${this[key]}`);
//       }
//     }
//   },
// };

//? task 16
// const getAge = (name, age) => {
//   return `${name}: ${2023 - age}`;
// };
// console.log(getAge("Санжар", 2002));

//? task 17
// const average = (...num) => {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum += num[i];
//   }
//   return sum / num.length;
// };
// console.log(average(1, 2, 3, 4, 5, 6, 7));

//? task 18
// const func = (num, num2, num3) => {
//   return (num - num2) / num3;
// };
// console.log(func(40, 15, 5));

//? task 19
// const weekDay = (num) => {
//   if (num === 1) {
//     return "Понедельник";
//   } else if (num === 2) {
//     return "Вторник";
//   } else if (num === 3) {
//     return "Среда";
//   } else if (num === 4) {
//     return "Четверг";
//   } else if (num === 5) {
//     return "Пятница";
//   } else if (num === 6) {
//     return "Суббота";
//   } else if (num === 7) {
//     return "Воскресенье";
//   } else {
//     return "Число не верное";
//   }
// };
// console.log(weekDay(2));

//? task 20
// const cube = (num) => num ** 3;
// console.log(cube(3));

//? task 21
// const hasNumsInRow = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === arr[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// };
// console.log(hasNumsInRow([1, 2, 3, 4, 5, 6, 7, 7, 8, 9, 10]));

//? task 22
// const checkSum = (num, num2) => {
//   if (num + num2 > 10) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.log(checkSum(5, 4));

//?task 23
// const reverseArray = (arr) => {
//   let o = [];

//   for (let i = arr.length - 1; i >= 0; i--) {
//     o.push(arr[i]);
//   }
//   return o;
// };
// console.log(reverseArray([1, 2, 3, 5, 10]));

//? task 24
// const arrayFill = (str, num) => {
//   let newStr = [];
//   for (let i = 0; i < num; i++) {
//     newStr.push(str);
//   }
//   return newStr;
// };
// console.log(arrayFill("x", 5));

//? task 25
// const getDivisors = (num) => {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i === 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
// console.log(getDivisors(19));

//todo task 26

//? task 27
// const getDigitsSum = (num) => {
//   let sum = 0;
//   let newNum = num.toString();
//   for (let i = 0; i <= newNum.length - 1; i++) {
//     sum += +newNum[i];
//   }
//   return sum;
// };
// console.log(getDigitsSum(82));

//? task 28
// const inArray = (str, arr) => {
//   let result = [];
//   for (let elem of arr) {
//     if (elem === str) {
//       result.push(elem);
//       return true;
//     }
//   }
//   return false;
// };
// console.log(inArray("spider", ["dog", "cat", "horse"]));
