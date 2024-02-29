import Player from "../Player";

let player;

beforeEach(() => {
  player = new Player();
});

test("check player move", () => {
  expect(player.attackCoordinates(1, 1)).toBe(true);
  expect(player.attackCoordinates(2, 4)).toBe(true);
  expect(player.attackCoordinates(1, 1)).toBe(false);
});

test("check ai move", () => {
  const coordinates = player.aiMove();
  const regex = /^\d+,\d+$/;
  expect(regex.test(coordinates)).toBe(true);
});

test("should return unique coordinates", () => {
  const coordinates1 = player.aiMove();
  const coordinates2 = player.aiMove();
  expect(coordinates1).not.toEqual(coordinates2);
});
