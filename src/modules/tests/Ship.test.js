import Ship from "../Ship";

const ship = new Ship(3);

test("Adds and initializes a ship", () => {
  expect(ship.length).toBe(3);
  expect(ship.hits).toEqual([]);
});

test("takes a hit", () => {
  expect(ship.hit(4)).toEqual([4]);
});

test("is ship sunk?", () => {
  expect(ship.isSunk()).toBe(false);

  ship.hit(0);
  ship.hit(1);
  ship.hit(1);
  expect(ship.isSunk()).toBe(true);
});
