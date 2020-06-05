import playerController from './playerController';

test('Player has a name', () => {
  const player = playerController.addPlayer('Marshall', 'O');
  console.log('HE', player);
  expect(player.name).toBe('Marshall');
});

it('Adds mark to box', () => {
  const move = new playerController.addMove();
  move.addMove();
  expect(move.addMarker('move')).toEqual(['move']);
});

test('Marshall is the current player', () => {
  expect(activePlayer()).toBe(true);
});

test('Winner is player X', () => {
  expect(addWinner()).toBeTruthy();
});
