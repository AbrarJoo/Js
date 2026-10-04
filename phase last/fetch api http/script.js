// fetch fetch api

// randomuser.me/api

// JSON format

fetch("https://randomuser.me/api/?results=5")
  .then((rawdata) => {
    return rawdata.json();
  })
  .then((data) => {
    console.log(data.results[0].name.first);
  })
  .catch((err) => {
    console.log(err);
  });

// --OR

fetch("https://randomuser.me/api/?results=5")
  .then((raw) => raw.json())
  .then((data) => console.log(data.results));


