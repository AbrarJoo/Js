//classical inheritance -- make classes then extend
class User {
  constructor(name, address, username, email) {
    this.name = name;
    this.address = address;
    this.username = username;
    this.email = email;
    this.role = "user";
  }

  checkRole() {
    return `you are a ${this.role}`;
  }

  write(text) {
    let h1 = document.createElement("h1");
    h1.textContent = `${this.name}: ${text}`;
    document.body.appendChild(h1);
  }
}

class Admin extends User {
  constructor(name, address, username, email) {
    super(name, address, username, email);
    this.role = "admin";
  }

  remove() {
    document.querySelectorAll("h1").forEach(function (element) {
      element.remove();
    });
  }
}

let u1 = new User("Hasrh", "Bhopal", "async123", "a@aa.com");

let u2 = new User("Abrar", "Srinagar", "abrar123", "abrar@gmail.com");

let u3 = new User("Rahul", "Delhi", "rahul_dev", "rahul@gmail.com");

let a1 = new Admin("Ali", "Mumbai", "ali_admin", "ali@gmail.com");

//prototypal inheritance ---only in old javascript  object-> object inheritance

let coffee = {
  color: "dark",
  drink: function () {
    console.log("drinking .....");
  },
};

let arabiataCoffee = Object.create(coffee);
console.log(arabiataCoffee.drink);
console.log(arabiataCoffee);
