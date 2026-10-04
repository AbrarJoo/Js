fetch("https://randomuser.me/api/?results=3")
  .then((raw) => raw.json())
  .then((data) =>
    data.results.forEach((user) => {
      // MAIN CONTAINER

      let container = document.createElement("div");

      container.className = "flex flex-wrap justify-center gap-2";

      document.body.appendChild(container);

      // ================= CARD 1 =================

      let card1 = document.createElement("div");

      card1.className =
        "bg-[#1e293b] w-48 rounded-md p-3 flex items-center gap-2";

      // IMAGE

      let img1 = document.createElement("img");

      img1.src = user.picture.large;
      img1.alt = "John Doe";

      img1.className = "w-8 h-8 rounded-full object-cover";

      // INFO CONTAINER

      let info1 = document.createElement("div");

      // NAME

      let name1 = document.createElement("h2");

      name1.textContent = "John Doe";

      name1.className = "text-white text-[10px] font-semibold";

      // EMAIL

      let email1 = document.createElement("p");

      email1.textContent = "john.doe@example.com";

      email1.className = "text-slate-400 text-[8px]";

      // STATUS

      let status1 = document.createElement("span");

      status1.textContent = "Active";

      status1.className =
        "inline-block bg-blue-900 text-blue-100 text-[7px] px-2 py-0.5 rounded-full mt-1";

      // BUILD CARD 1

      info1.appendChild(name1);
      info1.appendChild(email1);
      info1.appendChild(status1);

      card1.appendChild(img1);
      card1.appendChild(info1);

      container.appendChild(card1);

      // ================= CARD 2 =================

      let card2 = document.createElement("div");

      card2.className =
        "bg-[#1e293b] w-48 rounded-md p-3 flex items-center gap-2";

      // IMAGE

      let img2 = document.createElement("img");

      img2.src = "https://randomuser.me/api/portraits/men/32.jpg";
      img2.alt = "John Doe";

      img2.className = "w-8 h-8 rounded-full object-cover";

      // INFO CONTAINER

      let info2 = document.createElement("div");

      // NAME

      let name2 = document.createElement("h2");

      name2.textContent = "John Doe";

      name2.className = "text-white text-[10px] font-semibold";

      // EMAIL

      let email2 = document.createElement("p");

      email2.textContent = "john.doe@example.com";

      email2.className = "text-slate-400 text-[8px]";

      // STATUS

      let status2 = document.createElement("span");

      status2.textContent = "Active";

      status2.className =
        "inline-block bg-blue-900 text-blue-100 text-[7px] px-2 py-0.5 rounded-full mt-1";

      // BUILD CARD 2

      info2.appendChild(name2);
      info2.appendChild(email2);
      info2.appendChild(status2);

      card2.appendChild(img2);
      card2.appendChild(info2);

      container.appendChild(card2);
    }),
  );
