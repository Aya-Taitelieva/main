// let a = 5;
// let b = 6;
// console.log(a + b, "plus");
// console.log(a - b, "minus");
// console.log(a * b, "mul");
// console.log(a / b, "div");
// console.log(a ** b, "power");
// console.log(10 % 3, "ostatok"); //?остаток при делении
// console.log(10 % 100, "ostatok"); //остаток при делении. 10
//!-----------arifmetika so strokoi---------
// console.log("hello" + 10);
// console.log("101" - 10);
// console.log("101" * 10);
// console.log("101hj" * 10);
// console.log("101" / 10);
// console.log("101yu" / 10);
// console.log("101" % 10);
// console.log("101yu" / 10);
//!-------------превращает через унарный плюс в числа
// console.log(+"100"); //?вернеит 100 number
// console.log(+"100h"); //NaN
// console.log(+"true"); //вернет 1, фалс 0
// console.log(+"null"); //вернет 0
// console.log(+"undefined"); //вернет NaN

// console.log(parseInt("100")); //?100 number
// console.log(parseInt("100h1564")); //100 number
// console.log(parseInt("f100h1564")); //NaN
// console.log(parseInt("5.5")); //5    парсИнт вчтречает любой символ и уходит

// console.log(parseFloat(3.1)); //?вернул 3,1, number используем при дробных числах
// console.log(parseFloat(3.hfd1)); //?вернул 3, number используем при дробных числах
// console.log(parseFloat(3.1464fd)); //?вернул 3,1464, number используем при дробных числах
// console.log(parseFloat(d3.1464fd)); //?вернул NaN используем при дробных числах

// console.log(Boolean("qwerty")); //? true
// console.log(Boolean("")); //? false
// console.log(Boolean(" ")); //? true

// console.log(Boolean(-100)); //? true
// console.log(Boolean(5)); //? true
// console.log(Boolean(0)); //? false

// console.log(Boolean(null)); //? false
// console.log(Boolean(undefined)); //? false

// console.log(Boolean({})); //?true
// console.log(Boolean([])); //?true

// console.log(Boolean(NaN)); //? false

//!---------------ложные значения------------
// ""
// 0
// NaN
// null
// undefined
// false
//!-----------alert/prompt/confirm-------------
// alert("hello world"); //?выводит смс в модальном окне, блокирует код

// let result = prompt("how old r u?"); // берет данные у пользователя
// let name = prompt("what is u name?"); // берет данные у пользователя
// console.log(`Hello ${name}!`);

// let ans = prompt("Enter num");
// console.log(ans); //?при нажатии на cancel возвратит null. всегда позвращает строку string

// let answer = confirm("are u 18 year old?"); //?возвращает только булевый тип данный тру\фалс
// console.log(answer);

let num = +prompt("Enter num"); //+ или -  ставим когда мы запращиваем число, переводим из строчки в число

console.log(+num + 10);
// console.log(parseInt(num) + 10);
