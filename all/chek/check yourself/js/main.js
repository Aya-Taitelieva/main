// todo Задание 1
// Создайте переменную arr, в которой хранится массив вида [1, "2", 3, "4", 5] Пройдитесь по всем элементам массива циклом, сложите их и выведите сумму в консоль.
// Важно: В массиве могут попадаться числа с типом данных string.
// let arr = [1, '2', 3, '4', 5];
// let sum = ;
// for (let i = 0; i < arr.length; i++) {
//   sum += +arr[i];
// }
// console.log(sum);
// todo Задание 2
// Создайте массив arr с именами пяти друзей. Используя цикл for или while и условный оператор, выведите в консоль только те имена, длина которых больше 5-и символов.
// let name = ["Aya", "Dana", "Sergey", "JIba", "Alina", "dfsnflsjkfna"];

// for (let i = 0; i < name.length; i++) {
//   if (name[i].length > 5) {
//     console.log(name[i]);
//   }
// }

// for (let elem of name) {
//   if (elem.length > 5) {
//     console.log(elem);
//   }
// }
// todo Задание 3
// Создайте строку str. Используя цикл, выведите в консоль только те символы, у которых четный индекс.
// Например, let str = 'Makers'
// Вывод:
// M
// k
// r
// let str = "Makers";
// for (let i = 0; i < str.length; i++) {
//   if (i % 2 === 0) {
//     console.log(str[i]);
//   }
// }
//или
// for (let i = 0; i < str.length; i += 2) {
//   console.log(str[i]);
// }
//или
// for (let elem of str) {
//   if (elem % 2 == 0) {
//     console.log(elem);
//   }
// }
// или по индексу
// for (let element in str) {
//   if (element % 2 == 0) {
//     console.log(element);
//   }
// }
// todo Задание 4
// Создайте переменные arr1 и arr2. Создайте новый массив, где каждое слово из первого массива слияется с соответствующим по порядку словом второго массива. Затем нужно вывести новый массив в console.log.
// Например, если arr1 = ['Makers','Java','Full'], а arr2 = ['KG', 'Script', 'Stack']
// То вывод будет:
// ['MakersKG','JavaScript','FullStack']

// let arr1 = ['Makers', 'Java', 'Full'];
// let arr2 = ['KG', 'Script', 'Stack'];
// let arr3 = [];
// for (let i = 0; i < arr1.length; i++) {
//   arr3.push(arr1[i] + arr2[i]);
// }
// console.log(arr3);
// todo Задание 5
// Создайте объект в переменной obj.
// С помощью цикла for ... in выведите в консоль строки следующего формата ключ - это значение.
// Если в переменной obj хранится такой объект:
// {
// 'Бишкек': 'Кыргызстан',
// 'Минск': 'Беларусь',
// 'Москва': 'Россия',
// 'Киев': 'Украина'
// }
// То ваш цикл должен вывести в консоль:
// Бишкек - это Кыргызстан
// Минск - это Беларусь
// ...
// let obj = {
//   Бишкек: 'Кыргызстан',
//   Минск: 'Беларусь',
//   Москва: 'Россия',
//   Киев: 'Украина',
// };
// for (let key in obj) {
//   console.log(`${key} - это ${obj[key]}`);
// }
