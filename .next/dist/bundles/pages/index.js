module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(0);
var style__default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external__react_ = __webpack_require__(1);
var external__react__default = /*#__PURE__*/__webpack_require__.n(external__react_);

// EXTERNAL MODULE: external "immutable"
var external__immutable_ = __webpack_require__(4);
var external__immutable__default = /*#__PURE__*/__webpack_require__.n(external__immutable_);

// EXTERNAL MODULE: ./node_modules/next/node_modules/prop-types/index.js
var prop_types = __webpack_require__(5);
var prop_types_default = /*#__PURE__*/__webpack_require__.n(prop_types);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(10);
var head__default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "color"
var external__color_ = __webpack_require__(11);
var external__color__default = /*#__PURE__*/__webpack_require__.n(external__color_);

// EXTERNAL MODULE: external "react-input-range"
var external__react_input_range_ = __webpack_require__(12);
var external__react_input_range__default = /*#__PURE__*/__webpack_require__.n(external__react_input_range_);

// CONCATENATED MODULE: ./colors.js
var backGroundOrange = '#F4511E';
var backGroundGrey = '#546E7A';
var backGroundBlue = '#1B6B9B';
var backGroundGreen = '#7CDC1B';
var color1 = '##00ff00';
var color2 = '##006400';
var color3 = '##009600';
// CONCATENATED MODULE: ./input-range-style.js

 // eslint-disable-next-line import/no-extraneous-dependencies



2;
// eslint-dis3ble-next-line no-l3ne-blocks
{/* language=CSS */}
var Style = ["{padding:10px;font-size:16px;font-weight:bold;border:none;width:182px;}", ".input-range__slider{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#3f51b5;border:1px solid #3f51b5;border-radius:100%;cursor:pointer;display:block;height:1rem;margin-left:-0.5rem;margin-top:-0.65rem;outline:none;position:absolute;top:50%;-webkit-transition:-webkit-transform 0.3s ease-out,box-shadow 0.3s ease-out;-webkit-transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;width:1rem;}", ".input-range__slider:active{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}", ".input-range__slider:focus{box-shadow:0 0 0 5px rgba(63,81,181,0.2);}", ".input-range--disabled .input-range__slider{background:#cccccc;border:1px solid #cccccc;box-shadow:none;-webkit-transform:none;-ms-transform:none;transform:none;}", ".input-range__slider-container{-webkit-transition:left 0.3s ease-out;transition:left 0.3s ease-out;}", ".input-range__label{color:#aaaaaa;font-size:0.8rem;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);white-space:nowrap;}", ".input-range__label--min,.input-range__label--max{bottom:-1.4rem;position:absolute;}", ".input-range__label--min{left:0;}", ".input-range__label--max{right:0;}", ".input-range__label--value{position:absolute;top:-1.8rem;}", ".input-range__label-container{left:-50%;position:relative;}", ".input-range__label--max .input-range__label-container{left:50%;}", ".input-range__track{background:#eeeeee;border-radius:0.3rem;cursor:pointer;display:block;height:0.3rem;position:relative;-webkit-transition:left 0.3s ease-out,width 0.3s ease-out;transition:left 0.3s ease-out,width 0.3s ease-out;}", ".input-range--disabled .input-range__track{background:#eeeeee;}", ".input-range__track--background{left:0;margin-top:-0.15rem;position:absolute;right:0;top:50%;}", ".input-range__track--active{background:#3f51b5;}", ".input-range{height:1rem;position:relative;margin-top:1.2em;margin-bottom:1.4em;}", ".Popover{z-index:2000;}", ".Popover-body{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.5rem 1rem;background:white;border-radius:0.3rem;opacity:.95;box-shadow:rgba(0,0,0,0.12) 0 1px 6px,rgba(0,0,0,0.12) 0 1px 4px;font-size:14px;}", ".Popover-tipShape{fill:" + backGroundBlue + ";}", ".Popover-white .Popover-tipShape{fill:#00bcd4;}", ".Popover-white .Popover-body{background:white;}", ".btn{color:white;background-color:black;margin-bottom:30px;height:30px;width:50px;}", ".dropdown{display:inline-block;border:1px solid white;width:182px;}", ".dropdown-content{left:20px;display:none;background-color:#f1f1f1;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;top:50px;}", ".dropdown-content input.radio{color:black;padding:12px 16px;text-decoration:none;display:block;}", ".btns{background-color:#ddd;}", ".dropdown:hover .dropdown-content{display:block;}", ".dropdown:hover .group{background-color:" + color3 + ";color:" + color1 + ";}", ".dropbtn{width:130px;position:absolute;top:20px;left:20px;}", ".label{display:inline-block;width:100px;text-align:center;font-size:30px;margin-top:10px;color:" + color1 + ";}"];

Style.__hash = "3235046143";
Style.__scoped = [".jsx-2192072638{padding:10px;font-size:16px;font-weight:bold;border:none;width:182px;}", ".input-range__slider.jsx-2192072638{-webkit-appearance:none;-moz-appearance:none;appearance:none;background:#3f51b5;border:1px solid #3f51b5;border-radius:100%;cursor:pointer;display:block;height:1rem;margin-left:-0.5rem;margin-top:-0.65rem;outline:none;position:absolute;top:50%;-webkit-transition:-webkit-transform 0.3s ease-out,box-shadow 0.3s ease-out;-webkit-transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;transition:transform 0.3s ease-out,box-shadow 0.3s ease-out;width:1rem;}", ".input-range__slider.jsx-2192072638:active{-webkit-transform:scale(1.3);-ms-transform:scale(1.3);transform:scale(1.3);}", ".input-range__slider.jsx-2192072638:focus{box-shadow:0 0 0 5px rgba(63,81,181,0.2);}", ".input-range--disabled.jsx-2192072638 .input-range__slider.jsx-2192072638{background:#cccccc;border:1px solid #cccccc;box-shadow:none;-webkit-transform:none;-ms-transform:none;transform:none;}", ".input-range__slider-container.jsx-2192072638{-webkit-transition:left 0.3s ease-out;transition:left 0.3s ease-out;}", ".input-range__label.jsx-2192072638{color:#aaaaaa;font-size:0.8rem;-webkit-transform:translateZ(0);-ms-transform:translateZ(0);transform:translateZ(0);white-space:nowrap;}", ".input-range__label--min.jsx-2192072638,.input-range__label--max.jsx-2192072638{bottom:-1.4rem;position:absolute;}", ".input-range__label--min.jsx-2192072638{left:0;}", ".input-range__label--max.jsx-2192072638{right:0;}", ".input-range__label--value.jsx-2192072638{position:absolute;top:-1.8rem;}", ".input-range__label-container.jsx-2192072638{left:-50%;position:relative;}", ".input-range__label--max.jsx-2192072638 .input-range__label-container.jsx-2192072638{left:50%;}", ".input-range__track.jsx-2192072638{background:#eeeeee;border-radius:0.3rem;cursor:pointer;display:block;height:0.3rem;position:relative;-webkit-transition:left 0.3s ease-out,width 0.3s ease-out;transition:left 0.3s ease-out,width 0.3s ease-out;}", ".input-range--disabled.jsx-2192072638 .input-range__track.jsx-2192072638{background:#eeeeee;}", ".input-range__track--background.jsx-2192072638{left:0;margin-top:-0.15rem;position:absolute;right:0;top:50%;}", ".input-range__track--active.jsx-2192072638{background:#3f51b5;}", ".input-range.jsx-2192072638{height:1rem;position:relative;margin-top:1.2em;margin-bottom:1.4em;}", ".Popover.jsx-2192072638{z-index:2000;}", ".Popover-body.jsx-2192072638{display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;padding:.5rem 1rem;background:white;border-radius:0.3rem;opacity:.95;box-shadow:rgba(0,0,0,0.12) 0 1px 6px,rgba(0,0,0,0.12) 0 1px 4px;font-size:14px;}", ".Popover-tipShape.jsx-2192072638{fill:" + backGroundBlue + ";}", ".Popover-white.jsx-2192072638 .Popover-tipShape.jsx-2192072638{fill:#00bcd4;}", ".Popover-white.jsx-2192072638 .Popover-body.jsx-2192072638{background:white;}", ".btn.jsx-2192072638{color:white;background-color:black;margin-bottom:30px;height:30px;width:50px;}", ".dropdown.jsx-2192072638{display:inline-block;border:1px solid white;width:182px;}", ".dropdown-content.jsx-2192072638{left:20px;display:none;background-color:#f1f1f1;min-width:160px;box-shadow:0px 8px 16px 0px rgba(0,0,0,0.2);z-index:1;position:absolute;top:50px;}", ".dropdown-content.jsx-2192072638 input.radio.jsx-2192072638{color:black;padding:12px 16px;text-decoration:none;display:block;}", ".btns.jsx-2192072638{background-color:#ddd;}", ".dropdown.jsx-2192072638:hover .dropdown-content.jsx-2192072638{display:block;}", ".dropdown.jsx-2192072638:hover .group.jsx-2192072638{background-color:" + color3 + ";color:" + color1 + ";}", ".dropbtn.jsx-2192072638{width:130px;position:absolute;top:20px;left:20px;}", ".label.jsx-2192072638{display:inline-block;width:100px;text-align:center;font-size:30px;margin-top:10px;color:" + color1 + ";}"];
Style.__scopedHash = "2192072638";
/* harmony default export */ var input_range_style = (Style);
// CONCATENATED MODULE: ./sudoku.js
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function randomChoice(choices) {
  return choices[Math.floor(Math.random() * choices.length)];
}

