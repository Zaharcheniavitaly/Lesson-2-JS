



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


