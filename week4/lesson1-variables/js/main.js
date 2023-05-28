// console.log("Hello world!");
// let name = "Aigerim";
// let num = 25;

// console.log(name);
// console.log(num);

// !правила написания названия переменных
// 1) должно содержать только буквы и цифры
//let num1 = 5;
// 2)первый символ не должен быть цифрой
// let 1num = 5 error
// 3) запрещено писать символы, кроме знака $ и _
//let $num = 5;
//let _num = 5;
// 4) желательно писать на латинице
//let имя = "aya"; //не желательно
//5) не должно совпадать с зарезервированным словом
//let let = 5;
//6) название переменной из нескольких слов пишутся через camelCase
//let firstNum = 1;
//7) записываем подходящие по логике названия
//8) регистр имеет значение
//let num = 5;
//let Num = 5;
//9) нельзя повторять название переменных
//let age = 12;
//let age = 13;

const incubator = "makers";
let car = "Tesla";
// console.log(car);
car = "bmw";
//console.log(car);

var lang = "js";
lang = "pyton";
//console.log(lang);

//!----------------hoisting!-------------
//? Хойстинг- поднятие переменных вверх
// console.log(mentor);
// let mentor = "Polina";

//console.log(mentor);
var mentor = "Ilya";

//!----------типы данных------------
let str = "string"; //строка
let num = 55; //номер, цифры
let bool = true; // boolean  true/false
let obj = {}; //обьект

let nul = null; //null специальная пустота, здесь должны быть данные но пока что они не пришли
let undef = undefined; // undefined не специальная пустота

let bigInt = 123192834142n; //большие цифры
let symbol = Symbol(); // что то уникальное
let symbol2 = Symbol();

// console.log(typeof str); // для проверки какой тип данных
// console.log(typeof num);
// console.log(typeof bool);
// console.log(typeof obj);
// console.log(typeof bigInt);
// console.log(typeof symbol);
// console.log(typeof nul);

let upper = str.toUpperCase();
//console.log(upper);

let upper2 = str.toLocaleLowerCase();
//console.log(upper2);

let fixed = num.toFixed(2); //ставит циры после точки 55,00
//console.log(fixed);

let srtNum = num.toString; //переводит цифру в строку
//console.log(srtNum);

// let num1 = 5;
// let num2 = 6;
// console.log(num1 + num2);

// let num1 = "5";
// let num2 = "6";
// console.log(+num1 + +num2); //унарный оператор для перевода строк в цифру

//!------------ Блок объектов--------------------
let person = {
  name: "Aigerim",
  age: 24,
  gender: "female",
  weight: 50,
  married: false,
  cat: {
    name: "Cherry",
  },
};
//console.log(person);
//console.log(person.cat.name);

let sum = person.age + person.weight;
//console.log(sum);

//!-----------------Array массивы стуктура данных для перечисления--------------
//                  0          1          2        3    индексы по умолчанию

// у массива есть порядок, есть длина [литтералы массива]
//в отличии от объекта {литтералы обекта}
let students = ["Amaliya", "Aigerim", "Aidana", "Sanzhar"];
//console.log(students);
//console.log(typeof students); //для списка, перечисления
//console.log(students[1]);
// console.log(students.length); посмотреть длинну массива, общее количество
// console.log(students[0]);
let lastIndex = students.length - 1;
//console.log(students[lastIndex]); //формула для нахождения последнего значения в массиве

let randomArr = [true, 23, "dfgd", { num: 300 }, [100, 200], null];
//console.log(randomArr[3]);

let userName = "Admin";
let password = 123;

//console.log(" Hello, " + userName + "! Your password: " + password); //конкатинация- слияние строк

//console.log(`Hello, ${userName}! Your Password: ${password}`); //интерполяция- использ переменные внутри строки. динамический способ
