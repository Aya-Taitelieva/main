//! indexOf  возвращает индекс элемента, рабоатет с массивами
// let arr = ["a", "b", "c", "d"];

// let index = arr.indexOf("c"); //? вернет первое совпадение
// let index1 = arr.indexOf("f"); //? вернет -1 если элемент не найден
// console.log(index);
// console.log(index1);

// console.log({} === {}); //? false

// let str = " hello ";
// let res = str.trim(); //? уберает пробелы по бокам
// console.log(res);

//? task 13 - func
// function checkTask() {
//   const str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
//   let pass = "A1a";

//   for (let i = 0; i < 5; i++) {
//     const index = Math.floor(Math.random() * str.length); //? генерирует индекс
//     //console.log(index);
//     //console.log(str[index]);
//     pass += str[index];
//   }
//   return pass;
// }
// checkTask();

//? task 24 -func

// function checkTask(arr) {
//   const strArr = [];
//   const numArr = [];

//   for (let i of arr) {
//     if (typeof i === "string") {
//       strArr.push(i);
//     } else {
//       numArr.push(i);
//     }
//   }
//   //console.log(strArr, numArr);
//   return [numArr, strArr];
// }
// console.log(checkTask([1, "hello", 2, 3, "world"]));

//? task 25 - func
// let students = [
//   { student: "Jack", marks: 43 },
//   { student: "Tom", marks: 92 },
//   { student: "Helen", marks: 85 },
//   { student: "Peter", marks: 58 },
//   { student: "Jessica", marks: 78 },
// ];

// function checktask(arr) {
//   const sorted = arr.sort((a, b) => b.marks - a.marks);
//   return sorted;
// }
// checktask(students);

//? task 26 -func
// let database = [
//   {
//     title: "Samsung S10",
//     price: 800,
//     count: 6,
//     category: "samsung",
//   },
//   {
//     title: "iPhone 13 Pro",
//     price: 1200,
//     count: 9,
//     category: "apple",
//   },
//   {
//     title: "Xiaomi Mi 10",
//     price: 500,
//     count: 2,
//     category: "xiaomi",
//   },
//   {
//     title: "Samsung S9",
//     price: 600,
//     count: 4,
//     category: "samsung",
//   },
//   {
//     title: "iPhone 11",
//     price: 850,
//     count: 1,
//     category: "apple",
//   },
// ];

// function checkTask(arr, str) {
//   let result = [];
//   for (let elem of arr) {
//     if (elem.title.toLowerCase().includes(str.toLowerCase())) {
//       result.push(elem);
//     }
//   }
//   return result;
// }
// console.log(checkTask(database, "mi"));

// //! includes проверяет есть ли данная строка
// let str1 = "hello";
// console.log(str1.includes("llo"));

//? task 27 -func
// let database = [
//   {
//     title: "Samsung S10",
//     price: 800,
//     count: 6,
//     category: "samsung",
//   },
//   {
//     title: "iPhone 13 Pro",
//     price: 1200,
//     count: 9,
//     category: "apple",
//   },
//   {
//     title: "Xiaomi Mi 10",
//     price: 500,
//     count: 2,
//     category: "xiaomi",
//   },
//   {
//     title: "Samsung S9",
//     price: 600,
//     count: 4,
//     category: "samsung",
//   },
//   {
//     title: "iPhone 11",
//     price: 850,
//     count: 1,
//     category: "apple",
//   },
// ];
// function checkTask(str, arr) {
//   let result = [];
//   for (let elem of arr) {
//     if (elem.category === str) {
//       result.push(elem);
//     }
//   }
//   return result;
// }
// console.log(checkTask("mi", database));

//? task 28 - func
// const user = { name: "Sam", balance: 700, result: [] };
// function addExpenses(target, spend) {
//   if (user.balance < spend) {
//     return "У вас недостаточно средств на балансе";
//     return;
//   }
//   let obj = {
//     target: target,
//     spend: spend,
//   };
//   user.result.push(obj);
//   user.balance -= spend;
//   return user.result;
//   //console.log(obj);
// }
// addExpenses("school", 500);

// function addBalance(money) {
//   return user.balance += money;
// }

//? task 29 - func
//! crud - create функционал для создания
// let db = [];

// function createObj(id, title, price, category) {
//   let obj = {
//     id,
//     title,
//     price,
//     category,
//   };
//   db.push(obj);
//   return db;
// }

// function readObj(id) {
//   for (let elem of db) {
//     if (elem.id === id) {
//       return elem;
//     }
//   }

//   return "404: Объект не найден";
// }

// function updateObj(id, title, price, category) {
//   let newObj = {
//     id,
//     title,
//     price,
//     category,
//   };
//   for (let i = 0; i < db.length; i++) {
//     if (db[i].id === id) {
//       db.splice(i, 1, newObj);
//       return db;
//     }
//   }
//   return "404: Объект не найден";
// }

// function deleteObj(id) {
//   for (let i = 0; i < db.length; i++) {
//     if (db[i].id === id) {
//       db.splice(i, 1);
//       return db;
//     }
//   }
//   return "404: Объект не найден";
// }

//?  task 22 - func
// function checkTask(fuel, kmTotal) {
//   // 10 20
//   // x 100
//   let x = (fuel * 100) / kmTotal;
//   return `На 100км было израсходовано ${x.toFixed(1)} литров топлива`;
// }
// checkTask(10, 20);

//? task 23 - func
// let employees = [
//   { name: "Jack", salary: 10000, overTime: 4 },
//   { name: "Tom", salary: 15000, overTime: 3 },
//   { name: "Jessica", salary: 20000, overTime: 9 },
//   { name: "Helen", salary: 25000, overTime: 2 },
//   { name: "Peter", salary: 30000, overTime: 7 },
// ];

// function checkTask(arr) {
//   let result = [];
//   for (let elem of arr) {
//     let bonus = elem.overTime * 200; //800
//     let obj = {
//       name: elem.name, //jack
//       salary: elem.salary + bonus, //10800
//     };
//     //console.log(obj);
//     result.push(obj);
//   }
//   return result;
// }
// checkTask(employees);
