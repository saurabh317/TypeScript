// ***************intersection type *****************
// type obj1 = {
//   name: string;
//   age: number;
// }

// type obj2 = {
//   lastName: string;
//   houseNo: number;
// }

// type obj3 = obj1 & obj2 // here & is the intersection type 
// const bioData: obj3 = {
//   name: "murthy",
//   age: 34,
//   lastName: "swamy",
//   houseNo: 314
// }
// console.log(bioData)

// ***************DISCRIMINATIVE UNION************************

// interface Bird {
//   type: 'bird';
//   flyingSpeed: number;
// }
// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse

// const moveAnimal = (animal: Animal) => {
//   switch (animal.type) {
//     case "bird" :
//       console.log("speed of the animal is "+animal.flyingSpeed);
//       break;
//     case "horse" :
//       console.log("speed of the animal is "+animal.runningSpeed);
//       break;
//     default:
//       console.log("enter a valid animal data")
//   }
// }

// moveAnimal({type: 'horse', runningSpeed: 40})

//***************TYPE CASTING***********************/

// const paragraphInputElement = document.getElementById('para')
// ///note: certainly we can do something like this which means it is an html element but not sure which element??
// //so here type casting came into the play where we can tell that which html element we gonna store in it
// // suppose here we are having an input tag and we want to acccess the value within it
// const input = <HTMLInputElement>document.getElementById('input') //or 
// const input2 = document.getElementById('input') as HTMLInputElement
// const inputValue = input.value;
// input2.value

//***********************INDEX PROPERTY*****************/
//THIS allows to create objects with flexibility regarding the property they holds
//useCase: suppose we want to catch errors in differnt input fields either email or username,,so here inthis case
// we can't be more specific with the key and value to be stores inside the object,, here comes index property
// interface outputError {// email: "this is not a valid email ", username: "should include numbers too"
//   [key: string]: string // so here we are saying that atleast we will have a object and value and in this case both will of type string
// }

// const errorBag : outputError = {
//   email : "this is not a valid email"
// }

//*************FUNCTION OVERLOADING****************** */

// function add (a: string, b: string) : string;
// function add (a: number, b: number) : number;
// function add (a: number | string, b: number | string) : number | string{
//   if (typeof a === "number" && typeof b === "number") {
//     return a+b
//   }
//   return a.toString() + b.toString()
// }
// const store = add("hi", "ok")
// store.toUpperCase()
// const storeNum = add(8, 7)
// //so here if we don't do function overloading then the typescript does know about the output type
// //coz there in function we stated that we can pass parameters of both the types number and string, so the type of output
// //will also be both number | string so we can't use any methods specific to the string even if we pass both the
// //parameters as string type


