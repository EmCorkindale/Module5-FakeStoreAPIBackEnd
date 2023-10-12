class FakeStore {
  constructor() {
    this.axios = require("axios");
  }
  fetchAPI() {
    return this.axios.get("https://fakestoreapi.com/products");
  }
}
module.exports = FakeStore;
