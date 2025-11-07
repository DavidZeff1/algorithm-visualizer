import CanvasVisualizer from "./interface/CanvasVisualizer.js";
import VisualizerController from "./interface/VisualizerController.js";

// Wire everything together
const canvas = document.getElementById("visualizer");
const visualizer = new CanvasVisualizer(canvas);
const controller = new VisualizerController(visualizer);

console.log("L4: initialized app, created visualizer and controller\n");

document.getElementById("run").addEventListener("click", () => {
  const algorithm = document.getElementById("algorithm").value;
  const array = document.getElementById("array").value;
  const speed = document.getElementById("speed").value;
  console.log(
    `L4:controller handle button called input{${(algorithm, array, speed)}}\n`
  );
  controller.handleRunButton(algorithm, array, speed);
});
