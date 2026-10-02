let display = document.querySelector("#display");
let names = {
  Q: "Heater 1",
  W: "Heater 2",
  E: "Heater 3",
  A: "Heater 4",
  S: "Clap",
  D: "Open Hi-Hat",
  Z: "Kick and Hat",
  X: "Kick",
  C: "Closed Hi-Hat",
};

let pads = document.querySelectorAll(".drum-pad");

function playsound(audio) {
  audio.currentTime = 0;
  audio.play();

  display.textContent = names[audio.id];
}

pads.forEach(function (pad) {
  pad.addEventListener("click", function () {
    let audio = pad.querySelector(".clip");
    playsound(audio);
  });
});

document.addEventListener("keydown", function (event) {
  let key = event.key.toUpperCase();
  let audio = document.querySelector("#" + key);
  if (audio) {
    playsound(audio);
  }
});
