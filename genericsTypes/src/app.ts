// generics are the ts feature that allows us to pass in various types of data and create reusable code to handle
// different inputs

// const arr : string[] = ["mac", "maxi"]// basically this is an arr of strings
// const arr1 : Array<string> = ["rony","rohit"]// this is same as above syntax

// const promise: Promise<string> = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve('i am done')
//   }, 2000);
// })//here we used the generic type in promises coz further we wanted to do some operations on the output that we'll get
// // once the promise will get resolve,, so here we made ts aware abt the type of data that will be returned..

// promise.then((res) => {
//   console.log(res.split(""))
// }) // here once we made a generic type with string we w'll only be able to use string functions on the output

//*****************creating a genric function****************/
// const objectMerger = (a: object, b: object) => {
//   return Object.assign(a, b)
// }

// const finalObject = objectMerger({name:"sagar"}, {age: 24})
// finalObject.name //here we can't acces the name property even though the object that we got on merging has this property
//becoz we are giving the argument of two unknown objects and the function is returning another unknown object 
//to make this function generic

// const objectMerger1 = <T, U> (a: T, b: U): T & U  => Object.assign({}, a, b)

// const finalObject1 = objectMerger1({name:"sagar"}, {age: 24})
// console.log(finalObject1, finalObject1.name)


// **************************WORKING WITH CONSTRAINTS*************************
// //create a generic function that takes any argument having length property on it and returns the length of that with a discription
// interface lengthy {
//   length: number
// }
// // note : here we are working with constraints and this extends keywords represents that
// // here not sure abt the type but we are sure that whatever the type will be , it will have the length property on it
// function checkLength<T extends lengthy> (element: T) {
//   let discription = "length of the element is " + element.length
//   return [element, discription]
// }

// console.log(checkLength(["aman", "sagar"]))

//create a genric function which will take an object and key of that object to print the value of that obj
// ***********************keyof CONSTRAINT*****************************

// function returnKeyValue<T extends object , U extends keyof T> (obj: T, key: U) {
//   return obj[key]
// }

// console.log(returnKeyValue({name: "faith"}, 'name'))

//************************CREATING GENERIC CLASS*************************/

// class DataStorage<T> {
//   private data: T[] = []
//   constructor(data: T[]){
//     this.data = data
//   }

//   addData(newData: T){
//     this.data.push(newData)
//   }

//   removeData(dataToRemove: T){
//     const index = this.data.findIndex((e) => e===dataToRemove)
//     if (index!== -1) {
//       this.data.splice(index, 1)
//     }
//   }

//   getData(){
//     return [...this.data]
//   }

// }

// const storeNumber = new DataStorage([5,7])
// storeNumber.addData(1)
// storeNumber.removeData(5)
// console.log(storeNumber.getData())


//****************UTILITY TYPES******************
//1--- Partial:- suppose we are having an object or interface having some property and that object we want to set as type of another obj
// but here there is a problem, if the set the first object as the type of other then the new object must also contain all the properties
// of the previous obj unless ts will not accept so to make these situation work we use partial generic type
//2--- Readonly:- as the name suggest we we set any array or obj to Readonly we can't manipulate that.

// interface course {
//   title: string;
//   description: string;
//   date: Date
// }

// function setCourseGoal (title: string, description: string, date: Date): course {
//   // return {
//   //   title, description, date
//   // }
//   let duplicateCourseGoal: Partial<course> = {}
//   duplicateCourseGoal.title = title
//   duplicateCourseGoal.description = description
//   duplicateCourseGoal.date = date
//   return duplicateCourseGoal as course

// }

// console.log(setCourseGoal("react", "i have to complete this month", new Date(2024,1,18)))

// let assignments : Readonly<string[]> = ['sana','subham']//we cannot mutate this array as this is readonly
