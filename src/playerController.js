const playerController = (() => {
  class Player {
    constructor(name, symbol) {
      this.name = name;
      this.moves = [];
      this.symbol = symbol;
      this.winner = false;
      this.active = false;
    }
  }

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

export default playerController;
