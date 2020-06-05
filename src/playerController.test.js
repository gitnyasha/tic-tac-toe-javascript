import playerController from './playerController';

test('Player has a name', () => {
  const player = playerController.addPlayer('Marshall', 'O');
  expect(player.name).toBe('Marshall');
});
