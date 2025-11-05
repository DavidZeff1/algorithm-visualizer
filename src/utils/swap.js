module.exports = function swap(arr, idx1, idx2) {
  temp = arr[idx2];
  arr[idx2] = arr[idx1];
  arr[idx1] = temp;

  return arr;
};
