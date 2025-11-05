import "./ArrayContainer.css";
import ArrayItem from "../ArrayItem/ArrayItem";

export default function ArrayContainer() {
  return `
  <div class="array-container">
    ${ArrayItem(0)}
    ${ArrayItem(1)}
    ${ArrayItem(2)}
    ${ArrayItem(3)}
    ${ArrayItem(4)}
  </div>
  `;
}
