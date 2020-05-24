const playerController = (function () {
  const Player = function (name, symbol) {
    this.name = name;
    this.moves = [];
    this.symbol = symbol;
    this.winner = false;
    this.active = false;
  };
  return {
    addPlayer(name, symbol) {
      return new Player(name, symbol);
    },
    addMove(move) {
      this.moves.push(move);
    },

    addWinener() {
      this.winner = true;
    },

    activePlayer(active) {
      this.active = active;
    },
  };
})();

const gameBoardController = (function (playerController) {
  const GameBoard = function (xPlayer, oPlayer) {
    this.xPlayer = xPlayer;
    this.oPlayer = oPlayer;
    this.status = "Running";
    this.currentPlay = xPlayer;
    this.winner = null;
    this.playCount = 0;
  };

  const showWinner = function (game) {
    document.getElementById("winner").innerHTML =
      game.currentPlay.name === game.oPlayer.name
        ? game.xPlayer.name
        : game.oPlayer.name;

    document.getElementById("message").style.display = "block";
    document.getElementById("game-status").innerHTML = "status = game over";
    game.status = "Game Over";
    document.getElementById("reset").classList = "";
  };

  // SHOW TABLE
  const showGameBoard = () => {
    document.querySelector(".table__header").classList = "table__header";
    document.getElementById("table").classList = "";
  };

  // HIDE FORM
  const hidePlayerForm = () => {
    document.querySelector(".game-create").classList = "game-create hide";
  };

  return {
    showBoard(game) {
      const board = document.getElementsByClassName("box");
      document.getElementById("game-status").innerHTML = "status = running";

      for (let i = 0; i < board.length; i += 1) {
        if (game.playCount < 9) {
          board[i].addEventListener("click", () => {
            if (board[i].innerHTML.trim() === "" && game.status === "Running") {
              board[i].innerHTML = game.currentPlay.symbol;
              game.currentPlay =
                game.currentPlay.symbol === "X" ? game.oPlayer : game.xPlayer;
              document.getElementById("player").innerHTML =
                game.currentPlay.name;

              if (
                board[0].innerHTML === board[1].innerHTML &&
                board[1].innerHTML === board[2].innerHTML &&
                board[0].innerHTML.trim() !== ""
              ) {
                showWinner(game);
              } else if (
                board[3].innerHTML === board[4].innerHTML &&
                board[4].innerHTML === board[5].innerHTML &&
                board[3].innerHTML.trim() !== ""
              ) {
                showWinner(game);
              } else if (
                board[6].innerHTML === board[7].innerHTML &&
                board[7].innerHTML === board[8].innerHTML &&
                board[6].innerHTML.trim() !== ""
              ) {
                showWinner(game);
              } else if (
                board[0].innerHTML === board[3].innerHTML &&
                board[3].innerHTML === board[6].innerHTML &&
                board[0].innerHTML.trim() !== ""
              ) {
                showWinner(game);
              } else if (
                board[1].innerHTML === board[4].innerHTML &&
                board[4].innerHTML === board[7].innerHTML &&
                board[1].innerHTML.trim() !== ""
              ) {
                showWinner(game);
              } else if (
                board[2].innerHTML === board[5].innerHTML &&
                board[5].innerHTML === board[8].innerHTML &&
                board[2].innerHTML.trim() !== ""
              ) {
                showWinner(game);
              } else if (
                board[0].innerHTML === board[4].innerHTML &&
                board[4].innerHTML === board[8].innerHTML &&
                board[0].innerHTML.trim() !== ""
              ) {
                showWinner(game);
              } else if (
                board[2].innerHTML === board[4].innerHTML &&
                board[4].innerHTML === board[6].innerHTML &&
                board[2].innerHTML.trim() !== ""
              ) {
                showWinner(game);
              } else {
                game.playCount += 1;
                if (game.playCount === 9) {
                  document.getElementById("game-status").innerHTML =
                    "status = game withdraw";
                  document.getElementById("reset").classList = "";
                }
              }
            }
          });
        }
      }
    },

    resetBoard() {
      const board = document.getElementsByClassName("box");

      for (let i = 0; i < board.length; i += 1) {
        board[i].innerHTML = "";
        board[i].style.backgroundColor = "#dee9ec";
        board[i].style.color = "black";
      }
      // HIDE TABLE

      document.querySelector(".table__header").classList = "table__header hide";
      document.getElementById("table").classList = "hide";
      document.getElementById("reset").classList = "hide";
      document.getElementById("message").style.display = "none";

      // HIDE FORM

      document.querySelector(".game-create").classList = "game-create";
    },

    startNewBoard(event) {
      event.preventDefault();

      const player1Name = document.getElementById("player-1").value;
      const player2Name = document.getElementById("player-2").value;

      const play1 = playerController.addPlayer(player1Name, "X");
      const play2 = playerController.addPlayer(player2Name, "O");

      showGameBoard();
      hidePlayerForm();

      document.getElementById("player").innerHTML = play1.name;
      document.getElementById("player").value = play1.symbol;

      const game = gameBoardController.newGame(play1, play2);
      gameBoardController.showBoard(game);
    },

    newGame(xPlayer, oPlayer) {
      return new GameBoard(xPlayer, oPlayer);
    },
  };
})(playerController);

const globalController = (function (gameBoardController) {
  // controller that links other modules

  const setupEventListener = () => {
    document
      .getElementById("reset")
      .addEventListener("click", gameBoardController.resetBoard);

    document
      .querySelector(".game-create")
      .addEventListener("submit", gameBoardController.startNewBoard);
  };

  return {
    init() {
      setupEventListener();
    },
  };
})(gameBoardController);

globalController.init();