function range(n) {
  return Array.from(Array(n).keys());
}

// TODO use immutable when this is all working
function makePuzzle() {
  while (true) {
    try {
      var _ret = function () {
        var puzzle = Array.from(Array(9).keys()).map(function () {
          return Array.from(Array(9).keys());
        });
        var rows = Array.from(Array(9).keys()).map(function () {
          return new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        var columns = Array.from(Array(9).keys()).map(function () {
          return new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        var squares = Array.from(Array(9).keys()).map(function () {
          return new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        });
        Array.from(Array(9).keys()).forEach(function (i) {
          Array.from(Array(9).keys()).forEach(function (j) {
            var row = rows[i];
            var column = columns[j];
            var square = squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)];
            var choices = [].concat(_toConsumableArray(row)).filter(function (x) {
              return column.has(x);
            }).filter(function (x) {
              return square.has(x);
            });
            var choice = randomChoice(choices);
            if (!choice) {
              // eslint-disable-next-line no-throw-literal
              throw 'dead end';
            }
            puzzle[i][j] = choice;
            column.delete(choice);
            row.delete(choice);
            square.delete(choice);
          });
        });
        return {
          v: puzzle
        };
      }();

      if ((typeof _ret === 'undefined' ? 'undefined' : _typeof(_ret)) === "object") return _ret.v;
    } catch (e) {
      // eslint-disable-next-line no-continue
      continue;
    }
  }
}

/**
 * Answers the question: can the cell (i,j) in the puzzle contain the number
 in cell "c"
 * @param puzzle
 * @param i
 * @param j
 * @param c
 */
function canBeA(puzzle, i, j, c) {
  var x = Math.floor(c / 9);
  var y = c % 9;
  var value = puzzle[x][y];
  if (puzzle[i][j] === value) return true;
  if (puzzle[i][j] > 0) return false;
  // if not the cell itself, and the mth cell of the group contains the value v, then "no"
  // eslint-disable-next-line guard-for-in,no-restricted-syntax
  for (var m in Array.from(Array(9).keys())) {
    var rowPeer = { x: m, y: j };
    var columnPeer = { x: i, y: m };
    var SquarePeer = {
      x: Math.floor(i / 3) * 3 + Math.floor(m / 3),
      y: Math.floor(j / 3) * 3 + m % 3
    };
    if (!(rowPeer.x === x && rowPeer.y === y) && puzzle[(rowPeer.x, rowPeer.y)] === value) return false;
    if (!(columnPeer.x === x && columnPeer.y === y) && puzzle[(columnPeer.x, columnPeer.y)] === value) return false;
    if (!(SquarePeer.x === x && SquarePeer.y === y) && puzzle[(SquarePeer.x, SquarePeer.y)] === value) return false;
  }
  return true;
}

/**
 *
 * @param a
 * @param b
 * @returns {boolean}
 */
function sudoku_isPeer(a, b) {
  if (!a || !b) return false;
  var squareA = Math.floor(a.x / 3) * 3 + Math.floor(a.y / 3);
  var squareB = Math.floor(b.x / 3) * 3 + Math.floor(b.y / 3);
  return a.x === b.x || a.y === b.y || squareA === squareB;
}

function pluck(allCells) {
  var n = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  var puzzle = JSON.parse(JSON.stringify(allCells));
  /**
     * starts with a set of all 81 cells, and tries to remove one (randomly) at a time,
     * but not before checking that the cell can still be deduced from the remaining cells.
     * @type {Set}
     */
  var cells = new Set(Array.from(Array(81).keys()));
  var cellsLeft = new Set(cells);

  var _loop = function _loop() {
    var cell = randomChoice([].concat(_toConsumableArray(cells)));
    var x = Math.floor(cell / 9);
    var y = cell % 9;
    cellsLeft.delete(cell);
    /**
         * row, column and square record whether another cell in those groups could also take
         * on the value we are trying to pluck. (If another cell can, then we can't use the
         * group to deduce this value.) If all three groups are True, then we cannot pluck
         * this cell and must try another one.
         */
    var row = false;
    var column = false;
    var square = false;
    range(9).forEach(function (i) {
      var rowPeer = { x: i, y: y };
      var columnPeer = { x: x, y: i };
      var squarePeer = {
        x: Math.floor(Math.floor(cell / 9) / 3) * 3 + Math.floor(i / 3),
        y: Math.floor(cell / 9) % 3 * 3 + i % 3
      };
      if (rowPeer.x !== x) {
        row = canBeA(puzzle, rowPeer.x, rowPeer.y, cell);
      }
      if (columnPeer.y !== y) {
        column = canBeA(puzzle, columnPeer.x, columnPeer.y, cell);
      }
      if (squarePeer.x !== x && squarePeer.y !== y) {
        square = canBeA(puzzle, squarePeer.x, squarePeer.y, cell);
      }
    });
    if (row && column && square) {
      // eslint-disable-next-line no-continue
      return 'continue';
    } else {
      // this is a pluckable cell!
      // eslint-disable-next-line no-param-reassign
      puzzle[x][y] = 0; // 0 denotes a blank cell
      /**
             * remove from the set of visible cells (pluck it)
             * we don't need to reset "cellsleft" because if a cell was not pluckable
             * earlier, then it will still not be pluckable now (with less information
             * on the board).
             */
      cells.delete(cell);
    }
  };

  while (cellsLeft.size && cells.size > n) {
    var _ret2 = _loop();

    if (_ret2 === 'continue') continue;
  }
  return { puzzle: puzzle, size: cells.size };
}
// EXTERNAL MODULE: external "react-popover"
var external__react_popover_ = __webpack_require__(13);
var external__react_popover__default = /*#__PURE__*/__webpack_require__.n(external__react_popover_);

// CONCATENATED MODULE: ./components/tool-tip.js
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var tool_tip_HelpIcon = function HelpIcon(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement('path', {
      d: 'M231.2 336.033c-9.35 0-17 7.65-17 17v11.333c0 9.35 7.65 17 17 17s17-7.65 17-17v-11.333c0-9.35-7.65-17-17-17z'
    }),
    external__react__default.a.createElement('path', {
      d: 'M236.867 473.733c130.617 0 236.867-106.25 236.867-236.867S367.483 0 236.867 0 0 106.25 0 236.867s106.25 236.866 236.867 236.866zm0-439.733c111.917 0 202.867 90.95 202.867 202.867s-90.95 202.867-202.867 202.867S34 348.783 34 236.867 124.95 34 236.867 34z'
    }),
    external__react__default.a.createElement('path', {
      d: 'M163.2 194.367c.283 0 .283 0 0 0 9.35 0 17-7.083 17-16.433 0 0 .283-13.6 7.083-26.917 8.5-17 23.517-25.5 45.617-25.5 20.683 0 35.983 5.667 44.483 16.717 7.083 9.067 9.067 21.533 5.667 35.133-4.25 16.717-18.7 31.167-32.583 45.333-17 17.567-34.85 35.417-34.85 59.5 0 9.35 7.65 17 17 17s17-7.65 17-17c0-10.2 12.183-22.667 25.217-35.7 16.15-16.433 34.567-35.133 41.083-60.633 6.233-23.517 1.983-47.033-11.617-64.317-10.483-13.6-31.45-30.033-71.117-30.033-44.483 0-65.733 23.8-75.933 44.2-10.2 20.4-10.767 39.95-10.767 42.217 0 9.066 7.367 16.433 16.717 16.433z'
    })
  );
};

tool_tip_HelpIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 473.733 473.733'
};


