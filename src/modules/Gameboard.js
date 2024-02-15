import Ship from "./Ship.js";

class Gameboard {
  constructor() {
    this.board = [];
    this.missedAttacks = [];
    this.createBoard();
  }

  createBoard() {
    for (let i = 0; i < 10; i++) {
      this.board[i] = [];
      this.missedAttacks[i] = [];
      for (let j = 0; j < 10; j++) {
        this.board[i][j] = null;
        this.missedAttacks[i][j] = null;
      }
    }
  }

  placeShip(ship, X, Y, direction) {
    if (direction === "horizontal") {
      if (Y + ship.length > 10) return false;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[X][Y + i] !== null) return false;
        this.board[X][Y + i] = ship;
      }
    } else if (direction === "vertical") {
      if (X + ship.length > 10) return false;
      for (let i = 0; i < ship.length; i++) {
        if (this.board[X + i][Y] !== null) return false;
        this.board[X + i][Y] = ship;
      }
    } else {
      return false;
    }
    return true;
  }

  initShip() {
    const submarine = new Ship(3);
    return this.placeShip(submarine, 3, 3, "vertical");
  }

  receiveAttack(X, Y) {
    if (X < 0 || X >= 10 || Y < 0 || Y >= 10) return false;
    const target = this.board[X][Y];

    if (target instanceof Ship) {
      target.hit("x");
      return true;
    } else {
      this.missedAttacks[X][Y] = "x";
      return false;
    }
  }

  gameOver() {
    let emptyBoard = true;
    for (let i = 0; i < 10; i++) {
      for (let j = 0; j < 10; j++) {
        if (this.board[i][j]) {
          emptyBoard = false;
          if (!this.board[i][j].isSunk()) {
            return false;
          }
        }
      }
    }
    return emptyBoard ? false : true;
  }
}

export default Gameboard;
