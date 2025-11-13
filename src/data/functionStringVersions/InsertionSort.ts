export default `
function insertionSort(arr: number[]): Step[] {
  for (let i = 1; i < arr.length; i++) {
    let k = i;
    while (k > 0) {
      if (arr[k] < arr[k - 1]) {
        const temp = arr[k];
        arr[k] = arr[k - 1];
        arr[k - 1] = temp;
        k--;
      } else {
        break;
      }
    }
  }
}
`;
