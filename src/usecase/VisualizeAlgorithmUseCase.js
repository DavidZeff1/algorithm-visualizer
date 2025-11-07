import BubbleSort from "../entities/BubbleSort";

export default class VisualizeAlgorithmUseCase {
  execute(algorithmName, inputArray, speed) {
    // Validate input
    console.log(`L2:INSIDE USE CASE}\n`);
    if (inputArray.length === 0) {
      return { success: false, error: "Array is empty" };
    }

    if (speed < 1 || speed > 10) {
      return { success: false, error: "Speed must be 1-10" };
    }

    // Get the right algorithm
    let algorithm;
    if (algorithmName === "bubble") {
      algorithm = new BubbleSort(inputArray);
    }
    //else if (algorithmName === "quick") {
    //   algorithm = new QuickSort(inputArray);
    // }

    // Execute and get steps
    const steps = algorithm.execute();
    console.log(
      `L2: RECIEVED ${steps} RETURNING ${{
        success: true,
        steps: steps,
        delayMs: 1000 / speed, // Convert speed to delay
      }}}\n`
    );

    return {
      success: true,
      steps: steps,
      delayMs: 1000 / speed, // Convert speed to delay
    };
  }
}
