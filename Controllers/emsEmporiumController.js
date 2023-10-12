const FakeStore = require("../Models/FakeStore.js");
let myStore = new FakeStore();
console.log(myStore);
const getData = (req, res) => {
  myStore.fetchAPI().then((response) => res.json(response.data));
};

module.exports = { getData };