var TipCopy = external__react__default.a.createElement(
  'div',
  {
    className: 'jsx-289995913' + ' ' + 'tip-copy'
  },
  external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-289995913' + ' ' + 'tip-line'
    },
    external__react__default.a.createElement(
      'b',
      {
        className: 'jsx-289995913'
      },
      'Select:'
    ),
    ' Click a cell'
  ),
  external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-289995913' + ' ' + 'tip-line'
    },
    external__react__default.a.createElement(
      'b',
      {
        className: 'jsx-289995913'
      },
      'Assign Number:'
    ),
    ' Single click on desired number control'
  ),
  external__react__default.a.createElement(
    'div',
    {
      className: 'jsx-289995913'
    },
    external__react__default.a.createElement(
      'b',
      {
        className: 'jsx-289995913'
      },
      'Tag Number as Note:'
    ),
    ' Double click on the desired number control'
  ),
  external__react__default.a.createElement(style__default.a, {
    styleId: '289995913',
    css: ['.tip-copy.jsx-289995913{font-size:1.2em;}', '.tip-line.jsx-289995913{margin-bottom:.4em;}']
  })
);

var tool_tip_Tip = function (_Component) {
  _inherits(Tip, _Component);

  function Tip() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, Tip);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Tip.__proto__ || Object.getPrototypeOf(Tip)).call.apply(_ref, [this].concat(args))), _this), _this.state = {}, _this.toggleOpen = function (event) {
      // This prevents ghost click.
      event.preventDefault();
      _this.setState({ open: !_this.state.open });
    }, _this.close = function () {
      _this.setState({ open: false });
    }, _this.open = function () {
      _this.setState({ open: true });
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Tip, [{
    key: 'render',
    value: function render() {
      return external__react__default.a.createElement(
        external__react_popover__default.a,
        {
          isOpen: this.state.open,
          preferPlace: 'below',
          body: TipCopy,
          style: { width: '90vw', maxWidth: '40em' }
        },
        external__react__default.a.createElement(
          'div',
          {
            onClick: this.toggleOpen,
            onMouseEnter: this.open,
            onMouseLeave: this.close,
            className: 'jsx-2314980512'
          },
          external__react__default.a.createElement(tool_tip_HelpIcon, { className: 'icon' }),
          external__react__default.a.createElement(style__default.a, {
            styleId: '2314980512',
            css: ['.icon{height:1.25em;cursor:pointer;}']
          })
        )
      );
    }
  }]);

  return Tip;
}(external__react_["Component"]);

/* harmony default export */ var tool_tip = (tool_tip_Tip);
// CONCATENATED MODULE: ./pages/index.js
var pages__createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();



function pages__classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function pages__possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function pages__inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* eslint-disable jsx-a11y/accessible-emoji */







// eslint-disable-next-line import/no-extraneous-dependencies




var pages_LoupeIcon = function LoupeIcon(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement('path', {
      d: 'M457.602 54.355c-72.417-72.416-190.245-72.416-262.661 0-35.081 35.079-54.399 81.721-54.399 131.331 0 45.193 16.039 87.917 45.413 121.688l-22.119 22.119-22.542-22.542a13.173 13.173 0 0 0-18.628 0L17.055 412.563C6.057 423.559 0 438.18 0 453.733c0 15.552 6.057 30.174 17.053 41.17 10.998 10.998 25.619 17.054 41.17 17.054 15.551 0 30.174-6.057 41.17-17.053l105.612-105.61a13.173 13.173 0 0 0 0-18.628l-22.542-22.542 22.126-22.126c34.793 30.215 78.234 45.331 121.682 45.331 47.561 0 95.123-18.104 131.331-54.311C492.68 281.938 512 235.298 512 185.688c0-49.613-19.318-96.254-54.398-131.333zM80.765 476.275c-6.021 6.021-14.026 9.337-22.542 9.337-8.515 0-16.521-3.317-22.542-9.338-6.02-6.02-9.337-14.026-9.337-22.54s3.317-16.521 9.338-22.542l58.934-58.934L139.7 417.34l-58.935 58.935zm77.565-77.564l-45.084-45.084 18.734-18.734 45.084 45.085-18.734 18.733zm280.643-100.323c-62.144 62.146-163.259 62.146-225.403 0-30.104-30.104-46.683-70.128-46.683-112.702s16.579-82.598 46.683-112.701c31.072-31.072 71.887-46.609 112.702-46.609 40.814 0 81.63 15.535 112.702 46.609 30.104 30.103 46.683 70.128 46.683 112.701s-16.58 82.598-46.684 112.702z'
    }),
    external__react__default.a.createElement('path', {
      d: 'M417.234 94.721c-50.158-50.156-131.769-50.158-181.927 0-50.156 50.158-50.156 131.769.001 181.927 25.079 25.077 58.02 37.617 90.963 37.617s65.885-12.54 90.964-37.617v-.001c50.156-50.156 50.156-131.768-.001-181.926zM398.605 258.02c-39.886 39.886-104.783 39.886-144.669.001-39.886-39.886-39.886-104.784-.001-144.67 19.945-19.946 46.136-29.914 72.336-29.914 26.193 0 52.394 9.974 72.334 29.914 39.886 39.885 39.886 104.783 0 144.669z'
    }),
    external__react__default.a.createElement('path', {
      d: 'M375.321 136.636c-27.048-27.045-71.053-27.045-98.1 0-5.144 5.144-5.144 13.484 0 18.63 5.144 5.144 13.484 5.144 18.63 0 16.772-16.774 44.068-16.774 60.842 0a13.128 13.128 0 0 0 9.314 3.858 13.13 13.13 0 0 0 9.314-3.858c5.144-5.144 5.144-13.485 0-18.63z'
    })
  );
};

pages_LoupeIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 512 512'
};

var pages_RemoveIcon = function RemoveIcon(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement('path', {
      d: 'M60.197 418.646H27.571c-6.978 0-12.634 5.657-12.634 12.634s5.656 12.634 12.634 12.634h32.627c6.978 0 12.634-5.657 12.634-12.634-.001-6.976-5.658-12.634-12.635-12.634zM114.205 467.363c-4.934-4.932-12.933-4.934-17.867 0l-23.07 23.07c-4.934 4.934-4.935 12.933 0 17.868a12.598 12.598 0 0 0 8.933 3.701c3.233 0 6.467-1.234 8.933-3.701l23.07-23.07c4.935-4.934 4.936-12.933.001-17.868zM484.431 424.963H262.965l226.699-226.688c9.851-9.852 9.852-25.881.001-35.733L334.522 7.388c-9.853-9.851-25.882-9.851-35.735 0l-247.99 247.99c-14.318 14.318-22.203 33.354-22.203 53.602 0 20.247 7.885 39.284 22.203 53.602l74.701 74.699c8.351 8.351 19.455 12.951 31.266 12.951H484.43c6.978 0 12.634-5.657 12.634-12.634.001-6.977-5.655-12.635-12.633-12.635zm-327.666 0c-5.062 0-9.82-1.972-13.401-5.551l-74.699-74.699c-19.704-19.704-19.704-51.765 0-71.468l40.557-40.557 133.335 133.336c2.467 2.466 5.7 3.7 8.933 3.7s6.467-1.234 8.933-3.7c4.934-4.934 4.935-12.933.001-17.868L127.09 214.821 316.655 25.254l155.142 155.155L227.23 424.963h-70.465z'
    })
  );
};

