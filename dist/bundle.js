/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! exports provided: gameBoardController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"gameBoardController\", function() { return gameBoardController; });\n/* harmony import */ var _playerController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./playerController */ \"./src/playerController.js\");\n\n\nconst gameBoardController = ((playerController) => {\n  class GameBoard {\n    constructor(xPlayer, oPlayer) {\n      this.xPlayer = xPlayer;\n      this.oPlayer = oPlayer;\n      this.status = 'Running';\n      this.currentPlay = xPlayer;\n      this.winner = null;\n      this.playCount = 0;\n    }\n  }\n\n  const showWinner = (game) => {\n    document.getElementById('winner').innerHTML =\n      game.currentPlay.name === game.xPlayer.name\n        ? game.xPlayer.name\n        : game.oPlayer.name;\n    document.getElementById('message').style.display = 'block';\n    document.getElementById('hideThis').style.display = 'none';\n    document.getElementById('game-status').innerHTML = 'game over';\n    game.status = 'Game Over';\n    document.getElementById('reset').classList = '';\n  };\n\n  // SHOW TABLE\n  const showGameBoard = () => {\n    document.querySelector('.table__header').classList = 'table__header';\n    document.getElementById('table').classList = '';\n  };\n\n  // HIDE FORM\n  const hidePlayerForm = () => {\n    document.querySelector('.game-create').classList = 'game-create hide';\n  };\n\n  // Check Winner Move\n  const checkWinningMove = (moves) => {\n    const winConditions = [\n      [0, 1, 2],\n      [3, 4, 5],\n      [6, 7, 8],\n      [0, 3, 6],\n      [1, 4, 7],\n      [2, 5, 8],\n      [0, 4, 8],\n      [6, 4, 2],\n    ];\n\n    let returnVal = false;\n    winConditions.forEach((val) => {\n      if (val.every((win) => moves.indexOf(win) > -1)) {\n        returnVal = true;\n      }\n    });\n    return returnVal;\n  };\n\n  return {\n    showBoard(game) {\n      const board = document.getElementsByClassName('box');\n      document.getElementById('game-status').innerHTML = 'status = running';\n\n      for (let i = 0; i < board.length; i += 1) {\n        if (game.playCount < 9) {\n          board[i].addEventListener('click', () => {\n            if (board[i].innerHTML.trim() === '' && game.status === 'Running') {\n              board[i].innerHTML = game.currentPlay.symbol;\n\n              if (game.currentPlay === game.xPlayer) {\n                game.xPlayer.moves.push(i);\n                if (checkWinningMove(game.xPlayer.moves)) {\n                  showWinner(game);\n                }\n              } else {\n                game.oPlayer.moves.push(i);\n                if (checkWinningMove(game.oPlayer.moves)) {\n                  showWinner(game);\n                }\n              }\n\n              game.playCount += 1;\n              game.currentPlay =\n                game.currentPlay.symbol === 'X' ? game.oPlayer : game.xPlayer;\n              document.getElementById('player').innerHTML =\n                game.currentPlay.name;\n              if (game.playCount === 9) {\n                document.getElementById('game-status').innerHTML = 'Its a draw';\n                document.getElementById('reset').classList = '';\n                document.getElementById('hideThis').style.display = 'none';\n              }\n            }\n          });\n        }\n      }\n    },\n\n    resetBoard() {\n      const board = document.getElementsByClassName('box');\n\n      for (let i = 0; i < board.length; i += 1) {\n        board[i].innerHTML = '';\n        board[i].style.backgroundColor = '#dee9ec';\n        board[i].style.color = 'black';\n      }\n      // HIDE TABLE\n\n      document.querySelector('.table__header').classList = 'table__header hide';\n      document.getElementById('table').classList = 'hide';\n      document.getElementById('reset').classList = 'hide';\n      document.getElementById('message').style.display = 'none';\n\n      // HIDE FORM\n      document.querySelector('.game-create').classList = 'game-create';\n\n      window.location.reload();\n    },\n\n    startNewBoard(event) {\n      event.preventDefault();\n\n      const player1Name = document.getElementById('player-1').value;\n      document.getElementById('player-1').value = '';\n      const player2Name = document.getElementById('player-2').value;\n      document.getElementById('player-2').value = '';\n\n      const play1 = playerController.addPlayer(player1Name, 'X');\n      const play2 = playerController.addPlayer(player2Name, 'O');\n\n      showGameBoard();\n      hidePlayerForm();\n\n      document.getElementById('player').innerHTML = play1.name;\n      document.getElementById('player').value = play1.symbol;\n\n      const game = new GameBoard(play1, play2);\n      gameBoardController.showBoard(game);\n    },\n  };\n})(_playerController__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\nconst globalController = ((gameBoardController) => {\n  // controller that links other modules\n\n  const setupEventListener = () => {\n    document\n      .getElementById('reset')\n      .addEventListener('click', gameBoardController.resetBoard);\n\n    document\n      .querySelector('.game-create')\n      .addEventListener('submit', gameBoardController.startNewBoard);\n  };\n\n  return {\n    init() {\n      setupEventListener();\n    },\n  };\n})(gameBoardController);\n\nglobalController.init();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/playerController.js":
/*!*********************************!*\
  !*** ./src/playerController.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst playerController = (() => {\n  class Player {\n    constructor(name, symbol) {\n      this.name = name;\n      this.moves = [];\n      this.symbol = symbol;\n      this.winner = false;\n      this.active = false;\n    }\n  }\n\n  return {\n    addPlayer(name, symbol) {\n      return new Player(name, symbol);\n    },\n    addMove(move) {\n      this.moves.push(move);\n    },\n\n    addWinener() {\n      this.winner = true;\n    },\n\n    activePlayer(active) {\n      this.active = active;\n    },\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (playerController);\n\n\n//# sourceURL=webpack:///./src/playerController.js?");

/***/ })

/******/ });