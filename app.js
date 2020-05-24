const playerController = (() => {
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

const gameBoardController = ((playerController) => {
  const GameBoard = function (xPlayer, oPlayer) {
    this.xPlayer = xPlayer;
    this.oPlayer = oPlayer;
    this.status = "Running";
    this.currentPlay = xPlayer;
    this.winner = null;
    this.playCount = 0;
  };

  const showWinner = function (game) {
    document.getElementById("winner").innerHTML = game.currentPlay.name === game.oPlayer.name
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
        console.log(moves);
        returnVal = true;
      }
    });
    return returnVal;
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

              console.log("Trim", game);

              if (game.currentPlay === game.xPlayer) {
                game.xPlayer.moves.push(i);
                if (checkWinningMove(game.xPlayer.moves)) {
                  showWinner(game);
                }
              } else {
                game.oPlayer.moves.push(i);
                if (checkWinningMove(game.oPlayer.moves)) {
                  showWinner(game);
                }
              }

              game.playCount += 1;
              game.currentPlay = game.currentPlay.symbol === "X" ? game.oPlayer : game.xPlayer;
              document.getElementById("player").innerHTML = game.currentPlay.name;

              if (game.playCount === 9) {
                document.getElementById("game-status").innerHTML = "status = game withdraw";
                document.getElementById("reset").classList = "";
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

      window.location.reload();
    },

    startNewBoard(event) {
      event.preventDefault();

      const player1Name = document.getElementById("player-1").value;
      document.getElementById("player-1").value = "";
      const player2Name = document.getElementById("player-2").value;
      document.getElementById("player-2").value = "";

      const play1 = playerController.addPlayer(player1Name, "X");
      const play2 = playerController.addPlayer(player2Name, "O");

      showGameBoard();
      hidePlayerForm();

      document.getElementById("player").innerHTML = play1.name;
      document.getElementById("player").value = play1.symbol;

      const game = new GameBoard(play1, play2);
      gameBoardController.showBoard(game);
    },
  };
})(playerController);

const globalController = ((gameBoardController) => {
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