pages_RemoveIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 512.001 512.001'
};

var pages_ReloadIcon = function ReloadIcon(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement('path', {
      d: 'M482.195 226.196C482.195 101.471 380.725 0 256.001 0S29.805 101.471 29.805 226.196c0 7.409 6.007 13.416 13.416 13.416s13.416-6.008 13.416-13.416c0-109.93 89.434-199.363 199.363-199.363s199.363 89.434 199.363 199.363c0 109.928-89.434 199.362-199.363 199.362h-23.276l33.282-37.255c4.937-5.525 4.458-14.007-1.067-18.944-5.525-4.937-14.008-4.457-18.944 1.068l-47.576 53.255c-7.788 8.718-7.788 21.866 0 30.584l47.576 53.255a13.379 13.379 0 0 0 10.01 4.478c3.181 0 6.375-1.126 8.934-3.41 5.526-4.937 6.004-13.419 1.067-18.944l-33.282-37.255H256c124.725 0 226.195-101.471 226.195-226.194z'
    })
  );
};

pages_ReloadIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 512 512'
};

var pages_ReturnIcon = function ReturnIcon(props) {
  return external__react__default.a.createElement(
    'svg',
    props,
    external__react__default.a.createElement('path', {
      d: 'M384.834 180.699H36.101l73.326-82.187c4.755-5.33 4.289-13.505-1.041-18.26-5.328-4.754-13.505-4.29-18.26 1.041l-82.582 92.56c-10.059 11.278-10.058 28.282.001 39.557l82.582 92.561a12.897 12.897 0 0 0 9.654 4.323c3.064 0 6.139-1.083 8.606-3.282 5.33-4.755 5.795-12.93 1.041-18.26l-73.326-82.188h348.733c55.858 0 101.3 45.444 101.3 101.3s-45.443 101.3-101.3 101.3h-61.58c-7.143 0-12.933 5.791-12.933 12.933 0 7.142 5.79 12.933 12.933 12.933h61.58c70.12 0 127.166-57.046 127.166-127.166-.001-70.119-57.047-127.165-127.167-127.165z'
    })
  );
};

pages_ReturnIcon.defaultProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  viewBox: '0 0 512.001 512.001'
};






var Description = 'Discover the next evolution of Sudoku with amazing graphics, animations, and user-friendly features. Enjoy a Sudoku experience like you never have before with customizable game generation, cell highlighting, intuitive controls and more!';
var cellWidth = 2.5;

var LightBlue100 = '#B3E5FC';
var LightBlue200 = '#81D4FA';
var LightBlue300 = '#4FC3F7';
var Indigo700 = '#303F9F';
var DeepOrange200 = '#FFAB91';
var DeepOrange600 = '#F4511E';
var ControlNumberColor = Indigo700;

// eslint-disable-next-line no-lone-blocks
{/* language=CSS */}
var CellStyle = ['.cell{height:' + cellWidth + 'em;width:' + cellWidth + 'em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.1em;font-weight:bold;-webkit-transition:background-color .3s ease-in-out;transition:background-color .3s ease-in-out;}', '.cell:nth-child(3n+3):not(:last-child){border-right:2px solid black;}', '.cell:not(:last-child){border-right:1px solid black;}', '.note-number{font-size:.6em;width:33%;height:33%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}'];

// eslint-disable-next-line no-lone-blocks
CellStyle.__hash = '861130757';
CellStyle.__scoped = ['.cell.jsx-3895838756{height:' + cellWidth + 'em;width:' + cellWidth + 'em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-size:1.1em;font-weight:bold;-webkit-transition:background-color .3s ease-in-out;transition:background-color .3s ease-in-out;}', '.cell.jsx-3895838756:nth-child(3n+3):not(:last-child){border-right:2px solid black;}', '.cell.jsx-3895838756:not(:last-child){border-right:1px solid black;}', '.note-number.jsx-3895838756{font-size:.6em;width:33%;height:33%;box-sizing:border-box;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}'];
CellStyle.__scopedHash = '3895838756';
{/* language=CSS */}
var ActionsStyle = ['.actions{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:400px;margin-top:.5em;padding:0 .6em;}', '.action{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.action svg{width:2.5em;margin-bottom:.2em;}', '.redo svg{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}'];

// eslint-disable-next-line no-lone-blocks
ActionsStyle.__hash = '3577854778';
ActionsStyle.__scoped = ['.actions.jsx-183028603{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;width:100%;max-width:400px;margin-top:.5em;padding:0 .6em;}', '.action.jsx-183028603{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}', '.action.jsx-183028603 svg{width:2.5em;margin-bottom:.2em;}', '.redo.jsx-183028603 svg{-webkit-transform:scaleX(-1);-ms-transform:scaleX(-1);transform:scaleX(-1);}'];
ActionsStyle.__scopedHash = '183028603';
{/* language=CSS */}
var ControlStyle = ['.control{padding:0 2em;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:\'Special Elite\',cursive;-webkit-transition:filter .5s ease-in-out;transition:filter .5s ease-in-out;width:100%;}'];

// eslint-disable-next-line no-lone-blocks
ControlStyle.__hash = '3736506914';
ControlStyle.__scoped = ['.control.jsx-404884099{padding:0 2em;cursor:pointer;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;font-family:\'Special Elite\',cursive;-webkit-transition:filter .5s ease-in-out;transition:filter .5s ease-in-out;width:100%;}'];
ControlStyle.__scopedHash = '404884099';
{/* language=CSS */}
var NumberControlStyle = ['.number{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:2em;margin:.1em;width:1.5em;height:1.5em;color:' + ControlNumberColor + ';box-shadow:0 1px 2px rgba(0,0,0,0.16),0 1px 2px rgba(0,0,0,0.23);border-radius:50%;}', '.number>div{margin-top:.3em;}'];

// eslint-disable-next-line no-lone-blocks
NumberControlStyle.__hash = '901429852';
NumberControlStyle.__scoped = ['.number.jsx-2289524573{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;position:relative;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;font-size:2em;margin:.1em;width:1.5em;height:1.5em;color:' + ControlNumberColor + ';box-shadow:0 1px 2px rgba(0,0,0,0.16),0 1px 2px rgba(0,0,0,0.23);border-radius:50%;}', '.number.jsx-2289524573>div.jsx-2289524573{margin-top:.3em;}'];
NumberControlStyle.__scopedHash = '2289524573';
{/* language=CSS */}
var PuzzleStyle = ['.puzzle{margin-top:.5em;width:' + cellWidth * 9 + 'em;cursor:pointer;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}', '.row{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:0;-ms-flex:0;flex:0;width:' + cellWidth * 9 + 'em;}', '.row:not(:last-child){border-bottom:1px solid black;}', '.row:nth-child(3n+3):not(:last-child){border-bottom:2px solid black !important;}'];

