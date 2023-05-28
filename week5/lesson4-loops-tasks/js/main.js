//!----------подсказки---------------
//  Push arr.push("слово")
//  Pop arr.pop()
//  unshift
//  shift
//  splice arr.splice([индекс], кол-во, "слово")
//  slice arr.slice([начало индекс], [конец индекс])
//  join arr.join(" ") //склеивает в строку
//  split arr.split(" ")//из строки в массив. если с пробелом то разделит на элементы
//  reverse arr.reverse()
//  sort() //сортирует по алфа
//  sort((a,b)=> a-b) //по возрастанию
//  sort((a,b)=> b-a) //по убыванию
// todo Задание №1
// todo Дан массив ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"]. Выведите в консоль имена Mirdin и Aliia с помощью цикла for
// let name = ["Polina", "Mirdin", "Azret", "Aliia", "Aidana"];
// for (let i in name) {
//   if (i % 2 !== 0) {
//     console.log(name[i]);
//   }
// }
//todo Задание №2
//todo Создайте пустой массив и заполните его числами от 1 до 10 с помощью цикла for
// let num = [];
// for (let i = 1; i <= 10; i++) {
//   num.push(i);
// }
// console.log(num);

//todo Задание №3
//todo Выведите в консоль все числа в промежутке с 50 до 99 включительно с помощью цикла.

// for (let i = 50; i <= 99; i++) {
//   console.log(i);
// }
//todo Задание №4
//todo Выведите те же числа, но уже в обратном порядке, т.е. с 99 до 50.

// for (let i = 99; i >= 50; i--) {
//   console.log(i);
// }
//todo Задание №5
//todo Найдите самый длинный элемент массива и вывкдите в консоль
// let fruits = ["pen", "pineapple", "apple", "pen"];
// let str = " ";
// for (let i = 0; i < fruits.length; i++) {
//   if (fruits[i].length > str.length) {
//     str = fruits[i];
//   }
// }
// console.log(str);

//todo Задание №6
//todo Так же найдите самый короткий элемент этого же массива
// let fruits1 = ["pen", "pineapple", "apple", "pen"];
// let str1 = fruits1[0];
// for (let i = 0; i < fruits1.length; i++) {
//   if (fruits1[i].length < str1.length) {
//     str1 = fruits1[i];
//   }
// }
// console.log(str1);
//todo Задание №7
//todo Выведите в консоль все элементы с четными индексами.
// let ind = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < ind.length; i++) {
//   if (i % 2 === 0) {
//     console.log(ind[i]);
//   }
// }

//todo Задание №8
//todo Дан двумерный массив. Выведите в консоль все элементы.
// let arr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// for (let i in arr) {
//   for (let j in arr[i]) {
//     console.log(arr[i][j]);
//   }
// }

//? task 25 simple massive
//todo Создайте переменную arr и присвойте массив со строками. Напишите код, который переписывает первые буквы строк массива верхним регистром. Вы должны вывести новый массив в переменной newArr в console.log()
// let arr = ["programming", "code", "javascript", "react"];
// let newArr = [];
// for (let elem of arr) {
//   newArr.push(elem[0].toUpperCase() + elem.slice(1));
// }
// console.log(newArr);

//todo elochka

// let size = 51;
// let str = "*";
// let space = "";

// for (let i = 1; i <= (size - 1) / 2; i++) {
//   space += " ";
// }
// for (let i = 1; i <= size; i += 2) {
//   console.log(space + str);
//   str += "**";
//   space = space.slice(1);
// }
//todo-------------------------task in class------
// TODO разсортировать массив из объектов на 2 массива: admin и user.
// let mixedUsers = [
//   {
//     name: "John",
//     role: "user",
//     age: 20,
//   },
//   {
//     name: "Khal",
//     role: "admin",
//     age: 24,
//   },
//   {
//     name: "Rob",
//     role: "user",
//     age: 86,
//   },
//   {
//     name: "Bronn",
//     role: "user",
//     age: 45,
//   },
//   {
//     name: "Daenerys",
//     role: "user",
//     age: 25,
//   },
//   {
//     name: "Jayme",
//     role: "admin",
//     age: 70,
//   },
//   {
//     name: "Jorah",
//     role: "user",
//     age: 34,
//   },
//   {
//     name: "Viseris",
//     role: "user",
//     age: 54,
//   },
//   {
//     name: "Catelyn",
//     role: "admin",
//     age: 60,
//   },
// ];
//todo answer
// let users = [];
// let admin = [];

// for (let elem of mixedUsers) {
//   console.log(elem);
//   if (elem.role == "admin") {
//     admin.push(elem);
//   } else {
//     users.push(elem);
//   }
// }

// console.log(users);
// console.log(admin);

// TODO Используя цикл и метод push заполните массив числами от 1 до 10.

// let arr = [];

// for (let i = 1; i <= 10; i++) {
//   arr.push(i);
// }

// console.log(arr);

