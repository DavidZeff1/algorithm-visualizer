import Step from "../types/step";

export default class Animator {
  isCancelled: boolean;
  isPaused: boolean;
  animationSteps: Step[];
  constructor(animationSteps: Step[]) {
    this.animationSteps = animationSteps;
    this.isCancelled = false;
    this.isPaused = false;
  }

  async swapAnimation(id1: number, id2: number): Promise<void> {
    return new Promise((resolve) => {
      const element1 = document.getElementById(`element-${id1}`);
      const element2 = document.getElementById(`element-${id2}`);
      if (!element1 || !element2) {
        resolve();
        return;
      }
      element1.classList.add("swapping");
      element2.classList.add("swapping");

      const transform1 = element1.style.transform;
      const transform2 = element2.style.transform;
      element1.style.transform = transform2;
      element2.style.transform = transform1;

      setTimeout(() => {
        if (this.isCancelled) {
          resolve();
          return;
        }
        element1.classList.remove("swapping");
        element2.classList.remove("swapping");
        resolve();
      }, 1600);
    });
  }

  async compareAnimation(id1: number, id2: number): Promise<void> {
    return new Promise((resolve) => {
      const element1 = document.getElementById(`element-${id1}`);
      const element2 = document.getElementById(`element-${id2}`);
      if (!element1 || !element2) {
        resolve();
        return;
      }
      element1.classList.add("comparing");
      element2.classList.add("comparing");

      setTimeout(() => {
        if (this.isCancelled) {
          resolve();
          return;
        }
        element1.classList.remove("comparing");
        element2.classList.remove("comparing");
        resolve();
      }, 1100);
    });
  }

  async delay(ms: number): Promise<void> {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (this.isCancelled) {
          resolve();
          return;
        }
        resolve();
      }, ms);
    });
  }

  async runAnimations(): Promise<void> {
    for (let i = 0; i < this.animationSteps.length; i++) {
      while (this.isPaused) {
        await new Promise<void>((resolve) => {
          setTimeout(() => {
            resolve();
            return;
          }, 300);
        });
      }
      if (this.isCancelled) {
        return;
      }
      await this.delay(300);
      if (this.isCancelled) {
        return;
      }
      if (this.animationSteps[i].type == "compare") {
        await this.compareAnimation(
          this.animationSteps[i].id1,
          this.animationSteps[i].id2
        );
      } else if (this.animationSteps[i].type == "swap") {
        await this.swapAnimation(
          this.animationSteps[i].id1,
          this.animationSteps[i].id2
        );
      }
      if (this.isCancelled) {
        return;
      }
    }
  }

  setCancel() {
    this.isCancelled = true;
  }
  setPause() {
    this.isPaused = !this.isPaused;
  }
}
