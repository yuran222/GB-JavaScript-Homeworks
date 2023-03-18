// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число

for (let i = 0; i < 11; i++) {
    if (i == 0) {
        console.log (`${i} - это ноль`);}
    else if (i%2 == 0) {
        console.log (`${i} - это четное число`);}
    else {
        console.log (`${i} - это нечетное число`);}
    }

// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]

const array = [1, 2, 3, 4, 5, 6, 7];
array.splice(3, 2);
console.log (array);

// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов

const arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * (10)));
}
console.log(`Массив из рандомных чисел от 1 до 9 = [ ${arr} ]`);

// 2. Найти минимальное число
const minNum = Math.min(...arr);
console.log(`Минимальное значение массива = ${minNum}`); 

// 1. Рассчитать сумму элементов этого массива

function Sum(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    console.log(`сумма элементов массива = ${sum}`);
}

Sum(arr);

// 3. Найти есть ли в этом массиве число 3

function Find3(arr) {
    for (let i = 0; i < array.length; i++) {
        if (arr[i] == 3) {
            return true;
        }
    }
}

if (Find3(arr) == true) {
    console.log('Да, в массиве тройка');
    } else console.log('В массиве тройки нет');

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

// x
// xx
// xxx
// xxxx
// xxxxx

let x_string = "x"

for (let i = 0; i < 21; i++) {
    console.log(x_string);
    x_string = x_string + "x";
}
