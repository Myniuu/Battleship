import Gameboard from "../Gameboard";
import Ship from "../Ship";

let gameboard;
let ship;

beforeEach(() => {
  gameboard = new Gameboard();
  ship = new Ship(3);
});

test("should create a board with 10 rows", () => {
  expect(gameboard.board.length).toBe(10);
});

test("each row should have 10 columns", () => {
  for (let i = 0; i < gameboard.board.length; i++) {
    expect(gameboard.board[i].length).toBe(10);
  }
});

test("each cell should be initialized as null", () => {
  for (let i = 0; i < gameboard.board.length; i++) {
    for (let j = 0; j < gameboard.board[i].length; j++) {
      expect(gameboard.board[i][j]).toBeNull();
    }
  }
});

test("places a ship", () => {
  const startX = 1;
  const startY = 1;
  gameboard.placeShip(ship, startX, startY, "vertical");

  for (let i = 0; i < ship.length; i++) {
    expect(gameboard.board[startX + i][startY]).toEqual(ship);
  }

  expect(gameboard.board[startX - 1][startY]).toBeNull();
  expect(gameboard.board[startX + ship.length][startY]).toBeNull();
});

test("is ship receive attack", () => {
  const startX = 1;
  const startY = 1;
  gameboard.placeShip(ship, startX, startY, "vertical");

  expect(gameboard.receiveAttack(1, 1)).toBe(true);
  expect(gameboard.receiveAttack(2, 1)).toBe(true);
  expect(gameboard.receiveAttack(3, 1)).toBe(true);

  expect(gameboard.receiveAttack(4, 5)).toBe(false);
});

test("is game over ?", () => {
  const startX = 1;
  const startY = 1;
  gameboard.placeShip(ship, startX, startY, "vertical");
  gameboard.receiveAttack(1, 1);
  gameboard.receiveAttack(2, 1);
  gameboard.receiveAttack(3, 1);

  expect(gameboard.gameOver()).toBe(true);
});
