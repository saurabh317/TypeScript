//***************unknown type*****************
var userInput; // we don't know that which value we will be storing
userInput = "joel";
console.log(userInput);
//**************never type*******************
//it states that a function will never return anything
function generateError(msg) {
    throw { message: msg };
}
console.log(generateError("request failed"));
