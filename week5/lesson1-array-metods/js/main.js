//методы массивов нужны для упращения работы с массивами
// //!-------------------push | pop----------------
//добавляет или удаляет элемент в нонце

// const students = ["Aya", "Dana", "Jiba"];
// console.log(students);

// students.push("Baytik", "Mukha");
// console.log(students);
//?можно добавить несколько элементов в конец, также пуш возвращает длину нового массива
// const res = students.push("Baby", 465);
// console.log(res);
// console.log(students);

// console.log(students);
// students.pop();
// const deletedItem = students.pop(); //возвращает удаленный элемент
// console.log(deletedItem);
// console.log(students);
//? удаляет последний элемент с конца

//!-----------------unshift | shift-----------------
//добавляет и удаляет элементы вначале
// const students = ["Aya", "Dana", "Jiba"];
// console.log(students);
// students.unshift("Nurs");
// console.log(students);
//возвращает длинну нового массива. добавляет элемент в начало
// const res = students.unshift("Nurs");
// console.log(res);

// students.shift(); //возвращает удвленный элемент
//удаляет элемент в начале

// const deletedItem = students.shift();
// console.log(deletedItem);
// console.log(students);

//!------------------splice | slice---------------

// const fruits = ["apple", "banana", "orange", "watermelon", "lemon"];
//? splice - универсальный медот добавляет и удаляет и заменяет
//?принимает три аргумента   возвращает удаленный элемент
// console.log(fruits);
// fruits.splice(2, 0, "garpe");

// fruits.splice(0, 1);
//?начни с первого элемента(по индексу). удали один элемент. на что заменить
// fruits.splice(0, 1, "mango");
// console.log(fruits);

// fruits.splice(2, 1);
// console.log(fruits);

// fruits.splice(-1, 1); // удаляет последний элемент по индексу
// fruits.splice(fruits.length, 0, "grape"); // добавляет  последний элемент по индексу в конец
// fruits.splice(0, 0, "grape"); // добавляет элемент по индексу в начало
// console.log(fruits);

// const deleteditemsArray = fruits.splice(0, 1); //?всегда возвращает результат в массиве, массив удаленных элементов
// console.log(deleteditemsArray);
// console.log(fruits);

// const deleteditemsArray = fruits.splice(0, 0);
// console.log(deleteditemsArray); // возвращает пустой массив

//? slice коппирует и вставляет в переменную. от одного индекса до второго

// const fruits = ["apple", "banana", "orange", "watermelon", "lemon"];
// const res = fruits.slice(0, 3);
// console.log(res); //копирует элементы в новый массив, 1 цифра-начало индекса, 2цифра- конец индекса не включительно
// console.log(fruits);

// const copieArr = fruits.slice(-3);
// console.log(copieArr);

//!-----------join | split | reverse-----------------
// const fruits = ["apple", "banana", "orange", "watermelon", "lemon"];

// fruits.reverse(); //? переварачивает массив , делает новый массив. мутирует

// const newArray = fruits.reverse(); // переварачивает массив
// console.log(fruits);
// console.log(newArray);

// const fruits = ["apple", "banana", "orange", "watermelon", "lemon"];
// const res = fruits.join(", "); //?принимает разделитель. из массива делает одну строку, соединяет элементы в строки, не меняет оригинальный массив
// console.log(res);

//? split разделитель. делит на элементы массива . принимакт тот элемент после которого нужно рахделить не выводя этот знак. Метод Строки

// const str = "makers first, bootcamp in KG";
// console.log(str);
// const arr = str.split(",");
// console.log(arr);

//? перевернуть строку. сделали из нее массив. перевернули массив.сделали обратно строчку
// const str = "javaScript";
// console.log(str);

// const arr = str.split("");
// console.log(arr);

// const reversed = arr.reverse();
// console.log(reversed);

// const res = reversed.join(""); //join принимает каой то символ в ""
// console.log(res);

//?как записать это в одну строчку
// const str = "JavaScript";
// const res = str.split("").reverse().join("");
// console.log(res);

//!-----------sort----------
//? сортирует по алфавиту если там лежат строки. мутирует оригинал и возвращает по поряддку
// const fruits = ["apple", "banana", "orange", "watermelon", "lemon"];
// console.log(fruits);
// fruits.sort();
// console.log(fruits);

const nums = [1, 5, 10, 43, 34, 12, 2];
//?сортирует по возрастанию. по первой цифре
// const sorted = nums.sort();
// const sorted = nums.sort((a, b) => a - b); // синтаксис функции по возрастанию
// console.log(sorted);
// const sorted2 = nums.sort((a, b) => b - a); // синтаксис функции сортирует по убыванию
// console.log(sorted2);

//task
// const countries = ["usa", "kyrgyzstan", "russia", "china", "kuba"];
// // console.log(countries);

// const sorted = countries.sort((a, b) => a.length - b.length); //? сортировка по длине по возрастанию
// // console.log(sorted);
// console.log(sorted[sorted.length - 1]);

// console.log(sorted[0]);

// // const sorted2 = countries.sort((a, b) => b.length - a.length); //? сортировка по длине по убыванию

// // const sorted2 = countries.sort((a, b) => b.length - a.length); //? сортировка по длине по убыванию,

// const sorted2 = countries.sort((a, b) => b.length - a.length)[0]; //? сортировка по длине по убыванию, ! можем прописать индекс в самом сорте

// console.log(sorted2);
// console.log(sorted2[0]);

//!--------------concat---------------
//?не меняет оригинал. объединяет массивы
// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr4 = [7, 8, 9];

// const arr3 = arr1.concat(arr2, arr4);
// console.log(arr3);

//!---------------------------------------

// console.log(Math.round(1.5)); //? до целого/ если равен или больше 5 откругляет вверхБ если меньше 5 откругляет вниз

// console.log(Math.floor(1.9)); //?округлит вниз. до целого

// console.log(Math.ceil(0.001)); //?округляет вверх. насколько бы меньше  не было число

// //? task
