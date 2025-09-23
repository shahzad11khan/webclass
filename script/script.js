// class 01
// when u use console on front-end the result is show on the browser console 
// when u use console on back-end the result is show on the vs code terminal or on server ternimal
// console.log("Hello, Javascript🌹");
// alert("lorem");
// document.write("Hello, Javascript");

// class 02
// var  --> shortcut from of variable 
// var --> actual name is keyword reserveword --> which is used for declear a variable
// keyword/resverword     variableName      = value/data
// var                    batchII           = "javascript";
// console.log(batchII);
// document.write(batchII)
// alert(batchII)
// var batchI = "students"
// var advanceweb = "students"
// var MyName = "John Doe";
// var myname= "Jane Doe";
// let MyName = "John Doe";

// let MyName = "shahzad";
// const MyName = "shahzad";
// var myName = "John Doe";
// console.log(MyName);
// let MYName = "Jane Doe";
// const MyName = "John Doe"; 
// document.writeln("<h1>" + MyName + "</h1>");

// class 03
// let MyName = "shahzad";
// let age = 25;
// let isStudent = true;
// let Mychar = 'A';
// let MyName = "John Doe";

// Declaration of variable
// use for future use

// let MyName;
// let age;
// let isStudent;


// let myname; // decl
// myname = "shahzad"; // init

// dec + init


// initilaization of variable
// MyName = "shahzad";
// age = 25;
// isStudent = true;

// declaration and initialization of variable
// use for code optimization
// let Mychar = 32;
// console.log(typeof Mychar);
// let code = 34;
// type of datatype/variablesname

// primitive datatype
// string
// number
// boolean
// char
// undefined
// null

// let MyName = "shahzad";
// let age = 25; // datatype number , primitive datatype
// let isStudent = true; // datatype boolean , primitive datatype
// let flotvalue = 34.56;
// let arr = [1,2,3,4,5];// non-primitive datatype object
// console.log(typeof arr);     
// let obj = {name: "shahzad", age: 25}; //object non-primitive datatype
// let undef = undefined; // datatype undefined , primitive datatype 
// console.log(typeof undef);
// let n;
// let n = null; 
// n = "shahzad";
// console.log(typeof n);
//  n = "string"; // datatype null , non-primitive datatype
// n={name: "shahzad", age: 25}; //object non-primitive datatype
// console.log(n); // object non-primitive datatype
// let x;
// console.log(x);
// console.log(typeof MyName);
// console.log(typeof age);
// console.log(typeof flotvalue);

//  class 04
// object

// let human = {
// // property : values 
//     name: "shahzad",
//     email: "shahzadkhan311666@gmail.com",
// }

// console.log(human.email)
// console.log("Hi!",human.name)
// console.log("Hi!"+" " + human.name)
// ` ` --> is called template literal --> which is used for string interpolation
// console.log(`Hi! ${human.name}`)
// console.log(human.age)
// document.writeln(human.name, human.age);

