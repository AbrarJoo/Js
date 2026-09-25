//------click event
// let h1 = document.querySelector("h1");

// h1.addEventListener("click", function () {
//   h1.style.color = "red";
// });

// let p = document.querySelector("p");
// p.addEventListener("click", function () {
//   p.style.color = "green";
// });

// function dblclick() {
//   p.style.color = "yellow";
// }

// let p = document.querySelector("p");
// p.addEventListener("dblclick", dblclick);

// p.removeEventListener("dblclick", dblclick);

//----------input event
// let inp = document.querySelector("input");
// // inp.addEventListener("input", function () {
// //   console.log("typed");
// // });
// // inp.addEventListener("input", function (evt) {   //console details
// //   console.log(evt);
// // });
// // inp.addEventListener("input", function (evt) {  //with null
// //   console.log(evt.data);
// // });
// inp.addEventListener("input", function (evt) {
//   if (evt.data !== null) {
//     console.log(evt.data);
//   }
// });

//-------change event (input select or textarea change)
// let sel = document.querySelector("select");
// let device = document.querySelector("#device");
// // sel.addEventListener("change", function (details) {
// //   console.log(details.target.value);
// // });
// sel.addEventListener("change", function (details) {
//   // device.textContent = "Device Selected!";
//   device.textContent = `${details.target.value} Device Selected!`;
// });

// let char = document.querySelector("h1");

// window.addEventListener("keydown", function (details) {
//   // char.textContent = details.key;
//   if (details.key === " ") {
//     char.textContent = "SPC";
//   } else {
//     char.textContent = details.key;
//   }
// });

//---------custom input/uploadfile button

let btn = document.querySelector("#btn");
let fileinp = document.querySelector("#fileinp");

btn.addEventListener("click", function () {
  fileinp.click(); //click through js transfer
});

fileinp.addEventListener("change", function (details) {
  const file = details.target.files[0];
  if (file) {
    btn.textContent = file.name;
  }
});
