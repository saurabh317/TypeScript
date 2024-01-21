// ******************function***********************
//as we have type inference with variables in the same way we have with functions too
// function add (num1: string , num2: number) : string {
//   return num1 + num2
// }

// console.log(add ("sagar", 23))


// ****************void return type***************
// if we are not returning anything then we have the type void
// function print (num : string | number): void { // here the type is void 
//   console.log(num)
// }
// print(add ("sagar", 23))


//**************function type*******************
//  let combine : Function // so here we can be more strict by telling the type of function
//  combine = add // or the structure of function
//  console.log(combine("aman", 20))
// let combine : (a: string , b : number) => string; // this means combine will be assigned to a function which accepts two parameters 
// combine = add // and returns a string value
// console.log(combine("aman", 20));

//passing a callback to a function
// callback functions can return something, even if the argument on which they're passed does NOT expect a returned value.
// function sendRequest(data: string, cb: (response: any) => void) {
//   // ... sending a request with "data"
//   return cb({data: 'Hi there!'});
// }
 
// sendRequest('Send this!', (response) => { 
//   console.log(response);
//   return true;
//  });