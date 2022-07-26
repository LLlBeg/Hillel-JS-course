import header from "./components/header.js";
import card from "./components/card.js";
import data from "./data.js";

const root = document.querySelector("#root");

root.appendChild(header("Information Card"));

for (let user of data) {
  root.appendChild(card(user));
}
