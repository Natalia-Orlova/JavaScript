"use strict";

/*
Создайте функцию которая принимает число, возводит переданное число в куб и 
возвращает полученное значение. 
Необходимо продемонстрировать вызов данной функции, с выводом результата, 
который получаем от функции, в консоль.
*/

/**
 * Функция возводит число в куб
 * @param {number} number число
 * @returns результат
 */
function cube(number) {
    return number ** 3;
}

const number = 5;
console.log(`Число ${number} в 3 степени = ${cube(number)}`);

// const cube = (number) => number ** 3;
// console.log(cube(5));