import gameBoardController from './app.js';

describe('#checkWinningMove', () => {
  test('winning  combination', () => {
    gameBoardController.winConditions = ['1', '2', '3', '', '', '', '', '', ''];
    expect(gameBoardController.checkWinningMove()).toBe(true);
  });
});
