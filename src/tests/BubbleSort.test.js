const IsArraySorted = require("../utils/isArraySorted");
const swap = require("../utils/swap");
const BubbleSort = require("../algorithms/bubbleSort");

const sortedArrays = [
  [1, 2, 3, 4],
  [-5, -4, -3, -2],
];
const unSortedArrays = [
  [1, 5, 3, 4],
  [5, 4, 3, 2],
  [-1, -2, -3, -4],
];
test("is array sorted? happy", () => {
  sortedArrays.forEach((arr) => {
    expect(IsArraySorted(arr)).toBeTruthy();
  });
});

test("is array sorted? sad", () => {
  unSortedArrays.forEach((arr) => {
    expect(IsArraySorted(arr)).toBeFalsy();
  });
});

test("swap", () => {
  const arr = [1, 2];
  swap(arr, 0, 1);
  expect(arr[1]).toBe(1);
  expect(arr[0]).toBe(2);
});

test("bubble sort - happy", () => {
  sortedArrays.forEach((arr) => {
    expect(IsArraySorted(BubbleSort(arr))).toBeTruthy();
  });

  unSortedArrays.forEach((arr) => {
    expect(IsArraySorted(BubbleSort(arr))).toBeTruthy();
  });
});
