let userName = 'jhon';

function showMessage() {
    userName ='Bob';

    let message = 'Hello, ' + userName;
    console.log(message);
}

console.log(userName); //jhon bcz func is not called yet

showMessage();

console.log(userName); //Now it is Bob

// When a value is passed as a function parameter, it’s also called an argument.

/*
In other words, to put these terms straight:

A parameter is the variable listed inside the parentheses in the function declaration (it’s a declaration time term).
An argument is the value that is passed to the function when it is called (it’s a call time term).

*/

let val = 1 > null;

console.log(val);

/*
Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does.

It is a widespread practice to start a function with a verbal prefix which vaguely describes the action. There must be an agreement within the team on the meaning of the prefixes.



*/


/*
One function – one action
A function should do exactly what is suggested by its name, no more.

Two independent actions usually deserve two functions, even if they are usually called together (in that case we can make a 3rd function that calls those two).

A few examples of breaking this rule:

getAge – would be bad if it shows an alert with the age (should only get).
createForm – would be bad if it modifies the document, adding a form to it (should only create it and return).
checkPermission – would be bad if it displays the access granted/denied message (should only perform the check and return the result).

There exist many well-known function prefixes like create…, show…, get…, check… and so on. Use them to hint what a function does.




*/


function findMin(a,b) {
  return a > b ? console.log('this is true'+b) : console.log(a)  ;
}

findMin(2,2)


