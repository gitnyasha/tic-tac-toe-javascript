//konyan,[0,1],0,X
const playerController = (() => {
  var Player = function (name, symbol) {
    this.name = name;
    this.moves = [];
    this.symbol = symbol;
    this.winner = false;
    this.active = false;
  };
  return {
    addPlayer: function (name, symbol) {
      return new Player(name, symbol);
    },
    addMove: function (move) {
      this.moves.push(move);
    },

    addWinener: function (win) {
      this.winner = true;
    },

    activePlayer: function (active) {
      this.active = active;
    },
  };
})();

var gameBoardController = (function () {
  //display the baord
  var GameBoard = function (xPlayer, oPlayer) {
    this.xPlayer = xPlayer;
    this.oPlayer = oPlayer;
    this.status = "Running";
    this.currentPlay = xPlayer;
    this.winner = null;
    this.playCount = 0;
  };

  var boardWinner = function (game) {
    const board = document.getElementsByClassName("box");
    document.getElementById("game-status").innerHTML = "status = running";

    for (let i = 0; i < board.length; i++) {
      if (game.playCount < 9) {
        board[i].addEventListener("click", function () {
          if (board[i].innerHTML.trim() == "" && game.status == "Running") {
            board[i].innerHTML = game.currentPlay.symbol;
            if (game.currentPlay.symbol == "X") {
              game.currentPlay = game.oPlayer;
            } else {
              game.currentPlay = game.xPlayer;
            }
            document.getElementById("player").innerHTML = game.currentPlay.name;

            if (
              board[0].innerHTML == board[1].innerHTML &&
              board[1].innerHTML == board[2].innerHTML &&
              board[0].innerHTML.trim() != ""
            ) {
              showWinner(game);
            } else if (
              board[3].innerHTML == board[4].innerHTML &&
              board[4].innerHTML == board[5].innerHTML &&
              board[3].innerHTML.trim() != ""
            ) {
              showWinner(game);
            } else if (
              board[6].innerHTML == board[7].innerHTML &&
              board[7].innerHTML == board[8].innerHTML &&
              board[6].innerHTML.trim() != ""
            ) {
              showWinner(game);
            } else if (
              board[0].innerHTML == board[3].innerHTML &&
              board[3].innerHTML == board[6].innerHTML &&
              board[0].innerHTML.trim() != ""
            ) {
              showWinner(game);
            } else if (
              board[1].innerHTML == board[4].innerHTML &&
              board[4].innerHTML == board[7].innerHTML &&
              board[1].innerHTML.trim() != ""
            ) {
              showWinner(game);
            } else if (
              board[2].innerHTML == board[5].innerHTML &&
              board[5].innerHTML == board[8].innerHTML &&
              board[2].innerHTML.trim() != ""
            ) {
              showWinner(game);
            } else if (
              board[0].innerHTML == board[4].innerHTML &&
              board[4].innerHTML == board[8].innerHTML &&
              board[0].innerHTML.trim() != ""
            ) {
              showWinner(game);
            } else if (
              board[2].innerHTML == board[4].innerHTML &&
              board[4].innerHTML == board[6].innerHTML &&
              board[2].innerHTML.trim() != ""
            ) {
              showWinner(game);
            } else {
              game.playCount++;
              if (game.playCount == 9) {
                document.getElementById("reset").classList = "";
              }
            }
          }
        });
      } else {
        console.log("PlAY");
      }
    }
  };

  var showWinner = function (game) {
    document.getElementById("winner").innerHTML = "with 3 straight symbols";
    document.getElementById("message").style.display = "block";
    document.getElementById("game-status").innerHTML = "status = game over";
    game.status = "Game Over";
    game.winner = game.currentPlay;
    document.getElementById("reset").classList = "";
  };

  return {
    showBoard: function (game) {
      boardWinner(game);
    },

    newGame: function (xPlayer, oPlayer) {
      return new GameBoard(xPlayer, oPlayer);
    },
  };
})();

var globalController = (function (playerController, gameBoardController) {
  //controller that links other modules

  var startGame = function (event) {
    event.preventDefault();
    const player1Name = document.getElementById("player-1").value;
    const player2Name = document.getElementById("player-2").value;
    var play1 = playerController.addPlayer(player1Name, "X");
    var play2 = playerController.addPlayer(player2Name, "O");

    //SHOW TABLE
    document.querySelector(".table__header").classList = "table__header";
    document.getElementById("table").classList = "";

    //HIDE FORM
    document.querySelector(".game-create").classList = "game-create hide";

    document.getElementById("player").innerHTML = play1.name;
    document.getElementById("player").value = play1.symbol;

    var game = gameBoardController.newGame(play1, play2);
    console.log("GAME", game);
    gameBoardController.showBoard(game);
  };

  var setupEventListener = function () {
    const board = document.getElementsByClassName("box");
    document.getElementById("reset").addEventListener("click", function () {
      for (let i = 0; i < board.length; i++) {
        board[i].innerHTML = "";
        board[i].style.backgroundColor = "#dee9ec";
        board[i].style.color = "black";
      }
      //HIDE TABLE
      document.querySelector(".table__header").classList = "table__header hide";
      document.getElementById("table").classList = "hide";
      document.getElementById("reset").classList = "hide";
      document.getElementById("message").style.display = "none";

      //HIDE FORM
      document.querySelector(".game-create").classList = "game-create";
    });

    document
      .querySelector(".game-create")
      .addEventListener("submit", startGame);
  };

  return {
    init: function () {
      setupEventListener();
    },
  };
})(playerController, gameBoardController);

globalController.init();
