/*
There is another syntax for creating a function that is called a Function Expression.

It allows us to create a new function in the middle of any expression.
*/

// sayHello(); //this hoisting , before any code is compiled the functions and varibales are hoisted (declarations of variables and functions are moved to the top of their scope before code execution)


// function sayHello(){
//     console.log("hello")
// }

//Function Expression

// let sayHi = function() {
//     console.log("sayHello, sai")
// }


// c=7; //'let' variable can be declared but not initialized 

// let c;

// console.log(c)


//Function is a value :
   //We can copy a function to another variable:

function sayHi() {
    console.log("hello");
}

let func = sayHi; 

//if this was initilized with parenthesis then the function return will be stored in func variable


func();
sayHi();

console.log(sayHi);




//CallBack Functions: a function passed as an argument to another function, intended to be executed later

//passing function as values means we are passing functions as arguments


function ask(question,yes,no){ //functions are copied
    if(question) yes()
    else no();
}

function showYes() {
    console.log("hey this is, Yes");
}

function showNo() {
    console.log("No");
}

ask(true,showYes,showNo) //here functions are passeed as arguments and treated as values 


/*
What is function expression ?
a function which is stored in variable or pass it directly to another function(call back function)
*/

function ask1(question, yes, no){
    if(question) yes()
    else no();
}

ask1(
    "Do you agree?",
    function() {console.log("you agreed.")},
    function() {console.log("you cancelled the execution.")}
);

/*
Here, functions are declared right inside the ask(...) call. They have no name, and so are called anonymous. Such functions are not accessible outside of ask (because they are not assigned to variables), but that’s just what we want here.


*/


//a variable represents a Data and a function represents Action


let nam = function (){return "darshan"};


let fullName = "sai" + nam();

console.log(fullName);

/*
The Main Diff. between Function Declaration and Function Expression:

A Function Expression is created when the execution reaches it and is usable only from that moment.

Once the execution flow passes to the right side of the assignment let sum = function… – here we go, the function is created and can be used (assigned, called, etc. ) from now on.

Function Declarations are different.

A Function Declaration can be called earlier than it is defined.

For example, a global Function Declaration is visible in the whole script, no matter where it is.

That’s due to internal algorithms. When JavaScript prepares to run the script, it first looks for global Function Declarations in it and creates the functions. We can think of it as an “initialization stage”.

And after all Function Declarations are processed, the code is executed. So it has access to these functions.


*/

//function expression can be accessed outside the code Block

// let age = 8;

// let welcome;

// if(age<18) {
//     welcome = function() {console.log("you are allowed")};
// }else {
//     welcome = function() {console.log("you are NOT allowed")};
// }

// welcome();


// more simple way to represent the above value


let age = 18 ;

let welcome = (age<= 18) ?
function() {console.log("hello!!");} :
function() {console.log("Greetings!");};

welcome();

/*
When to choose Function Declaration versus Function Expression?
As a rule of thumb, when we need to declare a function, the first thing to consider is Function Declaration syntax. It gives more freedom in how to organize our code, because we can call such functions before they are declared.

That’s also better for readability, as it’s easier to look up function f(…) {…} in the code than let f = function(…) {…};. Function Declarations are more “eye-catching”.

…But if a Function Declaration does not suit us for some reason, or we need a conditional declaration (we’ve just seen an example), then Function Expression should be used.
*/






















