// var let const
//  //declare and intialize

//var window add nd function scoped we can declare it with same name again with no errors

// let a=12;
// //let a=13;

// const discount=12;

// var b=12;

//scope(global,block,functional)

// var a=12;//global
// {
//     let aa=11;
// }

// //temporal dead zone
// console.log(a);

// //

// let a = 12;

let x = 11;
{
  let x = 2;
  console.log("inside", x);
}

console.log("outside", x);
