//An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:


/*
The following math operations are supported:

Addition +,
Subtraction -,
Multiplication *,
Division /,
Remainder %,
Exponentiation **.
*/

let x =1;

x =-x;
console.log(x);



console.log(6-'2'); // other than '+' all operators only work with numbers and thus they covert ant string form of number into number and perform operation

console.log("6"/"2");

//a unary operator coverts string form of number into number

let apples = "2";
let orange = "3";

let t =typeof apples;  //string 

// now use unary operator to persform any type of addition 
//But from a programmer’s standpoint, there’s nothing special: unary pluses are applied first, they convert strings to numbers, and then the binary plus sums them up.
console.log(+apples + +orange);


 /* ---------> Operator precedence<-----------*/

 //There are many operators in JavaScript. Every operator has a corresponding precedence number. The one with the larger number executes first. If the precedence is the same, the execution order is from left to right.


 //chained assignments

 let a, b, c;

 a = b = c = 2+2;

 console.log(`${a} ${b} ${c}`)

 //modify-in  place(modify-and-assign)

 let n = 2 ;
 n += 5;
 n *=2;

 console.log(n);

 //increment and decrement are only applicable to variables prefix and postfix


 /* <<<<<<<<<<Bit-wise Operators */

 let s= undefined +1 ;
 console.log(s);