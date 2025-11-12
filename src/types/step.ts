export default class Step {
  type: string;
  id1: number;
  id2: number;
  constructor(type: string, id1: number, id2: number) {
    this.type = type;
    this.id1 = id1;
    this.id2 = id2;
  }

  Animate(func: Function) {}
}
