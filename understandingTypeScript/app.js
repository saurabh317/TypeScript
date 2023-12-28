// ***************OBJECT*****************
// const person = {
//   name: "saurabh",
//   age: 23
// };
// console.log(person.name, typeof(person));
// const person: { // here this new object assignment where we mentioned the types
//   name: string; // is basically same as assigning "object" keyword
//   age: number;
// } = {
//   name: "saurabh",
//   age: 23
// };
// //in ts object types contains key and type pairs unlike js where we have key and value pair. 
// console.log(person.name);
// ******************ARRAY********************
// const person = {
//   name: "saurabh",
//   age: 23,
//   hobbies: ["dancing", "cooking"] // here this array is of string type
// };
// // as here the hobbies is an array of string type so we can also use string methods on each element of the hobbies
// for(const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase())
// }
//*******************TUPLES*********************
// if we know the type of values to be stored in array and also the length of the array then tupples can be very handy 
// for adding more strictness
var details = ["manager", 25000]; // here ts is not sure the type so its inference type is either string or number
var detailsArray; // so we can do something like that (this is tuple) so now we cannot assign any thhing other than string to the arr[0]
detailsArray = ["manager", 3];
console.log(detailsArray);
