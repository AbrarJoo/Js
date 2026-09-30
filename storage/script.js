//local storage==>browser stores data and is there upon closing of browser
//sessionn storage==> temporary stores data
//cookies==> stores data in cookie property of browser for light data

//-----localStorage (store,fetch,remove,update)

localStorage.setItem("name", "abrar");

let val1 = localStorage.getItem("name");

localStorage.removeItem("name");

localStorage.setItem("name", "harsh"); //setitem updates as well

localStorage.clear();

//--------session storage

sessionStorage.setItem("name", "abrar");
let val = sessionStorage.getItem("name");

sessionStorage.removeItem("name");

sessionStorage.setItem("name", "harsh");

sessionStorage.clear();

//---cookies

let email = document.cookie("email=harsh@gmail.com");



///JSON
//as local storage only allows strings
let friends=localStorage.setItem("friends",JSON.stringify(["akash","harsh","amit"]))

//JSon parse for natural form


