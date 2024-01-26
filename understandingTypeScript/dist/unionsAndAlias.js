"use strict";
// //*****************UNIONS*******************/
// // IT is very helpful while we want to set type of a variable or a parameter to more than one type e.g number or string
// function add (num1: numberString, num2: numberString) {
//   let result: any;
//   if (typeof(num1) === 'number' && typeof(num2) === "number") {
//     result = num1+num2;
//     return result;
//   } else {
//     result = num1.toString() + num2.toString();
//     return result
//   }
// }
// const number1 = 5;
// const number2 = 8;
// console.log(add(+number1, +number2));
// const firstName = "Saurabh";
// const lastName = "Pandey";
// console.log(add(firstName, lastName));
// //*********************Type alias**************** */
// //it increases the code readablity, we can assign our unions to this see the example above
// type numberString = number | string
// let a : string;
// a = "aman";
// console.log(a);
//# sourceMappingURL=unionsAndAlias.js.map