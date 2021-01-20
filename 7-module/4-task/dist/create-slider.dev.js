"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = _createSlider;

function _createSlider(steps) {
  return "\n  <div class = 'slider'>\n  <div class=\"slider__thumb\" style=\"left: 0;\">\n    <span class=\"slider__value\">0</span>\n  </div>\n\n  <div class=\"slider__progress\" style=\"width: 0;\"></div>\n  <div class=\"slider__steps\">\n    ".concat(_stepsSlider(steps), "\n  </div>\n  </div>\n  ");
}

var _stepsSlider = function _stepsSlider(steps) {
  var arr = [];

  for (var i = 0; i < steps; i++) {
    arr.push(" <span></span>");
  }

  return arr.join('');
};