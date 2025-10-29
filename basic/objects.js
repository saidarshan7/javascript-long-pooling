let user = {};

user.name = "jhon";
user.surname = "Smith";
user.name = "Pete";
// delete user.name;

console.log("surname" in user);

for (let prop in user) {


        console.log(`${prop} : ${user[prop]}`);
}


let schedule = {};

// console.log(schedule==='{}');

// function isEmpty(schedule) {



//     for (let key in schedule){
//         if(key in schedule){
//             return true;
            
//         }
//     }

//     return false;

   
// }

// console.log( isEmpty(schedule) );


let salaries = {
  
}

let sum = 0;
for (let key in salaries){

    sum+=salaries[key];
}

console.log(sum);





function multiplyNumeric(menu){
    for(let key in menu){
        if(typeof menu[key] === 'number'){
        menu[key] *=2 ;
        }
    }
}





let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

console.log(menu);


//When we copy a object we copy a reference not a actual object like primitive do
//object variable contains reference to a object


let user2 = {name : "saidarshan"};

let admin = user2;

admin.name = "ramayya";

console.log(user2);

//Now we have two variables, each storing a reference to the same object:
//two varibales are referencing to same object


//const objects can be modified
//meaning properties inside user object can modified but not  obbject as whole

const user3 = {name : "Darshan"}

user3.name = "sai"

console.log(user3)

//how to copy values from values from one object to another 
//Object.assign(dest, ...sources) and for loop also

let user4 = {name : "saidarshan"};
let perm= {canView : true};
let perm2= {canEdit : true};

let m = Object.assign({}, perm, perm2);

console.log(user4)

console.log(m===user4);








let user5 = {name: "Saidarshan",age:"18", size: { width: "544",height: "234"}};

let newobj = {...user5}  //same as object.assign which is shallow copy

console.log(user5.size===newobj.size);






