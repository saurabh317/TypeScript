// *************************Creating classes****************************
// class Department {
//   name : string;
//   employee : string[] = [];
//   constructor(n: string) {
//     this.name = n;
//   }
//   describe(this: Department) {
//     console.log('the name of the department is:', this.name)

//   }
// }

// const accounting = new Department('accounting');
// accounting.employee[0]= 'ana'
// console.log(accounting.employee)
// // console.log(accounting);
// accounting.describe();  


// // *******************access modifiers : public and private *************************
// //note if a variable is defined private , it will not be accesible even if that class is being inherited
// //but if it is defined with protected , we can still access that inside the child class
// //getters and setters are used to get and set the properties if a class in other inherited class that are private
// class Department {
//   name : string;
//   private employee : string[] = [];
//   constructor(n: string) {
//     this.name = n;
//   }
//   addEmployee(nameOfEmployee: string) {
//     this.employee.push(nameOfEmployee)
//   }
//   printEmployees() {
//     console.log(this.employee)
//   }
//   describe(this: Department) {
//     console.log('the name of the department is:', this.name)

//   }
// }

// const accounting = new Department('accounting');
// //accounting.employee[0]= 'ana'// now we can't add employees like that because now employee array is only accessible within that class
// accounting.addEmployee('ana')
// //console.log(accounting.employee) // here we also can't console coz accessible within that class only
// accounting.printEmployees()
// // console.log(accounting);
// accounting.describe();



// // ***********************INHERITANCE**************************
//  abstract class Vehicles { //abstract classes are build only for being inherited
//   color: string;
//   noOftyres: number;
//   model: string;
//   static locations = ["rrNagar", "jpNagar", "jayaNagar"] // static variables are properties of a class not object

//   constructor (color: string, noOftyres: number, model: string) {
//     this.color = color;
//     this.noOftyres = noOftyres;
//     this.model = model;
//   }

//   static bookTestDrive (userLocation: any) { // to use a static varible we have to make a static method
//     const available = Vehicles.locations.findIndex((e) => e === userLocation)
//     if (available > 0) {
//       console.log(`yes You can book a test drive at our branch in ${userLocation}` )
//     } else {
//       console.log("sorry for the inconvinence but we don't have branch at your location")
//     }
//   }

//   abstract extraFeatures (): void; //abstract methods are the methods with nothing inside them but it becomes
//   //mandatory to the classes to define these functions who ever is extending the class having abstract methods

// }

// class SuperCars extends Vehicles {
//   speed: number;

//   constructor (color: string, noOftyres: number, model: string, speed: number) {
//     super(color, noOftyres, model)
//     this.speed = speed
//   }

//   extraFeatures(): string {
//     return ("it can transform to a robot")
//   }
// }

// const superCar1 = new SuperCars('black', 4, 'xcc1', 350)
// console.log(superCar1.extraFeatures())
// SuperCars.bookTestDrive('jpNagar')


// //*********************INTERFACE***********************/
// //Interface defines the structure of an object that is how an object should look like
// // interface are similar like obj type, where we used to define the structure of the obj but we can't use union type 
// //in interface

// interface student {
//   name: string;
//   id: number;
// }
// interface teacher extends student{
//   introduction () : void
// }

// class SchoolMember implements teacher {
//   name: string;
//   id: number;

//   constructor (name: string, id: number) {
//     this.name = name;
//     this.id = id;
//   }

//   introduction(): void {
//       console.log(`Hi I am ${this.name}`)
//   }

// }

// const obj = new SchoolMember("aman", 45)
// console.log(obj)

