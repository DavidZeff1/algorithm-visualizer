import VisualizeAlgorithmUseCase from "../usecase/VisualizeAlgorithmUseCase";

export default class VisualizerController {
  constructor(visualizer) {
    this.visualizer = visualizer; // This will draw stuff
    this.useCase = new VisualizeAlgorithmUseCase();
  }

  handleRunButton(algorithmName, arrayInput, speed) {
    // Convert string input to array
    console.log(`L3: INSIDE VISUALIZE CONTROLLER}\n`);
    const array = arrayInput.split(",").map((num) => parseInt(num));

    // Execute use case
    const result = this.useCase.execute(algorithmName, array, speed);
    console.log(`L3: INSIDE CONTROLLER RECIEVED${result}`);
    if (!result.success) {
      this.visualizer.showError(result.error);
      return;
    }

    // Tell visualizer to animate the steps
    this.visualizer.animate(result.steps, result.delayMs);
  }
}
