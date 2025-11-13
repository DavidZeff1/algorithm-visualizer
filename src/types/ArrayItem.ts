export class ArrayItem {
  swapped: boolean | null;
  compared: boolean | null;
  id: number | null;
  heightOffset = 3;
  leftOffset = 5;
  height: number | null;
  left: number | null;
  constructor(
    swapped: boolean | null,
    compared: boolean | null,
    id: number | null,
    index: number | null
  ) {
    this.compared = compared;
    this.swapped = swapped;
    this.id = id;
    this.height = id ? id * this.heightOffset : this.heightOffset;
    this.left = index && index * this.leftOffset;
  }
}
