import Step from "./step";

export default function bubbleSort(array: number[]): Step[] {
  const steps: Step[] = [];
  let swapped;
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (j == 0) {
        swapped = false;
      }
      steps.push(new Step("compare", array[j], array[j + 1]));
      if (array[j] > array[j + 1]) {
        steps.push(new Step("swap", array[j], array[j + 1]));
        array[j] = array[j] ^ array[j + 1];
        array[j + 1] = array[j] ^ array[j + 1];
        array[j] = array[j] ^ array[j + 1];
        swapped = true;
      }
    }
    if (swapped == false) {
      break;
    }
  }
  return steps;
}
