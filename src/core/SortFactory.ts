import bubbleSort from "../entities/BubbleSort";
import insertionSort from "../entities/InsertionSort";
import { selectionSort } from "../entities/SelectionSort";
import Step from "../entities/step";

export type SortType = "Bubble Sort" | "Insertion Sort" | "Selection Sort";

export class SortFactory {
  static create(sortType: SortType, array: number[]): Step[] {
    switch (sortType) {
      case "Bubble Sort":
        return bubbleSort(array);
      case "Insertion Sort":
        return insertionSort(array);
      case "Selection Sort":
        return selectionSort(array);
      default:
        throw new Error(`Unknown sort type: ${sortType}`);
    }
  }
}
