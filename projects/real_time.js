const users = [
  {
    name: "amisha rathore",
    pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
    bio: "silent chaos in a loud world 🖤 | not for everyone",
  },

  {
    name: "ananya sharma",
    pic: "https://i.pinimg.com/736x/8f/3a/21/example.jpg",
    bio: "lost in thoughts, found in music 🎧",
  },

  {
    name: "riya kapoor",
    pic: "https://i.pinimg.com/736x/2a/7c/91/example.jpg",
    bio: "collecting moments, not things ✨",
  },

  {
    name: "mehak khan",
    pic: "https://i.pinimg.com/736x/4d/82/a6/example.jpg",
    bio: "soft heart, sharp mind 🦋",
  },
];

const cards = document.querySelector(".cards");

function showUsers(arr) {
  arr.forEach(function (user) {
    // Card
    const card = document.createElement("div");
    card.classList.add("card");

    // Image
    const img = document.createElement("img");
    img.classList.add("bg-img");
    img.setAttribute("src", user.pic);

    // Blurred layer
    const blurredLayer = document.createElement("div");
    blurredLayer.classList.add("blurred-layer");

    blurredLayer.style.backgroundImage = `url("${user.pic}")`;

    // Content
    const content = document.createElement("div");
    content.classList.add("content");

    // Name
    const name = document.createElement("h3");
    name.textContent = user.name;

    // Bio
    const bio = document.createElement("p");
    bio.textContent = user.bio;

    // Put name and bio inside content
    content.appendChild(name);
    content.appendChild(bio);

    // Put everything inside card
    card.appendChild(img);
    card.appendChild(blurredLayer);
    card.appendChild(content);

    // Put card inside cards container
    cards.appendChild(card);
  });
}

showUsers(users);
