let notes = document.querySelector("#notes");
let stat = document.querySelector("#status");
let button = document.querySelector("#get");
let timer;

notes.addEventListener("input", function () {
  stat.textContent = "Saving...";
  clearTimeout(timer);
  timer = setTimeout(function () {
    localStorage.setItem("notes", notes.value);
    stat.textContent = "Saved..";
  }, 1000);
});

button.addEventListener("click", function () {
  let savedNotes = localStorage.getItem("notes");
  if (savedNotes === null) {
    notes.value = "Nothing to display";
  } else {
    notes.value = savedNotes;
  }
});
