type SortType = "Bubble Sort" | "Insertion Sort" | "Selection Sort";

type ControlsOptions = {
  onPlay: (array: number[], sortType: SortType) => void;
  onPause: () => void;
};

export class Controls {
  private playButton: HTMLButtonElement | null;
  private pauseButton: HTMLButtonElement | null;
  private arraySelect: HTMLSelectElement | null;
  private sortSelect: HTMLSelectElement | null;

  constructor(private options: ControlsOptions) {
    this.playButton = document.getElementById(
      "play-button"
    ) as HTMLButtonElement | null;
    this.pauseButton = document.getElementById(
      "pause-button"
    ) as HTMLButtonElement | null;
    this.arraySelect = document.getElementById(
      "array-type"
    ) as HTMLSelectElement | null;
    this.sortSelect = document.getElementById(
      "sort-type"
    ) as HTMLSelectElement | null;

    this.bindEvents();
  }

  private bindEvents() {
    if (this.playButton) {
      this.playButton.onclick = () => this.handlePlay();
    }

    if (this.pauseButton) {
      this.pauseButton.onclick = () => this.options.onPause();
    }
  }

  private handlePlay() {
    if (!this.arraySelect || !this.sortSelect) return;

    const array = JSON.parse(this.arraySelect.value) as number[];
    const sortType = this.sortSelect.value as SortType;

    this.options.onPlay(array, sortType);
  }
}
