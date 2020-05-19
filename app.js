//konyan,[0,1],0,X

const playerController = (() => {
  var Player = function (name, symbol) {
    this.name = name;
    this.moves = [];
    this.symbol = symbol;
    this.winner = false;
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
  };
})();

var displayController = (function () {
  //game logic
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

  return {
    init: function () {
      var play1 = playerController.addPlayer("Nyan", "X");
      var play2 = playerController.addPlayer("MarShall", "O");
      console.log(play1, play2);
    },
  };
})(playerController);

globalController.init();
