let student = {
  name: "ayaan ",
  age: 21,
  marks: {
    math: 87,
    cs: 94,
    eng: 34,
  },
};

//real copy

let student2 = JSON.parse(JSON.stringify(student));
