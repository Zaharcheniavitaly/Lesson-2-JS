"use strict"

//Задание 5 (посмотрел, сам не сделал!!!!!!)



/**
 * функция складывает два числа
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */

function calcAdd(num1, num2) {
	return num1 + num2;
}



/**
 * функция вычитания
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function calcSubtract(num1, num2) {
	return num1 - num2;
}


/**
 * функция умножения
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function calcMultiply(num1, num2) {
	return num1 * num2;
}



/**
 * функция деления
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function calcDivide(num1, num2) {
	return num1 / num2;
}

/**
 * функция получает два числа (используя функцию задания 4) и осуществляет над ними матем. опрауию
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation 
 * @returns 
 */

function mathOperation(arg1, arg2, operation) {
	switch (operation) {
		case "+":
			return calcAdd(arg1, arg2);

		case "-":
			return calcSubtract(arg1, arg2);

		case "*":
			return calcMultiply(arg1, arg2);

		case "/":
			return calcDivide(arg1, arg2);
		default:
			throw new Error("Операция " + operation + "не предусмотрена");
	}
}

console.log(mathOperation(6, 3, "+"));
console.log(mathOperation(6, 3, "-"));
console.log(mathOperation(6, 3, "*"));
console.log(mathOperation(6, 3, "/"));
console.log(mathOperation(6, 3, "|"));
