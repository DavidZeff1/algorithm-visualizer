const arrayVisualizer = document.getElementById("array-visualizer");
class ArrayItem {
  swapped: boolean | null;
  compared: boolean | null;
  id: number | null;
  offset = 1;
  height: number | null;
  constructor(
    swapped: boolean | null,
    compared: boolean | null,
    id: number | null
  ) {
    this.compared = compared;
    this.swapped = swapped;
    this.id = id;
    this.height = id ? id * this.offset : this.offset;
  }
}

const items = [
  new ArrayItem(true, true, 1),
  new ArrayItem(false, true, 2),
  new ArrayItem(true, false, 3),
  new ArrayItem(false, false, 4),
  new ArrayItem(true, true, 5),
];
const frame = items
  .map(
    (item) =>
      `<span class="array-element ${item.compared && "comparing"} ${
        item.swapped && "swapping"
      } " id="element-${item.id}"
      style="left:${item.id ? item.id * 5 : 0}rem; height:${
        item.height ? item.height : 0
      }rem;">${item.id}</span>`
  )
  .join("");

if (frame) {
  arrayVisualizer?.insertAdjacentHTML("afterbegin", frame);
}

console.log(frame);