// Array
// let arr = ["string",number,Boolean,undefined,null,character]
// let Name_Array = ["Daud",'kashif',"Haris","Uzair"];
// let Name_Array = ["Daud",3,true,'A'];
// let Name_Array = [
//   {
//     "id": 1,
//     "name": "Leanne Graham",
//     "username": "Bret",
//     "email": "Sincere@april.biz",
//     "address": {
//       "street": "Kulas Light",
//       "suite": "Apt. 556",
//       "city": "Gwenborough",
//       "zipcode": "92998-3874",
//       "geo": {
//         "lat": "-37.3159",
//         "lng": "81.1496"
//       }
//     },
//     "phone": "1-770-736-8031 x56442",
//     "website": "hildegard.org",
//     "company": {
//       "name": "Romaguera-Crona",
//       "catchPhrase": "Multi-layered client-server neural-net",
//       "bs": "harness real-time e-markets"
//     }
//   },
//   {
//     "id": 2,
//     "name": "Ervin Howell",
//     "username": "Antonette",
//     "email": "Shanna@melissa.tv",
//     "address": {
//       "street": "Victor Plains",
//       "suite": "Suite 879",
//       "city": "Wisokyburgh",
//       "zipcode": "90566-7771",
//       "geo": {
//         "lat": "-43.9509",
//         "lng": "-34.4618"
//       }
//     },
//     "phone": "010-692-6593 x09125",
//     "website": "anastasia.net",
//     "company": {
//       "name": "Deckow-Crist",
//       "catchPhrase": "Proactive didactic contingency",
//       "bs": "synergize scalable supply-chains"
//     }
//   },
//   {
//     "id": 3,
//     "name": "Clementine Bauch",
//     "username": "Samantha",
//     "email": "Nathan@yesenia.net",
//     "address": {
//       "street": "Douglas Extension",
//       "suite": "Suite 847",
//       "city": "McKenziehaven",
//       "zipcode": "59590-4157",
//       "geo": {
//         "lat": "-68.6102",
//         "lng": "-47.0653"
//       }
//     },
//     "phone": "1-463-123-4447",
//     "website": "ramiro.info",
//     "company": {
//       "name": "Romaguera-Jacobson",
//       "catchPhrase": "Face to face bifurcated interface",
//       "bs": "e-enable strategic applications"
//     }
//   },
//   {
//     "id": 4,
//     "name": "Patricia Lebsack",
//     "username": "Karianne",
//     "email": "Julianne.OConner@kory.org",
//     "address": {
//       "street": "Hoeger Mall",
//       "suite": "Apt. 692",
//       "city": "South Elvis",
//       "zipcode": "53919-4257",
//       "geo": {
//         "lat": "29.4572",
//         "lng": "-164.2990"
//       }
//     },
//     "phone": "493-170-9623 x156",
//     "website": "kale.biz",
//     "company": {
//       "name": "Robel-Corkery",
//       "catchPhrase": "Multi-tiered zero tolerance productivity",
//       "bs": "transition cutting-edge web services"
//     }
//   },
//   {
//     "id": 5,
//     "name": "Chelsey Dietrich",
//     "username": "Kamren",
//     "email": "Lucio_Hettinger@annie.ca",
//     "address": {
//       "street": "Skiles Walks",
//       "suite": "Suite 351",
//       "city": "Roscoeview",
//       "zipcode": "33263",
//       "geo": {
//         "lat": "-31.8129",
//         "lng": "62.5342"
//       }
//     },
//     "phone": "(254)954-1289",
//     "website": "demarco.info",
//     "company": {
//       "name": "Keebler LLC",
//       "catchPhrase": "User-centric fault-tolerant solution",
//       "bs": "revolutionize end-to-end systems"
//     }
//   },
//   {
//     "id": 6,
//     "name": "Mrs. Dennis Schulist",
//     "username": "Leopoldo_Corkery",
//     "email": "Karley_Dach@jasper.info",
//     "address": {
//       "street": "Norberto Crossing",
//       "suite": "Apt. 950",
//       "city": "South Christy",
//       "zipcode": "23505-1337",
//       "geo": {
//         "lat": "-71.4197",
//         "lng": "71.7478"
//       }
//     },
//     "phone": "1-477-935-8478 x6430",
//     "website": "ola.org",
//     "company": {
//       "name": "Considine-Lockman",
//       "catchPhrase": "Synchronised bottom-line interface",
//       "bs": "e-enable innovative applications"
//     }
//   },
//   {
//     "id": 7,
//     "name": "Kurtis Weissnat",
//     "username": "Elwyn.Skiles",
//     "email": "Telly.Hoeger@billy.biz",
//     "address": {
//       "street": "Rex Trail",
//       "suite": "Suite 280",
//       "city": "Howemouth",
//       "zipcode": "58804-1099",
//       "geo": {
//         "lat": "24.8918",
//         "lng": "21.8984"
//       }
//     },
//     "phone": "210.067.6132",
//     "website": "elvis.io",
//     "company": {
//       "name": "Johns Group",
//       "catchPhrase": "Configurable multimedia task-force",
//       "bs": "generate enterprise e-tailers"
//     }
//   },
//   {
//     "id": 8,
//     "name": "Nicholas Runolfsdottir V",
//     "username": "Maxime_Nienow",
//     "email": "Sherwood@rosamond.me",
//     "address": {
//       "street": "Ellsworth Summit",
//       "suite": "Suite 729",
//       "city": "Aliyaview",
//       "zipcode": "45169",
//       "geo": {
//         "lat": "-14.3990",
//         "lng": "-120.7677"
//       }
//     },
//     "phone": "586.493.6943 x140",
//     "website": "jacynthe.com",
//     "company": {
//       "name": "Abernathy Group",
//       "catchPhrase": "Implemented secondary concept",
//       "bs": "e-enable extensible e-tailers"
//     }
//   },
//   {
//     "id": 9,
//     "name": "Glenna Reichert",
//     "username": "Delphine",
//     "email": "Chaim_McDermott@dana.io",
//     "address": {
//       "street": "Dayna Park",
//       "suite": "Suite 449",
//       "city": "Bartholomebury",
//       "zipcode": "76495-3109",
//       "geo": {
//         "lat": "24.6463",
//         "lng": "-168.8889"
//       }
//     },
//     "phone": "(775)976-6794 x41206",
//     "website": "conrad.com",
//     "company": {
//       "name": "Yost and Sons",
//       "catchPhrase": "Switchable contextually-based project",
//       "bs": "aggregate real-time technologies"
//     }
//   },
//   {
//     "id": 10,
//     "name": "Clementina DuBuque",
//     "username": "Moriah.Stanton",
//     "email": "Rey.Padberg@karina.biz",
//     "address": {
//       "street": "Kattie Turnpike",
//       "suite": "Suite 198",
//       "city": "Lebsackbury",
//       "zipcode": "31428-2261",
//       "geo": {
//         "lat": "-38.2386",
//         "lng": "57.2232"
//       }
//     },
//     "phone": "024-648-3804",
//     "website": "ambrose.net",
//     "company": {
//       "name": "Hoeger LLC",
//       "catchPhrase": "Centralized empowering task-force",
//       "bs": "target end-to-end models"
//     }
//   }
// ];
// console.log(Name_Array[index_number]);
// console.log(Name_Array[4].name);

