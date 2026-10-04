//object oriented
//--constructor function
// function CreatePencil(name, color, price) {
//   this.name = name;
//   this.price = price;
//   this.color = color;
//   //   this.company = company;
//   this.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.textContent = text;
//     h1.style.color = color;
//     document.body.append(h1);
//   };
// }

//--prototypes --never hardcore in constructor instead use prototypes --and all new instances will automatically have that feild
// CreatePencil.prototype.company = "doms";

//---------or
function CreatePencil(name, color, price) {
  this.name = name;
  this.price = price;
  this.color = color;
  //   this.company = company;
}
CreatePencil.prototype.write = function (text) {
  let h1 = document.createElement("h1");
  h1.textContent = text;
  h1.style.color = this.color;
  document.body.append(h1);
};

//--objects/instances
let pencil1 = new CreatePencil("Natraj", "black", 10);
let pencil2 = new CreatePencil("doms", "red", 10);

//test
console.log(pencil1.company);
console.log(pencil2.company);
