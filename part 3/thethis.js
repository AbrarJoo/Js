// //this keyword--special--because---all keywords have the same nature but -- this keyword changes its nature with usage

// //--global scope --this =window(window is supreme thing)

// console.log(this);

// // fucntion --also window

// function abcd() {
//   console.log(this);
// }

// //in method--ie a function inside an object --this becomes the object(whole)
// //but in method with es6 arrow dunction its again window
// //es5 function inside es5 method --window
// //arrow function inside es5 mthod--object
// let obj = {
//   name: "abrar",
//   age: 24,
//   sayname: () => {
//     // console.log(this); gives whole object
//     console.log(this.age);
//   },
// };

// obj.sayname();

// //event handler --- equal to elemnt on which event is put
// document.querySelector("h1").addEventListener("click", function () {
//   console.log(this);
// });

// //class-- in class this value is blank object
// class Abcd {
//   constructor() {
//     console.log("hehe");
//     this.a = 12;
//   }
// }

// let val = new Abcd();
// console.log(val);

// //arrow function and lexical this

// let obj1 = {
//   sayname: () => {},
// };

// // call apply bind;
// //fucntion--call--set--this value for the function

// function abcde() {
//   // console.log(this);
//   console.log(this.name);
// }

// abcd.call();
// abcd.call(obg);
let obg = {
  name: "harsh",
  age: 24,
};
function fnc(a, b, c) {
  console.log(this, a, b, c);
}

//fnc.apply(obg, [1, 2, 3]); //calls as well
let newfn = fnc.bind(obg, 1, 2, 3); //gives a new function

newfn();
