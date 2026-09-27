// setInterval(function () {
//   console.log("hello");
// }, 1000); //miliseconds
// let time = setTimeout(function () {
//   console.log("hello");
// }, 2000); //miliseconds

// clearTimeout(time);

// let count = 10;
// let interval = setInterval(function () {
//   if (count >= 0) {
//     count--;
//     console.log(count);
//   } else {
//     clearInterval(interval);
//   }
// }, 1000);

//----download prorgess bar mini project startng from here

let count = 0;
let seconds = 2;
let progress = document.querySelector(".progress-bar");
let percentage = document.querySelector(".percentage");
let h2 = document.querySelector("h3");

let interval = setInterval(
  function () {
    if (count <= 99) {
      count++;
      progress.style.width = `${count}%`;
      percentage.textContent = `${count}%`;
    } else {
      h2.textContent = "Downloaded Sucessfully!";
      clearInterval(interval);
    }
  },
  (seconds * 1000) / 100,
); //10 seconds
