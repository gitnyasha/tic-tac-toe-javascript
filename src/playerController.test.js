import playerController from './playerController';

test('Player has a name', () => {
  const player = playerController.addPlayer('Marshall', 'O');
  console.log('HE', player);
  expect(player.name).toBe('Marshall');
});
