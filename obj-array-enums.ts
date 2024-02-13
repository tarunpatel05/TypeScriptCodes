//concrete object
/* this is object type inferred by typescript
const person = {
    name:string;
    age:number;
}
*/
// const person:object = {
//     name: 'Tarun',
//     age: 37
// };

// console.log(person)
// console.log(person.name);

//++++++++++++++++++++++++++++++++++++++++++

// const person: {
//     name: string;
//     age:number;

// } = {
//     name: 'Tarun',
//     age: 37
// };

// console.log(person.name);

//++++++++++++++++++++++++++++++++++++++++++

// const person = {
//     name: 'Tarun',
//     age: 37,
//     hobbies: ['Sports', 'Cooking'],
//     role : [2, 'author']
// };

// person.role.push('admin');
// person.role[1]= 10;

// let favoriteActivities: string[];
// favoriteActivities = ["Sports"]

// console.log(person.name);

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map());  // !! ERROR !! 
// }

//++++++++++++++++++++++++++++++++++++++++++

// const person : {
//     name:string;
//     age:number;
//     hobbies: string[];
//     role:[number,string]; //tuple type. it tells, it needs special array with exact 2 elements 1st should be number and 2nd should be string
//  } = {
//     name: 'Tarun',
//     age: 37,
//     hobbies: ['Sports', 'Cooking'],
//     role : [2, 'author']
// };

// person.role.push('admin');
// person.role[1]= 10; // will throw because of type tuple 

// // let favoriteActivities: string[];
// // favoriteActivities = ["Sports"]

// // person.role = [0, 'admin', 'user'] //ERROR 'user' can not be added.

// console.log(person.name);

// for(const hobby of person.hobbies){
//     console.log(hobby.toUpperCase());
//     // console.log(hobby.map());  // !! ERROR !! 
// }

//++++++++++++++++++++++++++++++++++++++++++

// const ADMIN = 0;  //creating enum makes it easier
// const READ_ONLY = 1;
// const AUTHOR = 2;

//enum is custom type
// enum Role {ADMIN, READ_ONLY, AUTHOR}; //behind the scene ADMIN is 0 READ_ONLY is 1 and AUTHOR is 2

// enum Role {ADMIN=5, READ_ONLY, AUTHOR};
// in this case ADMIN is 5 then subsequent will be 6 and 7 ...
// enum Role {ADMIN=5, READ_ONLY=100, AUTHOR=200}; this will do as well
// enum Role {ADMIN='ADMIN', READ_ONLY=100, AUTHOR=200}; this will do as well


// const person = {
//     name: 'Tarun',
//     age: 37,
//     hobbies: ['Sports', 'Cooking'],
//     role : Role.ADMIN
// };

// if(person.role === Role.ADMIN){
//     console.log('is Admin')
// }

//++++++++++++++++++++++++++++++++++++++++++

