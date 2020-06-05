import gameBoardController from './gameBoardController';

const globalController = ((gameBoardController) => {
  // controller that links other modules

  const setupEventListener = () => {
    document
      .getElementById('reset')
      .addEventListener('click', gameBoardController.resetBoard);

    document
      .querySelector('.game-create')
      .addEventListener('submit', gameBoardController.startNewBoard);
  };

  return {
    init() {
      setupEventListener();
    },
  };
})(gameBoardController);

globalController.init();
