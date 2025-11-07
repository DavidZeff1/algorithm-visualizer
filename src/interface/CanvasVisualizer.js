export default class CanvasVisualizer {
  constructor(canvasElement) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext("2d");
    this.isAnimating = false;
    this.currentStep = 0;
  }

  animate(steps, delayMs) {
    this.steps = steps;
    this.delayMs = delayMs;
    this.currentStep = 0;
    this.isAnimating = true;

    this.animateNextStep();
  }

  animateNextStep() {
    if (!this.isAnimating || this.currentStep >= this.steps.length) {
      return;
    }

    const step = this.steps[this.currentStep];

    // Draw the current array state
    this.drawBars(step.array, step.indices, step.type);

    this.currentStep++;
    setTimeout(() => this.animateNextStep(), this.delayMs);
  }

  drawBars(array, highlightIndices, highlightType) {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    const barWidth = this.canvas.width / array.length;

    array.forEach((value, index) => {
      const barHeight = (value / Math.max(...array)) * this.canvas.height;

      // Choose color based on if this bar is highlighted
      if (highlightIndices.includes(index)) {
        this.ctx.fillStyle = highlightType === "swap" ? "red" : "yellow";
      } else {
        this.ctx.fillStyle = "blue";
      }

      this.ctx.fillRect(
        index * barWidth,
        this.canvas.height - barHeight,
        barWidth - 2,
        barHeight
      );
    });
  }

  showError(message) {
    alert(message); // Simple error display
  }
}
