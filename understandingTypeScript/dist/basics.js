"use strict";
function add(num1, num2, showResult, phrase) {
    if (showResult) {
        console.log(phrase + (num1 + num2));
    }
    return num1 + num2;
}
const number1 = "5";
const number2 = 8;
const printResult = true;
const printPhrase = "Result is : ";
add(+number1, +number2, printResult, printPhrase);
//# sourceMappingURL=basics.js.map