"use strict";

/*
Необходимо попросить пользователя ввести три числа.
Необходимо создать функцию, в которую мы должны передать эти три числа.
Функция должна определить максимальное, среди переданных ей значение и 
вывести сообщение: "Максимальное значение среди чисел N1, N2, N3 равно N."

Примечание: Условимся, что пользователь всегда вводит корректные значения, 
три числа. Проверять их не нужно.
*/

const num1 = Number(prompt('Введите первое число'));
const num2 = Number(prompt('Введите второе число'));
const num3 = Number(prompt('Введите третье число'));

/**
 * Функция вычисляет максимальное значение из трех чисел
 * @param {number} num1 число
 * @param {number} num2 число
 * @param {number} num3 число
 * @returns {number} результат
 */
function max(num1, num2, num3) {
    return Math.max(num1, num2, num3);

    // if (num1 > num2 && num1 > num3) {
    //     return num1;
    // } else if (num2 > num1 && num2 > num3) {
    //     return num2;
    // } else {
    //     return num3;
    // }
}

const res = max(num1, num2, num3);
console.log(`Максимальное значение среди чисел ${num1}, ${num2}, ${num3} равно ${res}`);

