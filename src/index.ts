import Animator from "./ui/animator";
import { FrameInitializer } from "./ui/frameInitializer";
import { AnimatorManager } from "./core/AnimatorManager";
import { Controls } from "./ui/Controls";
import { SortFactory, SortType } from "./core/SortFactory";

const frameInitializer = new FrameInitializer();
const animatorManager = new AnimatorManager();

new Controls({
  onPlay: (array: number[], sortType: SortType) => {
    frameInitializer.reset();
    frameInitializer.initialize(array, sortType);
    animatorManager.cancelAll();
    const steps = SortFactory.create(sortType, array);
    const animator = new Animator(steps);
    animatorManager.run(animator);
  },

  onPause: () => {
    animatorManager.pauseAll();
  },
});
