import Animator from "./ui/animator";
import bubbleSort from "./entities/BubbleSort";
import { FrameInitializer } from "./ui/frameInitializer";
const frameInitializer = new FrameInitializer();
const playbutton = document.getElementById("play-button");
const pauseButton = document.getElementById("pause-button");
const animatorList: Animator[] = [];
if (playbutton) {
  playbutton.onclick = () => {
    frameInitializer.reset();
    while (animatorList.length > 0) {
      animatorList.pop()?.setCancel();
    }
    const arr = document.getElementById("array-type") as HTMLSelectElement;
    const array = JSON.parse(arr.value);
    frameInitializer.initialize(array);
    const animator = new Animator(bubbleSort(array));
    animatorList.push(animator);
    if (pauseButton) {
      pauseButton.onclick = () => {
        animatorList.forEach((animator) => {
          animator.setPause();
        });
      };
    }
    animator.runAnimations();
  };
}
