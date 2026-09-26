let inp = document.querySelector("input");
let span = document.querySelector("span");

inp.addEventListener("input", function () {
  //   console.log("input huwa");
  // console.log(inp.value.length)
  let left = 20 - inp.value.length;
  span.textContent = left;
  if (left < 0) {
    span.style.color = "red";
  } else {
    span.style.color = "black";
  }
});
