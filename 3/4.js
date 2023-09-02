"use strict";

/*
Необходимо реализовать четыре функции, каждая функция должна принимать по два
числа и выполнять одну из операций (каждая функция выполняет одну из них):
1. Сложение
2. Разность
3. Умножение
4. Деление
Необходимо сделать так, чтобы функция вернула число, например выражение
console.log(sum(2, 6)); должно вывести число 8 в консоль (sum - функция
сложения в данном примере, ваши названия функций могут отличаться).
Округлять значения, которые возвращают функции не нужно, однако, обратите
внимание на разность, функция должна вычесть из большего числа меньшее, либо
вернуть 0, если числа равны.
Функциям всегда передаются корректные числа, проверки на NaN, Infinity делать
не нужно.
Демонстрировать работы функций не обязательно.
*/

const number1 = +(prompt('Введите первое число'));
const number2 = +(prompt('Введите второе число'));

/**
 * Функция суммирует два числа
 * @param {number} number1 число
 * @param {number} number2 число
 * @returns результат
 */
const sum = (number1, number2) => number1 + number2;

/**
 * Функция перемножает два числа
 * @param {number} number1 число
 * @param {number} number2 число
 * @returns результат
 */
const multiply = (number1, number2) => number1 * number2;

/**
 * Функция вычисляет частное двух чисел
 * @param {number} number1 число
 * @param {number} number2 число
 * @returns результат
 */
const divide = (number1, number2) => number1 / number2;

/**
 * Функция вычитает из большего числа меньшее
 * @param {number} number1 число
 * @param {number} number2 число
 * @returns результат
 */
const diff = (number1, number2) => {
    if (number1 > number2) {
        return number1 - number2;
    } else if (number2 > number1) {
        return number2 - number1;
    } else {
        return 0;
    }
}

console.log(`${number1} + ${number2} = ${sum(number1, number2)}`);
console.log(`${number1} * ${number2} = ${multiply(number1, number2)}`);
console.log(`${number1} / ${number2} = ${divide(number1, number2)}`);
const maxNumber = Math.max(number1,number2);
const minNumber = Math.min(number1, number2);
console.log(`${maxNumber} - ${minNumber} = ${diff(number1, number2)}`);
