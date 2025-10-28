//export and import in javascript


// // export an array
let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// // export a constant
// export const MODULES_BECAME_STANDARD_YEAR = 2015;

// // export a class
// export class User {
//   constructor(name) {
//     this.name = name;
//   }
// }

function sayHi() {
  console.log("hello sir");
}

function sayBye(){
  console.log("bye bye")
}

export{months,sayBye,sayHi};