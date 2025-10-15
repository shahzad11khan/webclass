// template literals
// let and const
// arrow function
// destructuring 
// import and export

// destructuring
// using array
// let array = ["HTML", "CSS", "JS", "ReactJS"];
// console.log(array[2]);
// let [,,,xyz]= array;
// let [value1,,value2]= array;
// console.log(value1);
// console.log(value2);

// object destructuring
// let obj = {
//     name : "Navttc",
//     address : "Peshawar",
//     course : "Web Development",
//     xyz : "abc"
// }

// console.log(obj);
// console.log(obj.name,obj.address,obj.course);
// let {xyz,course} = obj;
// console.log(course);
// console.log(xyz);

import MyDisplayer from './script.js';
MyDisplayer();

import {add} from './script.js';
console.log(add(5,6));