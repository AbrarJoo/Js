// //sync async---code-->line by line--sync code
// //async ---code--->code runs when ready ---asnynchronus code

// function kuchDerBaadChaluga(fnc) {
//   setTimeout(fnc, Math.floor(Math.random() * 10) * 1000);
// }

// kuchDerBaadChaluga(function () {
//   console.log("hey");
// });

// //callback  --- function given another function in parameter then the one with parameter is called callback

// //--callback hell

// function profileLEkarAao(username, cb) {
//   setTimeout(() => {
//     console.log(`profile fetched of ${username}`);
//     cb({ username });
//   }, 2000);
// } //this functon is somewhere else in libraries

// profileLEkarAao("harsh", function (profileData) {
//   console.log(profileData);
// });

//----npm

//----promises
// promise--> can go to one state out of two state --> either resolve or reject we have to write code for both  pending,<fulfliied> and resolved

let pr = new Promise(function (res, rej) {
  setTimeout(() => {
    let rn = Math.floor(Math.random() * 10);
    if (rn > 5) {
      res("resolved with" + " " + rn);
    } else rej("rejected with" + " " + rn);
  }, 3000);
});

//resolve
pr.then(function (val) {
  console.log(val);
}).catch(function (val) {
  console.log(val);
}); //reject
