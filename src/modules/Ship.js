export default class Ship {
  constructor(length) {
    this.length = length;
    this.hits = [];
  }

  hit(hitPoint) {
    this.hits.push(hitPoint);
    return this.hits;
  }

  isSunk() {
    return this.hits.length >= this.length;
  }
}
