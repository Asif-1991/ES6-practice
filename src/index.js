// Let and  const // 
//==================================

// const x = 10;
// x =25;
// console.log(x);

// const arr = [];

// arr.push(20);
// arr.push(30);

// console.log(arr);

// function demo() {
//     {
//         let x = 10;
//         {
//             const x = 15;
//             console.log(x);
//         }

//         x = 20;
//         console.log(x);
//     }
//     console.log(x);
// }

// demo();

// Template String// 
//==================================

// const name = 'Big Ship'
// const age = 361.011
// const email = 'bigship@gmail.com'

// // const details = 'Name '+ name + 'Age '
// //                  + age + 'Email ' +  email

// const details = `Name: ${name}; Age: ${age} Email: ${email}`

// console.log(details);


// Arrow Function // 
//==================================

// const print = (name) => {
//     console.log('Hello arrow function', name);
// }
// print('Ship');

// const print = name => {
//     console.log('Hello arrow function', name);
// }
// print('Ship');

// const addMe = (a, b) => {
//     return a + b;
// }
// addMe(16, 30);

// const addMe = (a, b) => a + b;

// addMe(16, 30);

// const sqr = x => x*x

// // ES5
// function sqr (x) {
//     return x*x;
// }

// console.log(sqr(10));

// Lexical This // 
//==================================

// const obj = {
//     name: 'Hard Work',
//     print: function (){
//         setTimeout (function (){
//             console.log(this);
//         }, 1000);
//     }
// }

// const obj2 = {
//     name: 'Hard Work',
//     print: function (){
//         setTimeout (() => {
//             console.log(this);
//         }, 1000);
//     }

// }
// obj.print();
// obj2.print();

// Enhance Object // 
//==================================

// let name = 'Big Ship'
// let email = 'bigship@gmail.com'

// const Ship = {
//     name,
//     email,

//     print(){
//         console.log(this.name, this.email);
//     }
// }

// Ship.print();
// console.dir(Ship);

// Destructuring array object & details // 
//================================================

// const arr = [12, 20, 30];

// let [a, b, c] = arr;

// console.log(a);
// console.log(c);

// const obj = {
//     name: 'Hard Work',
//     email: 'hardwork@gmail.com'
// }
// let {name, email} = obj;
// console.log(name, email);

// function print ({name, email}) {
//     console.log(`Hello: ${name}, Email: ${email}`);
// }
// print({name, email});

// Default parameter // 
//================================================

// let add = (a, b) => a+b;
// console.log(add(10));

// let sqr = (a=1, b=a) => a*b;

// console.log(sqr(10));
// console.log(sqr(10, 5));

// Rest parameter // 
//================================================
// function sum (...num){
//     return num.reduce((a,b) => a+b);
// }

// let xum = sum(60, 20, 30, 40, 56, 45)
// console.log(xum);


// Spread parameter ... // 
//================================================

// var arr = [1, 2, 3, 4];

// arr = [...arr, 12, 21, 32]

// console.log(arr);

// var obj = {
//     name: 'Big Ship',
//     email: 'bigship@gmail.com'
// }
// var obj2 = {
//     ...obj,
//     name: 'bigShip',
//     size: 316.011
// }
// console.log(obj2);


// Module system // 
//================================================

// import { add, mod } from './math';

// console.log(mod(10, 3));

// Classes in Details // 
//================================================

// import Person from './person'

// let p1 = new Person('Big ship', 'bigship@gmail.com');

// console.log(p1.name);
// p1.print();

// Classes inheritance // 
//================================================
// import Student from './student.js';

// let st1 = new Student('Shipping Agency', 'shippingagency@gmail.com', '1654')

// st1.print();

// Promise // 
//================================================

// console.log('Hello');

// setTimeout(() => {
//     console.log('I am in Timer');
// }, 100)

// console.log('I am Exploring Promise');

// setTimeout(() =>  {
//     console.log('I am fourth');
// }, 5000); 


// let myFirstPromise = new Promise((resolve, reject) => {

//     let name = 'Shipping Agency';

//     setTimeout(() => resolve(name), 3000);
// })

// myFirstPromise
//     .then((name) => {
//         console.log('We are ' + name);
//     })

fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((body) => {

        const lis = body.map(data => {
            let li = document.createElement('li');
            let text = `Name: ${data.name}, Email: ${data.email}`
            let textNode = document.createTextNode(text);

            li.appendChild(textNode);

            return li;
        });

        lis.forEach((li) => {
            document.getElementById('myList').appendChild(li);
        })

    })
    .catch((err) => console.log(err))
