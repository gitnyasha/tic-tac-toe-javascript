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

var displayController = (function () {
  //game logic

  var placeMark = function (player) {};
  return {};
})();

var gameBoard = (function () {
  //display the baord
  const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
})();

var globalController = (function (playerController) {
  //controller that links other modules

  document.querySelector(".box");

  return {
    init: function () {
      var play1 = playerController.addPlayer("Nyan", "X");
      var play2 = playerController.addPlayer("MarShall", "O");
      console.log(play1, play2);
    },
  };
})(playerController);

globalController.init();

// // var displayController = (function () {})();

// var gameBoard = (function () {
//   const board = document.getElementsByClassName("box");

//   for (let i = 0; i < board.length; i++) {
//     board[i].addEventListener("click", function () {
//       if (board[i].innerHTML.trim() == "" && gamePlaying == "Running") {
//         board[i].innerHTML = currentPlayer;
//         currentPlayer = currentPlayer == "x" ? "o" : "x";
//         document.getElementById("player").innerHTML = currentPlayer;
//         if (
//           board[0].innerHTML == board[1].innerHTML &&
//           board[1].innerHTML == board[2].innerHTML &&
//           board[0].innerHTML.trim() != ""
//         ) {
//           showWinner();
//         } else if (
//           board[3].innerHTML == board[4].innerHTML &&
//           board[4].innerHTML == board[5].innerHTML &&
//           board[3].innerHTML.trim() != ""
//         ) {
//           showWinner();
//         } else if (
//           board[6].innerHTML == board[7].innerHTML &&
//           board[7].innerHTML == board[8].innerHTML &&
//           board[6].innerHTML.trim() != ""
//         ) {
//           showWinner();
//         } else if (
//           board[0].innerHTML == board[3].innerHTML &&
//           board[3].innerHTML == board[6].innerHTML &&
//           board[0].innerHTML.trim() != ""
//         ) {
//           showWinner();
//         } else if (
//           board[1].innerHTML == board[4].innerHTML &&
//           board[4].innerHTML == board[7].innerHTML &&
//           board[1].innerHTML.trim() != ""
//         ) {
//           showWinner();
//         } else if (
//           board[2].innerHTML == board[5].innerHTML &&
//           board[5].innerHTML == board[8].innerHTML &&
//           board[2].innerHTML.trim() != ""
//         ) {
//           showWinner();
//         } else if (
//           board[0].innerHTML == board[4].innerHTML &&
//           board[4].innerHTML == board[8].innerHTML &&
//           board[0].innerHTML.trim() != ""
//         ) {
//           showWinner();
//         } else if (
//           board[2].innerHTML == board[4].innerHTML &&
//           board[4].innerHTML == board[6].innerHTML &&
//           board[2].innerHTML.trim() != ""
//         ) {
//           showWinner();
//         }
//       }
//     });
//   }

//   return {
//     showBoard: function () {
//       board;
//     },
//   };
// })();

// // var globalController = (function (gameBoard, displayController) {
// //   //controller that links other modules
// // })(gameBoard, displayController);

// let currentPlayer = "x";

// let gamePlaying = "Running";

// document.getElementById("reset").addEventListener("click", function () {
//   for (let i = 0; i < board.length; i++) {
//     board[i].innerHTML = "";
//     board[i].style.backgroundColor = "#dee9ec";
//     board[i].style.color = "black";
//   }
//   currentPlayer = "x";
//   document.getElementById("message").style.display = "none";
//   document.getElementById("player").innerHTML = "X";
//   gamePlaying = "Running";
// });

// //displays the winner
// function showWinner() {
//   document.getElementById("winner").innerHTML =
//     currentPlayer == "x" ? "O" : "X";
//   document.getElementById("message").style.display = "block";
//   gamePlaying = "Game Over";
// }
