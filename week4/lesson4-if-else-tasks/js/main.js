// //? task 29
// const data = "fdgd";
// if (typeof data === "number") {
//   console.log(`${data} - это число`);
// } else if (
//   typeof data === "string" &&
//   typeof parseInt(data) === "number" &&
//   !isNaN(parseInt(data))
// ) {
//   console.log(`${data} - это строка, в которой лежит число`);
// } else {
//   console.log("Необработанный случай");
// }

// //?task 6
// const num = 6;
// const strNum = num.toString();

// if (num >= 0 && strNum.length === 1) {
//   console.log(`Число ${num} однозначное положительное`);
// } else if (num >= 0 && strNum.length === 2) {
//   console.log(`Число ${num} двузначное положительное`);
// } else if (num < 0 && strNum.length === 2) {
//   console.log(`Число ${num} однозначное отрицательное`);
// } else if (num < 0 && strNum.length === 3) {
//   console.log(`Число ${num} двузначное отрицательное`);
// }

// //? task24

// const num = 123456;
// const strNum = num.toString();
// const res =
//   +strNum[0] + +strNum[1] + +strNum[2] === +strNum[3] + +strNum[4] + +strNum[5];
// console.log(res);

// //?task 7
// const favDrink = "milk";
// switch (favDrink) {
//   case "beer":
//     console.log("Чрезмерное употребление алкоголя вредит вашему здоровью ");
//     break;
//   case "vodka":
//     console.log("Чрезмерное употребление алкоголя вредит вашему здоровью ");
//     break;
//   case "coffee":
//     console.log("Кофеин вреден для сердца");
//     break;
//   case "milk":
//     console.log("Поздравляю! Молоко очень полезное");
//     break;
//   default:
//     console.log("К сожалению такого напитка нет в списке");
//     break;
// }

// //?task 10
// const firstNum = 5;
// const secondNum = 10;
// const sum = firstNum + secondNum;
// if (sum > 10 && sum < 20) {
//   console.log(sum * 5);
// } else if (sum > 20 && sum < 50) {
//   console.log(sum / 3);
// } else {
//   console.log(sum + 10);
// }

// //?task 27
// const data = 6;
// if (typeof data === "number") {
//   console.log("It's number");
// } else if (typeof data === "boolean") {
//   console.log("It's boolean");
// } else {
//   console.log("It's not number and boolean");
// }
// //?task 23
// const minute = 45;
// if (minute > 0 && minute < 15) {
//   console.log("1");
// } else if (minute >= 15 && minute < 30) {
//   console.log("2");
// } else if (minute >= 30 && minute < 45) {
//   console.log("3");
// } else if (minute >= 45 && minute <= 60) {
//   console.log("4");
// } else {
//   console.log("Число не верно");
// }

// //?task 28
// // todo Создайте объект obj, с ключами firstNum и secondNum.Напишите код который проверяет firstNum и secondNum:в случае если firstNum и secondNum не равны нулю, перемножьте числа и выведите в консоль результат если же одно из чисел равно нулю, то выведите в консоль их сумму если же оба значения равные нулю, выведите в консоль булево: false если же значением secondNum является булево false, вывести сумму
// const obj = {
//   firstNum: 6,
//   secondNum: 4,
// };
// if (obj.firstNum !== 0 && obj.secondNum !== 0) {
//   console.log(obj.firstNum * obj.secondNum);
// } else if (obj.firstNum === 0 && obj.secondNum === 0) {
//   console.log(false);
// } else if (obj.firstNum === 0 || obj.secondNum === 0) {
//   console.log(obj.firstNum + obj.secondNum);
// } else if (obj.secondNum === false) {
//   console.log(obj.firstNum + obj.secondNum);
// }

// //?task12
// const firstNum = 5;
// const secondNum = 4;
// const thirdNum = 20;
// if (firstNum > secondNum && firstNum > thirdNum) {
//   console.log(`Максимальное число ${firstNum}`);
// } else if (firstNum < secondNum && secondNum > thirdNum) {
//   console.log(`Максимальное число ${secondNum}`);
// } else if (firstNum < thirdNum && secondNum < thirdNum) {
//   console.log(`Максимальное число ${thirdNum}`);
// } else if (firstNum === secondNum && secondNum === thirdNum) {
//   console.log(`Числа равны`);
// }

// //?task13
// const firstNum = 12;
// const secondNum = 45;
// const age = 13;
// const sum = firstNum + secondNum;
// if (sum > age) {
//   console.log(`Сумма чисел ${sum} больше моего возраста ${age}`);
// } else if (sum < age) {
//   console.log(`Сумма чисел ${sum} меньше моего возраста ${age}`);
// }

// //?task 19
// const name = "Aya";
// const age = 24;
// if (typeof name === "string" && typeof age === "number") {
//   console.log("Все введено верно");
// } else {
//   console.log("Данные введены не верно");
// }

// //? task 25
// const month = 10;
// if (month === 12 || (month >= 1 && month < 3)) {
//   console.log("зима");
// } else if (month >= 3 && month < 6) {
//   console.log("весна");
// } else if (month >= 6 && month < 9) {
//   console.log("лето");
// } else if (month >= 9 && month < 11) {
//   console.log("осень");
// } else {
//   console.log("Число не верное");
// }

// //?task 26
// // что бы вышло две консольки
// let obj1 = { title: "Hello world" };
// let obj2 = { title: "Hello world" };
// if (obj1 === obj2) {
//   console.log("Объекты равны");
// } else if (obj1 !== obj2) {
//   console.log("Объекты не равны, т.к объект - ссылочный тип данных");
// }
// if (obj1.title == obj2.title) {
//   console.log("названия одинаковые");
// } else if (obj1.title != obj2.title) {
//   console.log("названия не одинаковые");
// }