// TODO Дан массив с числами. Переберите его циклом и запишите в новый массив только положительные из чисел.
// let arr = [-1, 2, -555, 467, -234, 555, 89, 331];
// let newArr = [];
// let newArr2 = [];
// for (let elem of arr) {
//   if (elem >= 0) {
//     newArr.push(elem);
//   }
//    else {
//     newArr2.push(elem);
//   }
// }
// console.log(newArr);
// console.log(newArr2);

//TODO вывести произведение всех элементов в массиве
// let arr = [144, 14, 41, 562];
// let mull = 1;
// for (let elem of arr) {
//   mull *= elem;
// }
// console.log(mull);

//!-----------------TASKS-----------------
//? task 3
// let arr = ["Paul", "John", "George", "Ringo", "Yoko"];
// for(let i = 0; i <= arr.length-1;i++){
//     console.log(arr[i])
// }

//? task 4
// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]
// for(let i = 0; i < 4; i++){
//     console.log(arr[i])
// }
//или через while
// let arr = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89] ;
// let i =0; //начало
// while(i <arr.length)//условие
// {
//     if(arr[i]<5){
// console.log(arr[i])
//     }
//     i++ //ifu
// }

//? task 5

// let i = 0;
// while (i <3) {
// console.log(`number ${i}`);
//  i++;
// }
//? task 6
// let str = "#";
// while (str <= "#######") {
//   console.log(str);
//   str += "#";
// }
//или
// let str = "#";
// while (str.length <= 7) {
//   console.log(str);
//   str += "#";
// }
//или

// for (let i = "#"; i.length <= 7; i += "#") {
//   console.log(i);
// }
//? task 7
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);

//? task 8
// for (let i = 1; i <= 100; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`fizzbuzz${i}`);
//   } else if (i % 3 === 0) {
//     console.log(`fizz${i}`);
//   } else if (i % 5 === 0) {
//     console.log(`buzz${i}`);
//   }
// }

//todo task 9

//todo task 10
// let word = "makers";
// word;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }
//или
// let word = "makers";
// for (let i = 0; i < word.length; i++) {
//   for (let j = i + 1; j <= word.length; j++) {
//     console.log(word.slice(i, j));
//   }
// }

//? task 11
// let num = 10;
// let sum = 0;
// for(let i = 1; i<= num; i++){
//     if(i % 2 === 0){
//         sum++
//     }
// }
//     console.log(sum)

//или
// let num = 10;
// let i = 1;
// let count =0;
// while( i<= num){
//     if(i %2 ===0){
//         count ++
//     }
//     i++
// }console.log(count)

//? task 12
// let num = 6;
// for (let i = 1; i <= num; i++) {
//   if (i % 2 === 0) {
//     console.log(" # # # #");
//   } else {
//     console.log("# # # # ");
//   }
// }
//? task 13
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"]
//  ];
//  for(let [i,j] of aboutUs){
//  console.log(`${i}: ${j}`)
//  } // метод деструктуризации

// for(let elem of aboutUs){
//   console.log(`${elem[0]: ${elem[1]}}`)
// }
//todo task 14
// let num = 10;
// for (let i = 2; i <= num; i++) {
//   for (let j = 2; i <= num; i++) {
//     if (num % num === 0 && num / 1 === 0) {
//       console.log(num[i]);
//     }
//   }
// }

// edilbek
// let num = 10;

// nextPrime:
// for (let i = 2; i <= num; i++) {
//   for (let j = 2; j < i; j++) {
//     if (i % j == 0) continue nextPrime;
//   }
//   console.log( i );
// }

//? task 15
// let num = 6;
// let sum = 0;
// for(let i = 1;i<=num;i++ ){
//   sum+=i
// }
// console.log(sum)

//? task 16
// let str = "Hello, world!";
// for (let i = 0; i < str.length; i++) {
//   if (str[i] === " " || str[i] === "!" || str[i] === ",") {
//     continue;
//   }
//   console.log(str[i]);
// }

// let str = 'Hello, world!';
// for (let i = 0; i < str.length; i++){
//     if (str[i] !== '!' && str[i] !== ' ' && str[i] !== ','){
//         console.log(str[i])
//     }
// }
//? task 17
// let str = "Hello";
// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     console.log(str[i]);
//   }
// }

//? task 18
// let matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];
// for (let i = 0; i < matrix.length; i++) {
//   for (let h = 0; h < matrix[i].length; h++) {
//     console.log(matrix[i][h]);
//   }
// }

//! task 26 -простые массивы
// let arr = ["a", "b", "c"];
// let newStr = arr.slice(0);
// let letter = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   newStr.push(letter);
// }
// console.log(newStr);
//? task 27 - простые массивы
// let str = "codingiseasy";
// let strNew = str.split("");

// for (let i in str) {
//   if (i % 2 !== 0) {
//     strNew.splice(i, 1, str[i].toUpperCase());
//   }
// }
// console.log(strNew.join(""));

