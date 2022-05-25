"use strict";

/**
 * 
 */


//Урок 2




//Задание 1

//пример 1 
let a = 1, b = 1, c, d;
c = ++a;
alert(c); // ответ: 2 
/* унарный плюс добавляет 1, а  префиксная форма ++а увеличивает переменную с и возвращает новое значение */


//пример 2 
d = b++;
alert(d); //ответ: 1 
/* унарный плюс добавляет 1, постфиксная форма b++ увеличивает переменную b, но не возвращает новое значение, поэтому d == 1 */



//пример 3 
c = 2 + ++a;
alert(c); //ответ: 5
/* переменная a == 2 (в примере 1 увеличилась на 1), в данном примере она увеличилась еще на 1 (унарный плюс), префиксная форма ++а увеличивает переменную на 1 и возвращает новое значение, поэтому с == 2 + 2 + 1*/


//пример 4 
d = 2 + b++;

alert(d); //ответ: 4
/* переменная b == 2. В примере 1 ей присвоено значение 1, в примере 2 ей добавилась 1 (там не возвращалось). В данном примере 1 добавляется, но не возвращается. Итого: 2 + 1 + 1*/


alert(a); //3
/* переменная a == 3 (в примере 1 ей присвоено значение 1, потом она увеличилась еще на 1), в  примере 3 она увеличилась еще на 1 (унарный плюс префиксная форма ++а) */

alert(b); //3
/* переменная b == 3. В примере 1 ей присвоено значение 1, в примере 2 ей добавилась 1 (там не возвращалось), потом она увеличилась еще на 1 в примере 4 (там тоже не возвращалось). Итого: 1 + 1 + 1 */




//Задание 2

let y = 2;
let x = 1 + (y *= 2);

/*     y *= 2 можно записать как y == y * 2, т.е. 2 * 2  равно 4.
1 + 4 == 5.
let x == 5*/



//Задание 3

let e = Number(parseInt(prompt("Введите первое целое число")));
let k = Number(parseInt(prompt("Введите второе целое число")));

if (e >= 0 && k >= 0) {
	let difference = (e - k);
	alert("Разность чисел равна: " + difference);

} else if (e < 0 && k < 0) {
	let multiplication = (e * k);
	alert("Произведение чисел равно: " + multiplication);

} else if (e < 0 && k > 0 || e > 0 && k < 0) {
	let sum = (e + k);
	alert("Сумма чисел равна: " + sum);
}






// Задание 4
/**
 * функция складывает два числа
 * @param {number} num1 
 * @param {number} num2 
 * @returns {number}
 */

function calcAdd(num1 = 1, num2 = 5) {
	return num1 + num2;
}

let sum = calcAdd();
alert(sum);



/**
 * функция вычитания
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function calcSubtract(num1 = 1, num2 = 5) {
	return num1 - num2;
}

let difference = calcSubtract();
alert(difference);



/**
 * функция умножения
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function calcMultiply(num1, num2) {
	return num1 * num2;
}

let multiplication = calcMultiply(5, 6);
alert(multiplication);


/**
 * функция деления
 * @param {*} num1 
 * @param {*} num2 
 * @returns 
 */
function calcDivide(num1, num2) {
	return num1 / num2;
}

let division = calcDivide(7, 6);
alert(division);