// function
// reuseable and simple 
// Name()
// function Name(){
    //     console.log("web class")
    // }
    // function Name(input_from_user){
        //     console.log(input_from_user)
        // }
        
        
        // let number1 = +prompt("Enter First Number!");
        // let number2 = +prompt("Enter 2nd Number!");
 
        // add(number1,number2);
        // function add(n1,n2){
        //     console.log(n1-n2);
        // }
        
// Name() //calling
// add(23,23) //calling

// class 05

// implicit converstion
// + --> plus concatination + addition
// console.log("5" +  5);
// let add = 5 + "5";
// let add = 5 + 5;
// console.log(add);

// let add = +"5";
// let add = +"shahzad";
// console.log(typeof add)

// let sub = 10 * "5";
// let sub = 10 - "5";
// console.log(sub);

// explicit
// let num = "4321"
// let convertnum = Number(num);
// console.log(convertnum);
// console.log(typeof convertnum);
// let num = 323324;
// let convertnum = num.toString();
// console.log(convertnum);
// console.log(typeof convertnum);

// boolean
// console.log(Number(true))
// console.log(Number(false))

// operators

//  + , - , / , *

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 / 2);
// console.log(2 % 2);

// create a table 2

// comparison
// == , === , != , !== , > , < , >= , <=

// console.log(2 < 4)
// console.log(2 > 4)
// console.log(2 == "9"); // never seen the datatype just value
// console.log(2 === "2"); // both comp datatype and value
// let a = 60;
// let b = "60";
// console.log(a == b);
// console.log(a === b);

// console.log(2 != "2")
// console.log(!false)
// console.log(2 === "2")
// console.log(2 !== "2")