// eslint-disable-next-line no-lone-blocks
PuzzleStyle.__hash = '1343751924';
PuzzleStyle.__scoped = ['.puzzle.jsx-113117877{margin-top:.5em;width:' + cellWidth * 9 + 'em;cursor:pointer;box-shadow:0 3px 6px rgba(0,0,0,0.16),0 3px 6px rgba(0,0,0,0.23);}', '.row.jsx-113117877{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-flex:0;-ms-flex:0;flex:0;width:' + cellWidth * 9 + 'em;}', '.row.jsx-113117877:not(:last-child){border-bottom:1px solid black;}', '.row.jsx-113117877:nth-child(3n+3):not(:last-child){border-bottom:2px solid black !important;}'];
PuzzleStyle.__scopedHash = '113117877';
{/* language=CSS */}
var CirculuarProgressStyle = ['.circular-progress{display:block;width:100%;position:absolute;top:0;left:0;-webkit-transition:filter .4s ease-in-out;transition:filter .4s ease-in-out;}', '.circle-bg{fill:none;stroke:#eee;stroke-width:3.8;}', '.circle{stroke:' + ControlNumberColor + ';-webkit-transition:stroke-dasharray .4s ease-in-out;transition:stroke-dasharray .4s ease-in-out;fill:none;stroke-width:2.8;stroke-linecap:round;}'];

CirculuarProgressStyle.__hash = '2505613647';
CirculuarProgressStyle.__scoped = ['.circular-progress.jsx-1171755374{display:block;width:100%;position:absolute;top:0;left:0;-webkit-transition:filter .4s ease-in-out;transition:filter .4s ease-in-out;}', '.circle-bg.jsx-1171755374{fill:none;stroke:#eee;stroke-width:3.8;}', '.circle.jsx-1171755374{stroke:' + ControlNumberColor + ';-webkit-transition:stroke-dasharray .4s ease-in-out;transition:stroke-dasharray .4s ease-in-out;fill:none;stroke-width:2.8;stroke-linecap:round;}'];
CirculuarProgressStyle.__scopedHash = '1171755374';
var CircularPathD = 'M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831';

function getBackGroundColor(_ref) {
  var conflict = _ref.conflict,
      isPeer = _ref.isPeer,
      sameValue = _ref.sameValue,
      isSelected = _ref.isSelected;

  if (conflict && isPeer && sameValue) {
    return DeepOrange200;
  } else if (sameValue) {
    return LightBlue300;
  } else if (isSelected) {
    return LightBlue200;
  } else if (isPeer) {
    return LightBlue100;
  }
  return false;
}

function getFontColor(_ref2) {
  var value = _ref2.value,
      conflict = _ref2.conflict,
      prefilled = _ref2.prefilled;

  if (conflict && !prefilled) {
    return DeepOrange600;
  } else if (!prefilled && value) {
    return ControlNumberColor;
  }
  return false;
}

var pages_GenerationUI = function (_Component) {
  pages__inherits(GenerationUI, _Component);

  function GenerationUI(props) {
    pages__classCallCheck(this, GenerationUI);

    var _this = pages__possibleConstructorReturn(this, (GenerationUI.__proto__ || Object.getPrototypeOf(GenerationUI)).call(this, props));

    _this.generateGame = function () {
      _this.props.generateGame(_this.state.value);
    };

    _this.handler = function (e) {
      console.log('second e: ', e.target.id);
      var target = e.target.id;
      var color1 = void 0;
      var color2 = void 0;
      var color3 = void 0;

      if (target === 'green') {
        LightBlue200 = 'rgb(0,255,0)';
        console.log('-----: ', LightBlue100);
        color1 = 'rgb(0,255,0)';
        color2 = 'rgb(0,100,0)';
        color3 = 'rgb(0,150,0)';
      }
      if (target === 'blue') {
        //LightBlue100 = '##006400'
        color1 = 'rgb(0,0,150)';
        color2 = 'rgb(0,0,100)';
        color3 = 'rgb(0,0,255)';
      }
      if (target === 'purple') {
        color1 = 'rgb(150,0,150)';
        color2 = 'rgb(100,0,100)';
        color3 = 'rgb(255,0,255)';
      }
      if (target === 'red') {
        color1 = 'rgb(255,0,0)';
        color2 = 'rgb(150,0,0)';
        color3 = 'rgb(175,0,0)';
      }
      if (target === 'orange') {
        color1 = 'rgb(255,175,0)';
        color2 = 'rgb(255,140,0)';
        color3 = 'rgb(255,100,0)';
      }
      if (target === 'yellow') {
        color1 = 'rgb(225,225,0)';
        color2 = 'rgb(255,255,0)';
        color3 = 'rgb(200,200,0)';
      }

      //document.getElementsByName('btns').style.setProperty('color1', color2);

      document.documentElement.style.setProperty('--color1', color1);
      document.documentElement.style.setProperty('--color2', color2);
      document.documentElement.style.setProperty('--color3', color3);
    };

    _this.state = { value: 30 };
    return _this;
  }

  pages__createClass(GenerationUI, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-1304814462' + ' ' + 'generation'
        },
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-1304814462' + ' ' + 'dropdown'
          },
          external__react__default.a.createElement(
            'button',
            { 'class': 'dropbtn btn', className: 'jsx-1304814462'
            },
            'Select a color theme'
          ),
          external__react__default.a.createElement(
            'div',
            { 'class': 'dropdown-content', className: 'jsx-1304814462'
            },
            external__react__default.a.createElement(
              'div',
              { 'class': 'group', className: 'jsx-1304814462'
              },
              external__react__default.a.createElement('input', { 'class': 'btns', onClick: this.handler, type: 'radio', name: 'btns', id: 'green', className: 'jsx-1304814462'
              }),
              external__react__default.a.createElement(
                'label',
                { 'class': 'label', 'for': 'green', className: 'jsx-1304814462'
                },
                'Green'
              )
            ),
            external__react__default.a.createElement(
              'div',
              { 'class': 'group', className: 'jsx-1304814462'
              },
              external__react__default.a.createElement('input', { 'class': 'btns', onClick: this.handler, type: 'radio', name: 'btns', id: 'blue', className: 'jsx-1304814462'
              }),
              external__react__default.a.createElement(
                'label',
                { 'class': 'label', 'for': 'blue', className: 'jsx-1304814462'
                },
                'Blue'
              )
            ),
            external__react__default.a.createElement(
              'div',
              { 'class': 'group', className: 'jsx-1304814462'
              },
              external__react__default.a.createElement('input', { 'class': 'btns', onClick: this.handler, type: 'radio', name: 'btns', id: 'purple', className: 'jsx-1304814462'
              }),
              external__react__default.a.createElement(
                'label',
                { 'class': 'label', 'for': 'purple', className: 'jsx-1304814462'
                },
                'Purple'
              )
            ),
            external__react__default.a.createElement(
              'div',
              { 'class': 'group', className: 'jsx-1304814462'
              },
              external__react__default.a.createElement('input', { 'class': 'btns', onClick: this.handler, type: 'radio', name: 'btns', id: 'red', className: 'jsx-1304814462'
              }),
              external__react__default.a.createElement(
                'label',
                { 'class': 'label', 'for': 'red', className: 'jsx-1304814462'
                },
                'Red'
              )
            ),
            external__react__default.a.createElement(
              'div',
              { 'class': 'group', className: 'jsx-1304814462'
              },
              external__react__default.a.createElement('input', { 'class': 'btns', onClick: this.handler, type: 'radio', name: 'btns', id: 'orange', className: 'jsx-1304814462'
              }),
              external__react__default.a.createElement(
                'label',
                { 'class': 'label', 'for': 'orange', className: 'jsx-1304814462'
                },
                'Orange'
              )
            ),
            external__react__default.a.createElement(
              'div',
              { 'class': 'group', className: 'jsx-1304814462'
              },
              external__react__default.a.createElement('input', { 'class': 'btns', onClick: this.handler, type: 'radio', name: 'btns', id: 'yellow', className: 'jsx-1304814462'
              }),
              external__react__default.a.createElement(
                'label',
                { 'class': 'label', 'for': 'yellow', className: 'jsx-1304814462'
                },
                'Yellow'
              )
            )
          )
        ),
        external__react__default.a.createElement(
          'div',
          {
            className: 'jsx-1304814462' + ' ' + 'copy'
          },
          'Start with ',
          this.state.value,
          ' cells prefilled'
        ),
        external__react__default.a.createElement(external__react_input_range__default.a, {
          maxValue: 81,
          minValue: 17,
          value: this.state.value,
          onChange: function onChange(value) {
            return _this2.setState({ value: value });
          }
        }),
        external__react__default.a.createElement(
          'div',
          { onClick: this.generateGame, className: 'jsx-1304814462' + ' ' + 'button'
          },
          'Play Sudoku'
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: '1304814462',
          css: ['.copy.jsx-1304814462{text-align:center;font-size:1.3em;margin-bottom:.5em;}', '.generation.jsx-1304814462{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;width:100%;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.input-range{width:80%;max-width:500px;}', '.button.jsx-1304814462{margin-top:.5em;border-radius:.25em;cursor:pointer;font-weight:bold;text-decoration:none;color:#fff;position:relative;display:inline-block;-webkit-transition:all .25s;transition:all .25s;padding:5px 10px;font-size:1.4em;}', '.button.jsx-1304814462:active{-webkit-transform:translate(0px,5px);-ms-transform:translate(0px,5px);transform:translate(0px,5px);box-shadow:0 1px 0 0;}', '.button.jsx-1304814462{background-color:' + backGroundBlue + ';box-shadow:0 2px 4px 0 ' + external__color__default()(backGroundBlue).darken(0.5).hsl().string() + ';display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}', '.button.jsx-1304814462:hover{background-color:' + external__color__default()(backGroundBlue).lighten(0.2).hsl().string() + ';}']
        })
      );
    }
  }]);

  return GenerationUI;
}(external__react_["Component"]);

