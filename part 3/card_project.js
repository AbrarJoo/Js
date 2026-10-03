let form = document.querySelector("form");
let username = document.querySelector("#name");
let role = document.querySelector("#role");
let bio = document.querySelector("#bio");
let photo = document.querySelector("#photo");

const userManager = {
  users: [],
  init: function () {
    form.addEventListener("submit", this.submitForm.bind(this));
  },
  submitForm: function (e) {
    e.preventDefault();
    this.addUser();
    this.renderUi();
  },
  addUser: function () {
    this.users.push({
      name: username.value,
      role: role.value,
      bio: bio.value,
      photo: photo.value,
    });
    form.reset();
  },
  renderUi: function () {
    document.querySelector(".users").innerHTML = "";
    this.users.forEach(function (user) {
      let card = document.createElement("div");
      card.className =
        "bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 flex flex-col items-center border border-blue-100 hover:scale-105 transition";

      let img = document.createElement("img");
      img.src = user.photo;
      img.alt = "User Photo";
      card.appendChild(img);

      let h2 = document.createElement("h2");
      h2.className = "text-2xl font-bold mb-1 text-blue-700";
      h2.textContent = user.username;
      card.appendChild(h2);

      let role = document.createElement("p");
      role.className = "text-purple-500 font-medium";
      role.textContent = user.role;
      card.appendChild(role);

      let bio = document.createElement("p");
      bio.className = "text-gray-700 text-center";
      bio.textContent = user.bio;
      card.appendChild(bio);

      let rmvbtn = document.createElement("button");
      rmvbtn.textContent = "Remove User";
      rmvbtn.className = "bg-red-500 text-white px-4 py-2 rounded-lg mt-4";
      rmvbtn.addEventListener("click", function () {
        card.remove();
      });
      card.appendChild(rmvbtn);

      document.querySelector(".users").appendChild(card);
    });
  },
  removeUser: function () {},
};

userManager.init();
