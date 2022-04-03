import playerController from './playerController';

const gameBoardController = ((playerController) => {
  class GameBoard {
    constructor(xPlayer, oPlayer) {
      this.xPlayer = xPlayer;
      this.oPlayer = oPlayer;
      this.status = 'Running';
      this.currentPlay = xPlayer;
      this.winner = null;
      this.playCount = 0;
    }
  }

  const showWinner = (game) => {
    game.status = 'Game Over';
    game.winner =
      game.currentPlay.name === game.xPlayer.name ? game.xPlayer : game.oPlayer;
  };

  const showWinnerDOM = (game) => {
    document.getElementById('winner').innerHTML =
      game.currentPlay.name === game.xPlayer.name
        ? game.xPlayer.name
        : game.oPlayer.name;

    document.getElementById('message').style.display = 'block';
    document.getElementById('hideThis').style.display = 'none';
    document.getElementById('game-status').innerHTML = 'game over';

    document.getElementById('reset').classList = '';
  };

  // SHOW TABLE
  const showGameBoard = () => {
    document.querySelector('.table__header').classList = 'table__header';
    document.getElementById('table').classList = '';
  };

  // HIDE FORM
  const hidePlayerForm = () => {
    document.querySelector('.game-create').classList = 'game-create hide';
  };

  // Check Winner Move
  const checkWinningMove = (moves) => {
    const winConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];

    let returnVal = false;
    winConditions.forEach((val) => {
      if (val.every((win) => moves.indexOf(win) > -1)) {
        returnVal = true;
      }
    });
    return returnVal;
  };

  return {
    newGameBoard(player1, player2) {
      return new GameBoard(player1, player2);
    },

    showWinner,
    checkWinningMove,

    showBoard(game) {
      const board = document.getElementsByClassName('box');
      document.getElementById('game-status').innerHTML = 'status = running';

      for (let i = 0; i < board.length; i += 1) {
        if (game.playCount < 9) {
          board[i].addEventListener('click', () => {
            if (board[i].innerHTML.trim() === '' && game.status === 'Running') {
              board[i].innerHTML = game.currentPlay.symbol;

              if (game.currentPlay === game.xPlayer) {
                game.xPlayer.moves.push(i);
                if (checkWinningMove(game.xPlayer.moves)) {
                  showWinnerDOM(game);
                  showWinner(game);
                }
              } else {
                game.oPlayer.moves.push(i);
                if (checkWinningMove(game.oPlayer.moves)) {
                  showWinnerDOM(game);
                  showWinner(game);
                }
              }

              game.playCount += 1;
              game.currentPlay =
                game.currentPlay.symbol === 'X' ? game.oPlayer : game.xPlayer;
              document.getElementById('player').innerHTML =
                game.currentPlay.name;
              if (game.playCount === 9) {
                document.getElementById('game-status').innerHTML = 'Its a draw';
                document.getElementById('reset').classList = '';
                document.getElementById('hideThis').style.display = 'none';
              }
            }
          });
        }
      }
    },

    resetBoard() {
      const board = document.getElementsByClassName('box');

      for (let i = 0; i < board.length; i += 1) {
        board[i].innerHTML = '';
        board[i].style.backgroundColor = '#dee9ec';
        board[i].style.color = 'black';
      }
      // HIDE TABLE

      document.querySelector('.table__header').classList = 'table__header hide';
      document.getElementById('table').classList = 'hide';
      document.getElementById('reset').classList = 'hide';
      document.getElementById('message').style.display = 'none';

      // HIDE FORM
      document.querySelector('.game-create').classList = 'game-create';

      window.location.reload();
    },

    startNewBoard(event) {
      event.preventDefault();

      const player1Name = document.getElementById('player-1').value;
      document.getElementById('player-1').value = '';
      const player2Name = document.getElementById('player-2').value;
      document.getElementById('player-2').value = '';

      const play1 = playerController.addPlayer(player1Name, 'X');
      const play2 = playerController.addPlayer(player2Name, 'O');

      showGameBoard();
      hidePlayerForm();

      document.getElementById('player').innerHTML = play1.name;
      document.getElementById('player').value = play1.symbol;

      const game = new GameBoard(play1, play2);
      gameBoardController.showBoard(game);
    },
  };
})(playerController);

export default gameBoardController;