var pages_NumberControl = function NumberControl(_ref3) {
  var number = _ref3.number,
      onClick = _ref3.onClick,
      completionPercentage = _ref3.completionPercentage;
  return external__react__default.a.createElement(
    'div',
    {
      key: number,

      onClick: onClick,
      className: 'jsx-' + NumberControlStyle.__scopedHash + ' ' + 'number'
    },
    external__react__default.a.createElement(
      'div',
      {
        className: 'jsx-' + NumberControlStyle.__scopedHash
      },
      number
    ),
    external__react__default.a.createElement(pages_CirclularProgress, { percent: completionPercentage }),
    external__react__default.a.createElement(style__default.a, {
      styleId: NumberControlStyle.__scopedHash,
      css: NumberControlStyle.__scoped
    })
  );
};

pages_NumberControl.defaultProps = {
  onClick: null
};

var pages_Cell = function Cell(props) {
  var value = props.value,
      onClick = props.onClick,
      isPeer = props.isPeer,
      isSelected = props.isSelected,
      sameValue = props.sameValue,
      prefilled = props.prefilled,
      notes = props.notes,
      conflict = props.conflict;

  var backgroundColor = getBackGroundColor({
    conflict: conflict, isPeer: isPeer, sameValue: sameValue, isSelected: isSelected
  });
  var fontColor = getFontColor({ conflict: conflict, prefilled: prefilled, value: value });
  return external__react__default.a.createElement(
    'div',
    { onClick: onClick, className: 'jsx-' + CellStyle.__scopedHash + ' ' + style__default.a.dynamic([['1302207814', [backgroundColor || 'initial', fontColor || 'initial']]]) + ' ' + 'cell'
    },
    notes ? range(9).map(function (i) {
      return external__react__default.a.createElement(
        'div',
        { key: i, className: 'jsx-' + CellStyle.__scopedHash + ' ' + style__default.a.dynamic([['1302207814', [backgroundColor || 'initial', fontColor || 'initial']]]) + ' ' + 'note-number'
        },
        notes.has(i + 1) && i + 1
      );
    }) : value && value,
    external__react__default.a.createElement(style__default.a, {
      styleId: CellStyle.__scopedHash,
      css: CellStyle.__scoped
    }),
    external__react__default.a.createElement(style__default.a, {
      styleId: '1302207814',
      css: ['.cell.__jsx-style-dynamic-selector{background-color:' + (backgroundColor || 'initial') + ';color:' + (fontColor || 'initial') + ';}'],
      dynamic: [backgroundColor || 'initial', fontColor || 'initial']
    })
  );
};

pages_Cell.defaultProps = {
  notes: null,
  value: null
};

var pages_CirclularProgress = function CirclularProgress(_ref4) {
  var percent = _ref4.percent;
  return external__react__default.a.createElement(
    'svg',
    { viewBox: '0 0 36 36', className: 'jsx-' + CirculuarProgressStyle.__scopedHash + ' ' + 'circular-progress'
    },
    external__react__default.a.createElement('path', {
      d: CircularPathD,
      className: 'jsx-' + CirculuarProgressStyle.__scopedHash + ' ' + 'circle-bg'
    }),
    external__react__default.a.createElement('path', {
      strokeDasharray: percent * 100 + ', 100',
      d: CircularPathD,
      className: 'jsx-' + CirculuarProgressStyle.__scopedHash + ' ' + 'circle'
    }),
    external__react__default.a.createElement(style__default.a, {
      styleId: CirculuarProgressStyle.__scopedHash,
      css: CirculuarProgressStyle.__scoped
    })
  );
};

function getClickHandler(onClick, onDoubleClick) {
  var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 250;

  var timeoutID = null;
  return function (event) {
    if (!timeoutID) {
      timeoutID = setTimeout(function () {
        onClick(event);
        timeoutID = null;
      }, delay);
    } else {
      timeoutID = clearTimeout(timeoutID);
      onDoubleClick(event);
    }
  };
}

/**
 * make size 9 array of 0s
 * @returns {Array}
 */
function makeCountObject() {
  var countObj = [];
  for (var i = 0; i < 10; i += 1) {
    countObj.push(0);
  }return countObj;
}

/**
 * given a 2D array of numbers as the initial puzzle, generate the initial game state
 * @param puzzle
 * @returns {any}
 */
function makeBoard(_ref5) {
  var puzzle = _ref5.puzzle;

  // create initial count object to keep track of conflicts per number value
  var rows = Array.from(Array(9).keys()).map(function () {
    return makeCountObject();
  });
  var columns = Array.from(Array(9).keys()).map(function () {
    return makeCountObject();
  });
  var squares = Array.from(Array(9).keys()).map(function () {
    return makeCountObject();
  });
  var result = puzzle.map(function (row, i) {
    return row.map(function (cell, j) {
      if (cell) {
        rows[i][cell] += 1;
        columns[j][cell] += 1;
        squares[Math.floor(i / 3) * 3 + Math.floor(j / 3)][cell] += 1;
      }
      return {
        value: puzzle[i][j] > 0 ? puzzle[i][j] : null,
        prefilled: !!puzzle[i][j]
      };
    });
  });
  return Object(external__immutable_["fromJS"])({ puzzle: result, selected: false, choices: { rows: rows, columns: columns, squares: squares } });
}

/**
 * give the coordinate update the current board with a number choice
 * @param x
 * @param y
 * @param number
 * @param fill whether to set or unset
 * @param board the immutable board given to change
 */
function updateBoardWithNumber(_ref6) {
  var x = _ref6.x,
      y = _ref6.y,
      number = _ref6.number,
      _ref6$fill = _ref6.fill,
      fill = _ref6$fill === undefined ? true : _ref6$fill,
      board = _ref6.board;

  var cell = board.get('puzzle').getIn([x, y]);
  // delete its notes
  cell = cell.delete('notes');
  // set or unset its value depending on `fill`
  cell = fill ? cell.set('value', number) : cell.delete('value');
  var increment = fill ? 1 : -1;
  // update the current group choices
  var rowPath = ['choices', 'rows', x, number];
  var columnPath = ['choices', 'columns', y, number];
  var squarePath = ['choices', 'squares', Math.floor(x / 3) * 3 + Math.floor(y / 3), number];
  return board.setIn(rowPath, board.getIn(rowPath) + increment).setIn(columnPath, board.getIn(columnPath) + increment).setIn(squarePath, board.getIn(squarePath) + increment).setIn(['puzzle', x, y], cell);
}

