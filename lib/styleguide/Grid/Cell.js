'use strict';

exports.__esModule = true;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _View = require('../../core/View');

var _View2 = _interopRequireDefault(_View);

var _styles = require('./styles');

var _styles2 = _interopRequireDefault(_styles);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Cell = function Cell(_ref) {
  var children = _ref.children;
  return _react2.default.createElement(
    _View2.default,
    { className: _styles2.default.cell },
    children
  );
};

Cell.propTypes = {
  children: _react.PropTypes.node.isRequired
};

exports.default = Cell;