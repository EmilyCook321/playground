import "./global.css";
import { createToggleButton } from "./components/toggleButton";
import { createTitle } from "./components/title.js";
import { createElement } from "./utils/elements";
import { getJoke } from "./api/joke";

const title = createTitle();
const toggleButton = createToggleButton();

const fetchButton = createElement("button", {
  innerHTML: "FETCH IT",
});

fetchButton.addEventListener("click", async () => {
  const joke = await getJoke();
  console.log(joke);
});

//const fetchButton = createElement(“button”, {
//innerHTML: “FETCH IT”})
//fetchButton.addEventListener(“click”, async() => {
//console.log(“CLICK”);
// const response = await fetch(“https://official-joke-api.appspot.com/random_joke”);
//const data = await response.json();
//console.log(data);})

document.body.append(title);
document.body.append(toggleButton);
document.body.append(fetchButton);
