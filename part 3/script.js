// //--scope,excution context,closures

// //fucntion scope
// function abcd() {
//   var a = 12;
// }

// // console.log(a);
// //block scope
// {
//      var c=12;
// }
// //global scope
// var b=12;

// //execution context- whenever js sees a function firstly js forms an extecution context which is a procress that runs in 2 phases -- memory phase(mem allocation for variables) and execution phase(runs the actual code)--abstract concept

// function abcd(){
//     var a=12;
//     var b=12;
//     var c=12;

//     //   ....

//     //
// }

// //lexical and dynamic scope
// //js -follows lexical scoping-- depends on physical location
// function abcd(){
//     let a=12;
//     function defg(){
//         console.log(a);
//     }
// }
// //-dynamic scoping -->depends on call location

// //--closure definition and how variables are preserved
// //closure-->backlink-->[[environment]]
// //closure defintion --- advantages private variables,, stop global pollution

// function countForMe() {
//   let c = 0;
//   return function () {
//     c++;
//     console.log(c);
//   };
// }

// let fnc = countForMe();  //save first time always
// fnc();
// fnc();
// fnc();

// let fnc2=countForMe();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();
// fnc2();

// //fnc & fnc2 has separate values for c

// //--encapsulation

// function clickLimiter() {
//   let click = 0;
//   return function () {
//     if (click < 5) {
//       click++;
//       console.log(`clicked: ${click} times`);
//     } else {
//       console.error("LIMIT EXCEEDED!, TRY AGAIN LATER");
//     }
//   };
// }

// click=0; //wont work becaause its a private variable

// let fnc=clickLimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
