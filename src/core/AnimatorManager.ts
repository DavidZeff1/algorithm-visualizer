import Animator from "../ui/animator";

export class AnimatorManager {
  private animators: Animator[] = [];

  cancelAll() {
    while (this.animators.length > 0) {
      this.animators.pop()?.setCancel();
    }
  }

  pauseAll() {
    this.animators.forEach((animator) => animator.setPause());
  }

  run(animator: Animator) {
    this.animators.push(animator);
    animator.runAnimations();
  }
}
