module.exports = (array) => {
  let isSorted = true;
  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] > array[i + 1]) {
      isSorted = false;
      break;
    }
  }
  return isSorted;
};
