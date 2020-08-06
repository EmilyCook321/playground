import "./card.css";
import { createElement } from "../utils/elements";

export function createCard(props) {
  const title = createElement("h2", {
    innerText: props.title,
  });
  const setup = createElement("p", {
    innerText: props.setup,
  });
  const punchline = createElement("p", {
    innerText: props.punchline,
  });
  const card = createElement(
    "div",
    {
      className: "card",
    },
    [title, setup, punchline]
  );
  return card;
}
