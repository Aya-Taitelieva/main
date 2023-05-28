// //?task 8
// const arr = ["Apple", "Orange", "Banana", "Pineapple", "Cherry"];
// const newSort = arr.sort((a, b) => b.length - a.length);
// console.log(newSort[0]);
// console.log(newSort);

// //?task 10
// //todo Создайте переменную arr, в которой масс ив ['Джаз', 'Блюз']

// let arr = ['Джаз', 'Блюз'];
// Массив изменяйте с помощью методов массива, таких как push, shift, splice, unshift. Давайте проведём 6 операций с массивом:

// Добавьте строку 'Рок-н-ролл' в конец массива arr:
// ['Джаз', 'Блюз', 'Рок-н-ролл']
// Замените значение в середине на «Классика». Ваш код для поиска значения в середине должен работать для массивов с любой длиной:
// ['Джаз', 'Классика', 'Рок-н-ролл']
// Удалите первый элемент массива и покажите его.
// ['Классика', 'Рок-н-ролл']
// Джаз
// Вставьте «Рэп» и «Регги» в начало массива.
// ['Рэп', 'Регги', 'Классика', 'Рок-н-ролл']
// Выведите результат в консоль.
// ВАЖНО! Очистите код от лишних console.log() если они не требуются по условию задания.

// const arr = ["Джаз", "Блюз"];
// arr.push("Рок-н-ролл");
// arr.splice(arr.length / 2, 1, "Классика");
// const delated = arr.shift();
// console.log(delated);
// arr.unshift("Рэп", "Регги");
// console.log(arr);

// //?втророй метод

//? task 11
// const arr = ["Life", "is", "hard"];
// arr.splice(2, 1, "good");
// console.log(arr);

//? Задание №1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
// const arr = ['dlrow', 'olleH'];
// const res = arr.join(' ,').split('').reverse().join('').split(" ");
// console.log(res);

//или

// const arr = ['dlrow', 'olleH'];
// const arr1 = arr.join(' ,');
// const arr2 = arr1.split('');
// const arr3 = arr2.reverse();
// const arr4 = arr3.join('');
// const arr5 = arr4.split(' ' );
// console.log(arr5);

// ? Задание №3
// Дан массив ["Apple", "Orange", "Pinapple", "Cherry"]. Удалите сначала первый элемент "Apple" и этот же элемент подставтье после "Pineapple".
// const fruits = ["Apple", "Orange", "Pinapple", "Cherry"];
// const deleted = fruits.shift();
// fruits.splice(2, 0, deleted);
// console.log(fruits);

//? task 13
// const arr =  ["один","два","три","четыре"];
// const newArrs = arr.splice(0,1)[0]
// arr.push(newArrs)
// console.log(arr)

//?task 15
// const arr = [11, 4, 6];
// const arr2 = arr.slice(0, 1)[0];
// const arr3 = arr.slice(1, 2)[0];
// const raz = arr2 - arr3;
// arr.push(raz);
// console.log(arr);

//?task 23
// let arr = [1, 2, 3, 4, 5];
// arr.splice(0,2);
// console.log(arr)
//? правильное решение
// let arr = [1, 2, 3, 4, 5];
// const deletedItems = arr.splice(2);
// console.log(deletedItems);

//todo task 24
// let arr = [1, 2, 3, 4, 5];
// let arr2 = arr.slice(arr.length-2, arr.length)
// console.log(arr2)
//? второй вариант
// arr = [1, 2, 3, 4, 5];
// let arr2 = arr.slice(-2);
// console.log(arr2);

//todo task26
// const arr = ["programming", "code", "javascript", "react"];
// const newArr = arr.split(" ");
// const first = newArr[0].toupperCase();
// const res = [...newArr];
// res.splice(0, 1);
// const result = [first, ...res].join("");
// console.log(result);
