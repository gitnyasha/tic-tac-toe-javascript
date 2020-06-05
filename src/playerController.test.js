import playerController from './playerController';

const player = playerController.addPlayer('MarShall', 'O');
console.log('HE', player);

test('Playe has a name', () => {
  expect(player.name).toBe('MarShall');
});
