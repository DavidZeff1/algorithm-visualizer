export default class BubbleSort {
  constructor(array) {
    this.array = [...array]; // Copy the array
    this.steps = []; // Store each step for visualization
  }

  execute() {
    console.log(`L1:BUBBLE SORT}\n`);
    const arr = this.array;

    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - i - 1; j++) {
        // Record this step: comparing j and j+1
        this.steps.push({
          type: "compare",
          indices: [j, j + 1],
          array: [...arr],
        });

        if (arr[j] > arr[j + 1]) {
          // Swap
          [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

          // Record the swap
          this.steps.push({
            type: "swap",
            indices: [j, j + 1],
            array: [...arr],
          });
        }
      }
    }
    console.log(`L1:BUBBLE SORT RETURNING${[...this.steps]}}\n`);
    return this.steps;
  }
}
