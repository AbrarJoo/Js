class CreatePencil {
  constructor(name, color, company) {
    //initializes and define variables here
    this.name = name;
    this.color = color;
    this.company = company;
  }

  write(text) {
    //methods go here
    let h1 = document.createElement("h1");
    h1.textContent = text;
    h1.style.color = this.color;
    document.body.appendChild(h1);
  }

  erase() {
    document.body.querySelectorAll("h1").forEach((element) => {
      if (element.style.color === this.color) {
        element.remove();
      }
    });
  }
}

let p1 = new CreatePencil("rx1", "black", "doms");
let p2 = new CreatePencil("rx2", "red", "nataraj");
