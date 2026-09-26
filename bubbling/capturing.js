//whenever we raise an event the event flow or propogation has two phases
//phase 1 : event goes downwards from the top level elemnet
//phase 2: event goes from raised eleemnt to parent

//1 occurs first
let a = document.querySelector(".a");
let b = document.querySelector(".b");
let c = document.querySelector(".c");
let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  console.log("button clicked");
});

c.addEventListener(
  "click",
  function () {
    console.log("c clicked");
  },
  true,
);

b.addEventListener("click", function () {
  console.log("b clicked");
});

a.addEventListener(
  "click",
  function () {
    console.log("a clicked");
  },
  true,
);

//captre phase >>>> bubbling phase (bubbling goes fisrt because we dont enable capture phase  >>>> by , true writing)
