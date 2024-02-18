//**********creating our first decorators************/
//decorators are the functions that can be attached to a class, or values, methods inside a class
//but the thing is having class is must

// function Logger (msg: string) {// basically this is a decorators factory
//   return function (constructor: Function) {// thi is the actual decorator
//     console.log("logging..............")
//     console.log(msg)
//     console.log(constructor)
//   }
// }

// @Logger("hi i am the custom msg")//here we are usging the decorators factory so we have to call that function
// class Person {//if not using the decorators factory then we just need to paas the reference of the decorator
//   name = "max"
//   constructor() {
//     console.log("object is initialised")
//   }

// }

// // const pers = new Person()
// // console.log(pers)

//*********************creating more meaningfull decorator******************/
//so as we learnt above that we can pass arguments to decorators using decorators factories
//we can pass anything , even the html tags along

function Logger (template: string , hookId: string) {
  return function (constructor: any) {
    const htmlElement = document.getElementById(hookId)!
    htmlElement.innerHTML = template
    const p = new constructor();
    htmlElement.querySelector('h1')!.textContent = p.name
  }
}

function Logger2 (target: any, name: string | symbol) {
  console.log("decorator attached to the value is running")
  console.log(target, name)
}//so here the thing is we can add decorators anywhere inside class but it will be having different arguments


@Logger("<h1>This is the person object</h1>", "app")
class Person {
  @Logger2
  name = "max"
  constructor() {
    console.log("object is initialised")
  }

}

// const pers = new Person()
// console.log(pers)

//we can add decorators at various places , not only the classes,,,we will provide decorators at the various places
//like adding it to a method, adding it to the argrments of the method , adding it to the values inside the class

// NOTE:---- WHEN THE DECORATOR GETS EXECUTED???
// decorators are executed when the class is defined (if it is attached to a class)
//or it will be executed as soon as the thing with whome they are attached will be defined

