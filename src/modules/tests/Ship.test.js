import Ship from "../Ship";

let ship;

beforeEach(() => {
  ship = new Ship(3);
});

test("Adds and initializes a ship", () => {
  expect(ship.length).toBe(3);
  expect(ship.hits).toEqual([]);
});

test("takes a hit", () => {
  expect(ship.hit("x")).toEqual(1);
});

test("is ship sunk?", () => {
  expect(ship.isSunk()).toBe(false);

  ship.hit("x");
  ship.hit("x");
  ship.hit("x");
  expect(ship.isSunk()).toBe(true);
});