function getNumberOfGroupsAssignedForNumber(number, groups) {
  return groups.reduce(function (accumulator, row) {
    return accumulator + (row.get(number) > 0 ? 1 : 0);
  }, 0);
}
// eslint-disable-next-line react/no-multi-comp

var pages_Index = function (_Component2) {
  pages__inherits(Index, _Component2);

  function Index() {
    var _ref7;

    var _temp, _this3, _ret;

    pages__classCallCheck(this, Index);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this3 = pages__possibleConstructorReturn(this, (_ref7 = Index.__proto__ || Object.getPrototypeOf(Index)).call.apply(_ref7, [this].concat(args))), _this3), _this3.state = {}, _this3.generateGame = function () {
      var finalCount = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 20;

      // get a filled puzzle generated
      var solution = makePuzzle();
      // pluck values from cells to create the game

      var _pluck = pluck(solution, finalCount),
          puzzle = _pluck.puzzle;
      // initialize the board with choice counts


      var board = makeBoard({ puzzle: puzzle });
      _this3.setState({
        board: board, history: external__immutable_["List"].of(board), historyOffSet: 0, solution: solution
      });
    }, _this3.addNumberAsNote = function (number) {
      var board = _this3.state.board;

      var selectedCell = _this3.getSelectedCell();
      if (!selectedCell) return;
      var prefilled = selectedCell.get('prefilled');
      if (prefilled) return;

      var _board$get = board.get('selected'),
          x = _board$get.x,
          y = _board$get.y;

      var currentValue = selectedCell.get('value');
      if (currentValue) {
        board = updateBoardWithNumber({
          x: x, y: y, number: currentValue, fill: false, board: _this3.state.board
        });
      }
      var notes = selectedCell.get('notes') || Object(external__immutable_["Set"])();
      if (notes.has(number)) {
        notes = notes.delete(number);
      } else {
        notes = notes.add(number);
      }
      selectedCell = selectedCell.set('notes', notes);
      selectedCell = selectedCell.delete('value');
      board = board.setIn(['puzzle', x, y], selectedCell);
      _this3.updateBoard(board);
    }, _this3.updateBoard = function (newBoard) {
      var history = _this3.state.history;
      var historyOffSet = _this3.state.historyOffSet;
      // anything before current step is still in history

      history = history.slice(0, historyOffSet + 1);
      // add itself onto the history
      history = history.push(newBoard);
      // update the game
      _this3.setState({ board: newBoard, history: history, historyOffSet: history.size - 1 });
    }, _this3.canUndo = function () {
      return _this3.state.historyOffSet > 0;
    }, _this3.redo = function () {
      var history = _this3.state.history;
      var historyOffSet = _this3.state.historyOffSet;

      if (history.size) {
        historyOffSet = Math.min(history.size - 1, historyOffSet + 1);
        var board = history.get(historyOffSet);
        _this3.setState({ board: board, historyOffSet: historyOffSet });
      }
    }, _this3.undo = function () {
      var history = _this3.state.history;
      var _this3$state = _this3.state,
          historyOffSet = _this3$state.historyOffSet,
          board = _this3$state.board;

      if (history.size) {
        historyOffSet = Math.max(0, historyOffSet - 1);
        board = history.get(historyOffSet);
        _this3.setState({ board: board, historyOffSet: historyOffSet, history: history });
      }
    }, _this3.eraseSelected = function () {
      var selectedCell = _this3.getSelectedCell();
      if (!selectedCell) return;
      _this3.fillNumber(false);
    }, _this3.fillSelectedWithSolution = function () {
      var _this3$state2 = _this3.state,
          board = _this3$state2.board,
          solution = _this3$state2.solution;

      var selectedCell = _this3.getSelectedCell();
      if (!selectedCell) return;

      var _board$get2 = board.get('selected'),
          x = _board$get2.x,
          y = _board$get2.y;

      _this3.fillNumber(solution[x][y]);
    }, _this3.fillNumber = function (number) {
      var board = _this3.state.board;

      var selectedCell = _this3.getSelectedCell();
      // no-op if nothing is selected
      if (!selectedCell) return;
      var prefilled = selectedCell.get('prefilled');
      // no-op if it is refilled
      if (prefilled) return;

      var _board$get3 = board.get('selected'),
          x = _board$get3.x,
          y = _board$get3.y;

      var currentValue = selectedCell.get('value');
      // remove the current value and update the game state
      if (currentValue) {
        board = updateBoardWithNumber({
          x: x, y: y, number: currentValue, fill: false, board: _this3.state.board
        });
      }
      // update to new number if any
      var setNumber = currentValue !== number && number;
      if (setNumber) {
        board = updateBoardWithNumber({
          x: x, y: y, number: number, fill: true, board: board
        });
      }
      _this3.updateBoard(board);
    }, _this3.selectCell = function (x, y) {
      var board = _this3.state.board;

      board = board.set('selected', { x: x, y: y });
      _this3.setState({ board: board });
    }, _temp), pages__possibleConstructorReturn(_this3, _ret);
  }

  pages__createClass(Index, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // eslint-disable-next-line no-undef
      if ('serviceWorker' in navigator) {
        // eslint-disable-next-line no-undef
        navigator.serviceWorker.register('/service-worker.js').then(function (reg) {
          console.log('ServiceWorker scope: ', reg.scope);
          console.log('service worker registration successful');
        }).catch(function (err) {
          console.warn('service worker registration failed', err.message);
        });
      }
    }
  }, {
    key: 'getSelectedCell',
    value: function getSelectedCell() {
      var board = this.state.board;

      var selected = board.get('selected');
      return selected && board.get('puzzle').getIn([selected.x, selected.y]);
    }

    // get the min between its completion in rows, columns and squares.

  }, {
    key: 'getNumberValueCount',
    value: function getNumberValueCount(number) {
      var rows = this.state.board.getIn(['choices', 'rows']);
      var columns = this.state.board.getIn(['choices', 'columns']);
      var squares = this.state.board.getIn(['choices', 'squares']);
      return Math.min(getNumberOfGroupsAssignedForNumber(number, squares), Math.min(getNumberOfGroupsAssignedForNumber(number, rows), getNumberOfGroupsAssignedForNumber(number, columns)));
    }

    // fill currently selected cell with number

  }, {
    key: 'isConflict',
    value: function isConflict(i, j) {
      var _state$board$getIn$to = this.state.board.getIn(['puzzle', i, j]).toJSON(),
          value = _state$board$getIn$to.value;

      if (!value) return false;
      var rowConflict = this.state.board.getIn(['choices', 'rows', i, value]) > 1;
      var columnConflict = this.state.board.getIn(['choices', 'columns', j, value]) > 1;
      var squareConflict = this.state.board.getIn(['choices', 'squares', Math.floor(i / 3) * 3 + Math.floor(j / 3), value]) > 1;
      return rowConflict || columnConflict || squareConflict;
    }
  }, {
    key: 'renderCell',
    value: function renderCell(cell, x, y) {
      var _this4 = this;

      var board = this.state.board;

      var selected = this.getSelectedCell();

      var _cell$toJSON = cell.toJSON(),
          value = _cell$toJSON.value,
          prefilled = _cell$toJSON.prefilled,
          notes = _cell$toJSON.notes;

      var conflict = this.isConflict(x, y);
      var peer = sudoku_isPeer({ x: x, y: y }, board.get('selected'));
      var sameValue = !!(selected && selected.get('value') && value === selected.get('value'));

      var isSelected = cell === selected;
      return external__react__default.a.createElement(pages_Cell, {
        prefilled: prefilled,
        notes: notes,
        sameValue: sameValue,
        isSelected: isSelected,
        isPeer: peer,
        value: value,
        onClick: function onClick() {
          _this4.selectCell(x, y);
        },
        key: y,
        x: x,
        y: y,
        conflict: conflict
      });
    }
  }, {
    key: 'renderNumberControl',
    value: function renderNumberControl() {
      var _this5 = this;

      var selectedCell = this.getSelectedCell();
      var prefilled = selectedCell && selectedCell.get('prefilled');
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-' + ControlStyle.__scopedHash + ' ' + 'control'
        },
        range(9).map(function (i) {
          var number = i + 1;
          // handles binding single click and double click callbacks
          var clickHandle = getClickHandler(function () {
            _this5.fillNumber(number);
          }, function () {
            _this5.addNumberAsNote(number);
          });
          return external__react__default.a.createElement(pages_NumberControl, {
            key: number,
            number: number,
            onClick: !prefilled ? clickHandle : undefined,
            completionPercentage: _this5.getNumberValueCount(number) / 9
          });
        }),
        external__react__default.a.createElement(style__default.a, {
          styleId: ControlStyle.__scopedHash,
          css: ControlStyle.__scoped
        })
      );
    }
  }, {
    key: 'renderActions',
    value: function renderActions() {
      var history = this.state.history;

      var selectedCell = this.getSelectedCell();
      var prefilled = selectedCell && selectedCell.get('prefilled');
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'actions'
        },
        external__react__default.a.createElement(
          'div',
          { onClick: history.size ? this.undo : null, className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'action'
          },
          external__react__default.a.createElement(pages_ReloadIcon, null),
          'Undo'
        ),
        external__react__default.a.createElement(
          'div',
          { onClick: history.size ? this.redo : null, className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'action redo'
          },
          external__react__default.a.createElement(pages_ReloadIcon, null),
          'Redo'
        ),
        external__react__default.a.createElement(
          'div',
          { onClick: !prefilled ? this.eraseSelected : null, className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'action'
          },
          external__react__default.a.createElement(pages_RemoveIcon, null),
          'Erase'
        ),
        external__react__default.a.createElement(
          'div',
          {
            onClick: !prefilled ? this.fillSelectedWithSolution : null,
            className: 'jsx-' + ActionsStyle.__scopedHash + ' ' + 'action'
          },
          external__react__default.a.createElement(pages_LoupeIcon, null),
          'Hint'
        ),
        external__react__default.a.createElement(style__default.a, {
          styleId: ActionsStyle.__scopedHash,
          css: ActionsStyle.__scoped
        })
      );
    }
  }, {
    key: 'renderPuzzle',
    value: function renderPuzzle() {
      var _this6 = this;

      var board = this.state.board;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-' + PuzzleStyle.__scopedHash + ' ' + 'puzzle'
        },
        board.get('puzzle').map(function (row, i) {
          return (
            // eslint-disable-next-line react/no-array-index-key
            external__react__default.a.createElement(
              'div',
              { key: i, className: 'jsx-' + PuzzleStyle.__scopedHash + ' ' + 'row'
              },
              row.map(function (cell, j) {
                return _this6.renderCell(cell, i, j);
              }).toArray()
            )
          );
        }).toArray(),
        external__react__default.a.createElement(style__default.a, {
          styleId: PuzzleStyle.__scopedHash,
          css: PuzzleStyle.__scoped
        })
      );
    }
  }, {
    key: 'renderControls',
    value: function renderControls() {
      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-3626433229' + ' ' + 'controls'
        },
        this.renderNumberControl(),
        this.renderActions(),
        external__react__default.a.createElement(style__default.a, {
          styleId: '3626433229',
          css: ['.controls.jsx-3626433229{margin-top:.3em;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;width:100%;padding:.5em 0;}']
        })
      );
    }
  }, {
    key: 'renderGenerationUI',
    value: function renderGenerationUI() {
      return external__react__default.a.createElement(pages_GenerationUI, { generateGame: this.generateGame });
    }
  }, {
    key: 'renderHeader',
    value: function renderHeader() {
      var _this7 = this;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-2229275753' + ' ' + 'header'
        },
        external__react__default.a.createElement(
          'div',
          { onClick: function onClick() {
              return _this7.setState({ board: false });
            }, className: 'jsx-2229275753' + ' ' + 'new-game'
          },
          external__react__default.a.createElement(pages_ReturnIcon, null),
          external__react__default.a.createElement(
            'div',
            {
              className: 'jsx-2229275753'
            },
            'New Game'
          )
        ),
        external__react__default.a.createElement(tool_tip, null),
        external__react__default.a.createElement(style__default.a, {
          styleId: '2229275753',
          css: ['.header.jsx-2229275753{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;max-width:500px;padding:0 0.5em;box-sizing:border-box;}', '.new-game.jsx-2229275753{cursor:pointer;margin-top:.2em;display:-webkit-inline-box;display:-webkit-inline-flex;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;padding:.2em 0;}', '.new-game.jsx-2229275753 svg{height:1em;margin-bottom:.3em;}']
        })
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var board = this.state.board;

      return external__react__default.a.createElement(
        'div',
        {
          className: 'jsx-389099333' + ' ' + 'body'
        },
        external__react__default.a.createElement(
          head__default.a,
          null,
          external__react__default.a.createElement(
            'title',
            {
              className: 'jsx-389099333'
            },
            'Sudoku Evolved'
          ),
          external__react__default.a.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', className: 'jsx-389099333'
          }),
          external__react__default.a.createElement('meta', { name: 'description', content: Description, className: 'jsx-389099333'
          }),
          external__react__default.a.createElement('link', { href: 'https://fonts.googleapis.com/css?family=Special+Elite', rel: 'stylesheet', className: 'jsx-389099333'
          }),
          external__react__default.a.createElement('meta', { property: 'og:url', content: 'https://sudoku.sitianliu.com/', className: 'jsx-389099333'
          }),
          external__react__default.a.createElement('meta', { property: 'og:title', content: 'Sudoku Evolved', className: 'jsx-389099333'
          }),
          external__react__default.a.createElement('meta', { property: 'og:type', content: 'website', className: 'jsx-389099333'
          }),
          external__react__default.a.createElement('meta', { property: 'og:description', content: Description, className: 'jsx-389099333'
          }),
          external__react__default.a.createElement('meta', { property: 'og:image', content: 'https://sudoku.sitianliu.com/static/og-image.png', className: 'jsx-389099333'
          })
        ),
        !board && this.renderGenerationUI(),
        board && this.renderHeader(),
        board && this.renderPuzzle(),
        board && this.renderControls(),
        external__react__default.a.createElement('div', {
          className: 'jsx-389099333' + ' ' + 'rooter'
        }),
        external__react__default.a.createElement(style__default.a, {
          styleId: '389099333',
          css: ['body,.body.jsx-389099333{font-family:\'Special Elite\',cursive;}', '.body.jsx-389099333{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;height:100vh;width:100vw;position:relative;}', '@media (min-width:800px) and (min-height:930px){.header,.puzzle,.controls{font-size:1.5em;}}', '@media (max-width:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}', '@media (max-height:930px) and (min-height:800px) and (min-width:600px){.header,.puzzle,.controls{font-size:1.2em;}}', '@media (max-height:800px) and (min-height:600px) and (min-width:370px){.header,.puzzle,.controls{font-size:1em;}}', '@media (max-width:370px){.header,.puzzle,.controls{font-size:.8em;}}', '@media (max-height:600px){.header,.puzzle,.controls{font-size:.8em;}}', 'body{margin:0;}', '.rooter.jsx-389099333{position:fixed;bottom:0;font-size:.8em;width:100%;text-align:center;}']
        }),
        external__react__default.a.createElement(style__default.a, {
          styleId: input_range_style.__hash,
          css: input_range_style
        })
      );
    }
  }]);

  return Index;
}(external__react_["Component"]);

/* harmony default export */ var pages = __webpack_exports__["default"] = (pages_Index);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("immutable");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(6)();
}


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(7);
var invariant = __webpack_require__(8);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/emptyFunction");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("fbjs/lib/invariant");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("color");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("react-input-range");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-popover");

/***/ })
/******/ ]);