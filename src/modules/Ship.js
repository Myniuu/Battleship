export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [];
  }

  hit(point) {
    return this.hits.push(point);
  }

  isSunk() {
    return this.hits.length === this.length;
  }
}
