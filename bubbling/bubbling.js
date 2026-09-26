//--event bubbling
// main div
//     div
//         links
//         button

// document.querySelector("#nav").addEventListener("click", function () {
//   alert("clicked");
// });

//we got 5 li s so we will put listener on ul parent using event bubbling

let ul = document.querySelector("ul");
ul.addEventListener("click", function (details) {
  //   details.target.style.textDecoration = "line-through";
  // details.target.classList.add("lt");
  details.target.classList.toggle("lt");
});



// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//   console.log("button clicked");
// });

// c.addEventListener("click", function () {
//   console.log("c clicked");
// });

// b.addEventListener("click", function () {
//   console.log("b clicked");
// });

// a.addEventListener("click", function () {
//   console.log("a clicked");
// });


// event flow phase 2


