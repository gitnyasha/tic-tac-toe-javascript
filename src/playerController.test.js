import playerController from './playerController';

test('Player has a name', () => {
  const player = playerController.addPlayer('Marshall', 'O');
  console.log('HE', player);
  expect(player.name).toBe('Marshall');
});

test('Player 1 turn to move', () => {
  const addmove = playerController.addMove('O');
  expect(addmove.move).toBe(true);
});

test('Marshall is the current player', () => {
  const current = playerController.activePlayer('Marshall');
  expect(current.active).toBe('Marshall');
});

test('Winner is player X', () => {
  const won = playerController.addWinner('Marshall');
  expect(won.winner).toBe('Marshall');
});
