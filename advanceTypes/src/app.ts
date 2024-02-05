// ***************intersection type *****************
type obj1 = {
  name: string;
  age: number;
}

type obj2 = {
  lastName: string;
  houseNo: number;
}

type obj3 = obj1 & obj2 // here & is the intersection type 
const bioData: obj3 = {
  name: "murthy",
  age: 34,
  lastName: "swamy",
  houseNo: 314
}
console.log(bioData)