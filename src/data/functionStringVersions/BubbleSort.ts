export default `
function bubbleSort(array: number[]) {
    const steps: Step[] = [];
    let swapped;
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        if (j == 0) {
          swapped = false;
        }
        if (array[j] > array[j + 1]) {
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
  }
`;
