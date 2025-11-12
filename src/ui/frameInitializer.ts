import { ArrayItem } from "../types/ArrayItem";

export class FrameInitializer {
  initialize(array: number[]) {
    const arrayVisualizer = document.getElementById("array-container");
    const items = array.map(
      (num, index) => new ArrayItem(false, false, num, index + 1)
    );
    const initialFrame = items
      .map(
        (item) => `<span class="array-element ${item.compared && "comparing"} ${
          item.swapped && "swapping"
        } " id="element-${item.id}"
      style="transform:translateX(${item.left ? item.left : 0}rem); height:${
          item.height ? item.height : 0
        }rem;">${item.id}</span>`
      )
      .join("");
    if (initialFrame) {
      arrayVisualizer?.insertAdjacentHTML("afterbegin", initialFrame);
    }
  }
  reset() {
    const arrayVisualizer = document.getElementById("array-container");
    if (arrayVisualizer) {
      arrayVisualizer.innerHTML = "";
    }
  }
}