//?Liram answer
// let str = "codingiseasy";
// let result = "";
// for (var i = 0; i < str.length; i++) {
//   if (i % 2 === 1) {
//     result += str[i].toUpperCase();
//   } else {
//     result += str[i];
//   }
// }
// console.log(result);
//  join arr.join(" ") //склеивает в строку
//  split arr.split(" ")//из строки в массив. если с пробелом то разделит на элементы

//? task 28
// let arr1 = [11, 7, 4];
// let arr2 = [22, 0, 8];
// let arr3 = [];
// let sum = 1;
// for (let i = 0; i < arr1.length; i++) {
//   sum = arr1[i] * arr2[i];
//   arr3.push(sum);
// }
// console.log(arr3);

//?task 29
// let arr1 = ["Makers", "Java", "Full"];
// let arr2 = ["KG", "Script", "Stack"];
// let arr3 = [];
// let sum = 1;
// for (let i = 0; i < arr1.length; i++) {
//   sum = arr1[i] + arr2[i];
//   arr3.push(sum);
// }
// console.log(arr3);

//? task 9
// let users = { John: 28, Mark: 30, David: 25, Richard: 42 };
// let age = 0;
// for (let elem in users) {
//   age += users[elem];
// }
// console.log(age);

//? task 13
// let aboutUs = [
//   ["name", "Makers"],
//   ["type", "Bootcamp"],
//   ["place", "Bishkek"],
//   ["languages", "JavaScript, Python"],
//   ["simply", "the best!"],
// ];
// for (let elem of aboutUs) {
//   console.log(elem.join(": "));
// }

//todo task 14

//? task 20
// let arr = [
//   1,
//   10,
//   true,
//   "hello",
//   "JS",
//   null,
//   false,
//   0,
//   { title: "Samsung", price: 1000 },
// ];
// for (let elem = 0; elem < arr.length; elem++) {
//   if (typeof arr[elem] === "number") {
//     console.log(arr[elem]);
//   } else if (typeof arr[elem] === "string") {
//     console.log(arr[elem]);
//   } else {
//     continue;
//   }
// }

//?task 23
// let users = [
//   { name: "John", age: 20 },
//   { name: "Jack", age: 15 },
//   { name: "Helen", age: 34 },
//   { name: "Tom", age: 20 },
//   { name: "Bob", age: 54 },
//   { name: "Jessica", age: 13 },
// ];
// const obj = Object.fromEntries(users);
// for (let i in users) {
//   if (users[i].age >= 18) {
//     console.log(
//       `Hello, ${users[i].name}, the grand sale has begun, prices are reduced by 20%!`
//     );
//   }
// }

//? task 24
// let arr =[2, 3, 4, 5];
// let sum = 1;
// for(let elem of arr){
//    sum*=elem
// }
// console.log(sum)

//? task 25
// let obj ={
//     'Бишкек': 'Кыргызстан',
//     'Минск': 'Беларусь',
//     'Москва': 'Россия',
//     'Киев': 'Украина'
//     };

//     for(let elem in obj){
//         console.log(`${elem} - это ${obj[elem]}`)
//     }

//? task 26
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// // let arr3 = arr1.contact(arr2);
// for (let elem of arr1) {
//   let;
// }

//? task 21
// let cars = [
//   {mark: 'Wolksvagen', year: 2005, price: 8000, sale: 0},
//   {mark: 'Audi', year: 1996, price: 2500, sale: 0},
//   {mark: 'Mercedes', year: 2001, price: 5000, sale: 0},
//   {mark: 'BMW', year: 2015, price: 18000, sale: 0},
//   {mark: 'Porsche', year: 2020, price: 120000, sale: 0}
// ]
// for(let value of cars){
//   if(value.year <=2007){
//       let discount = value.price/100*20
//       value.sale = value.price  - discount
//   }
// }console.log(cars)

//?task 22
// const data = {
//   electronics: ["Samsung", "Apple", "Xiaomi"],
//   fruits: ["Apple", "Pineapple", "Orange"],
//   cars: ["Audi", "Mercedes", "BMW"],
// };
// let answer = prompt("Введите наименование товара");
// let flag = false;
// for (let keys in data) {
//   for (let value of data[keys]) {
//     if (answer === value) {
//       console.log(`ТОвар найден в категории: ${keys}`);
//       flag = true;
//       break;
//     }
//   }
//   if (flag === false) {
//     console.log(`ТОвар не найден`);
//   }
// }
//? task 26
// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr3 = [];
// for(let i of arr1){
//     arr3.push(i)
// }
// for(let j of arr2){[
//      arr3.push(j)
// ]}console.log(arr3)

//? task 27
// let arr = [2, 5, 9, 15, 0, 4];
// for (let i of arr) {
//   if (i > 3 && i < 10) console.log(i);
// }

//? task 28
// let arr = [2, 5, 9, 15, 0, 4];
// let sum = 0;
// for(let i of arr){
//     if(i % 2===0){
//         sum+=i
// }
//     }console.log(sum)
