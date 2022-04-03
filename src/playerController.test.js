import playerController from './playerController';

const player = playerController.addPlayer('Marshall', 'O');

test('Player has a name', () => {
  expect(player.name).toBe('Marshall');
});

test('If player can make a move', () => {
  expect(playerController.addPlayer(player.moves)).toBeTruthy();
});
