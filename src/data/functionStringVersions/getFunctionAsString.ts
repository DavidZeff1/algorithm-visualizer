import bubbleSort from "./BubbleSort";
import InsertionSort from "./InsertionSort";
import SelectionSort from "./SelectionSort";
export default function getFunctionAsString(str: string): string {
  switch (str) {
    case "Bubble Sort":
      return bubbleSort;
      break;
    case "Insertion Sort":
      return InsertionSort;
      break;
    case "Selection Sort":
      return SelectionSort;
      break;
  }
  return "No Sort";
}
