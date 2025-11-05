const swap = require("../utils/swap");

function BubbleSort(arr) {
  let sorted;
  let j = 0;
  const n = arr.length;

  while (true) {
    if (j == 0) {
      sorted = true;
    }
    if (arr[j] > arr[j + 1]) {
      swap(arr, j, j + 1);
      sorted = false;
    }
    if (j == n - 1 && sorted == true) {
      break;
    } else if (j == n - 1 && sorted == false) {
      j = 0;
    } else {
      j++;
    }
  }

  return arr;
}

module.exports = BubbleSort;
