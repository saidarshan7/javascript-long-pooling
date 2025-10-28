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


//there are two types of exports named exports and default exports
//named exports for multiple exports 
//and default exports for single export so you can avoid using curly braces

/*
Why export default exist ?

5. Why it exists

Because most real-world projects organize code as:

One class per file

One utility function per file

One React component per file

Using export default makes that convention look clean and natural.


1. What export default really means

export default doesn’t mean “you can only export one thing in total.”
It simply means:

“This is the main thing being exported from this module.”

You can still export other things alongside it — they just won’t be the default.
*/

function sayHi(user) {
  console.log(`hii ${user}!!`);
}

function sayBye(user){
  console.log(`bye bye ${user}!!`)
}

export{months,sayBye,sayHi};