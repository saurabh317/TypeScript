// Creating classes
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


// *******************access modifiers : public and private *************************
class Department {
  name : string;
  private employee : string[] = [];
  constructor(n: string) {
    this.name = n;
  }
  addEmployee(nameOfEmployee: string) {
    this.employee.push(nameOfEmployee)
  }
  printEmployees() {
    console.log(this.employee)
  }
  describe(this: Department) {
    console.log('the name of the department is:', this.name)

  }
}

const accounting = new Department('accounting');
//accounting.employee[0]= 'ana'// now we can't add employees like that because now employee array is only accessible within that class
accounting.addEmployee('ana')
//console.log(accounting.employee) // here we also can't console coz accessible within that class only
accounting.printEmployees()
// console.log(accounting);
accounting.describe();
