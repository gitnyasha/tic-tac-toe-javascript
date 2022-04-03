import gameBoardController from './gameBoardController';
import playerController from './playerController';

const player1 = playerController.addPlayer('Nyan', 'X');
const player2 = playerController.addPlayer('Marshall', 'O');
const gameBoard = gameBoardController.newGameBoard(player1, player2);

test('Create New Game Board', () => {
  expect(gameBoard).not.toBeNull();
});

test('Game Board statue should be Running', () => {
  expect(gameBoard.status).toBe('Running');
});

test('Game board has xPalyer', () => {
  expect(gameBoard.xPlayer).not.toBeNull();
});

test("Game board's xPlayer name is Nyan", () => {
  expect(gameBoard.xPlayer.name).toBe('Nyan');
});

test("Game board's oPlayer name is Marshall", () => {
  expect(gameBoard.oPlayer.name).toBe('Marshall');
});

test('First Player should be always player1', () => {
  expect(gameBoard.currentPlay).toEqual(player1);
});

test('If xPlayer moves winner condition,return true', () => {
  player1.moves.push(0);
  player1.moves.push(1);
  player1.moves.push(2);
  expect(gameBoardController.checkWinningMove(player1.moves)).toBeTruthy();
});

test('If one player win then game, gameboard status will change to game-over', () => {
  gameBoardController.showWinner(gameBoard);
  expect(gameBoard.status).toBe('Game Over');
});

test('game board winner is palyer1 ', () => {
  expect(gameBoard.winner).toEqual(player1);
});
