// Задание 1
// Создайте функцию которая возводит переданное число в куб, необходимо вывести в консоль результат 2^3 степени + 3 ^ 3 степени

// let number = +prompt("введите ваше число");

// function Cube (num) {
//    return num*num*num }
// alert(`квадрат числа равен ${Cube(number)}`);

// Задание 2
// Пользователь вводит с клавиатуры число, если ввёл текст, необходимо вывести что значение задано неверно
// Создать фукнцию, которая высчитывает 13% от данного числа и выводит в консоль текст "Размер заработной платы за вычетом налогов равен значение"

// let num = prompt("введите вашу зарплату");
// console.log(typeof num);

// function Tax (salary) {
//     alert(`Зарплата за вычетом налога равна: ${salary*0.87}`);
// }

// (isNaN(num)) ? alert("это не число") : Tax(num);


// Задание 3
// Пользователь с клавиатуры вводит 3 числа, необходимо создать функцию, которая определяет максимальное значение среди этих чисел.

// let num1 = prompt("введите первое число");
// let num2 = prompt("введите второе число");
// let num3 = prompt("введите третье число");

// function Max_number(number1, number2, number3) {
//     let max_number = 0; 
//     if (number1 > number2) {
//         (number1 > number3) ? max_number = number1 : max_number = number3;  
//     } else {
//         (number2 > number3) ? max_number = number2 : max_number = number3; 
//     }
//     return max_number;  
// }

// alert(`максимальне число ${Max_number(num1,num2,num3)}` )

// Задание 4
// Необходимо реализовать четыре функции, каждая функция должна принимать по два числа и выполнять одну из операций (каждая функция выполняет одну из них):
// 1. Сложение
// 2. Разность
// 3. Умножение
// 4. Деление
// Необходимо сделать так, чтобы функция вернула число, например выражение console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция сложения в данном примере, ваши названия функций могут отличаться). Округлять значения, которые возвращают функции не нужно, однако, обратите внимание на разность, функция должна вычесть из большего числа меньшее, либо вернуть 0, если числа равны. Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать не нужно.

function plus(num1,num2) {
    console.log(num1+num2);
}

function minus(num1,num2) {
   (num1 >= num2) ? console.log(num1-num2) : console.log(num2-num1);
}

function multiplication(num1,num2) {
    console.log(num1*num2);
}

function division(num1,num2) {
    console.log(num1/num2);
}

let number1 = +prompt("введите первое число");
let number2 = +prompt("введите второе число");

plus(number1, number2);
minus(number1, number2);
multiplication(number1, number2);
division(number1, number2);