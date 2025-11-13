export class Logger {
  loggerVisualizer: HTMLElement | null;

  constructor() {
    this.loggerVisualizer = document.getElementById("logger-visualizer");
  }
  log(message: string) {
    if (this.loggerVisualizer) {
      this.loggerVisualizer.textContent += `${this.time()} ${message}\n`;
    }
  }
  time() {
    const date = new Date();
    return `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
  }
  clear() {
    if (this.loggerVisualizer) {
      this.loggerVisualizer.textContent = "";
    }
  }
}
