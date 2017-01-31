'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _promise = require('promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RssiSignalStrength = function RssiSignalStrength(props) {
  // rssi: (int) is the signal strength with range -113dBm to -51dBm (in 2dBm steps).
  // This variable also doubles as an error response for the entire struct; positive return values indicate an error with:
  // 1: indicating a Cellular module or time-out error
  // 2: the module responded that the rssi value is not known, not detectable or currently not available.

  /*   signal strength (u-Blox Sara U2 and G3 modules)
   *   0: < -105 dBm
   *   1: < -93 dBm
   *   2: < -81 dBm
   *   3: < -69 dBm
   *   4: < -57 dBm
   *   5: >= -57 dBm
   */

  var strengthBars = 0;
  var strengthColor = 'strength-color ';
  var wrapperStrengthColor = 'rssi-signal-strength ';
  var errorMsg = '';
  var barsUi = [];

  if (props.rssi < 0) {
    if (props.rssi >= -57) {
      strengthBars = 5;
    } else if (props.rssi > -68) {
      strengthBars = 4;
    } else if (props.rssi > -80) {
      strengthBars = 3;
    } else if (props.rssi > -92) {
      strengthBars = 2;
    } else if (props.rssi > -104) {
      strengthBars = 1;
    }
  } else if (props.rssi > 2) {
    errorMsg = 'unknown error code = ' + props.rssi;
  } else {
    errorMsg = 'error code = ' + props.rssi;
  }

  // work out the strength color
  strengthColor += 'strength-' + strengthBars;

  // work out the bars ui
  if (strengthBars > 0) {
    for (var i = 0; i < strengthBars; i++) {
      barsUi.push(_react2.default.createElement('div', { key: i, className: 'bar' }));
    }
  } else {
    barsUi.push(_react2.default.createElement('div', { key: '0', className: 'bar-null' }));
  }

  return _react2.default.createElement(
    'div',
    { className: wrapperStrengthColor },
    _react2.default.createElement(
      'div',
      { className: 'device-id' },
      props.deviceId
    ),
    _react2.default.createElement(
      'div',
      { className: 'rssi-val' },
      'rssi ',
      props.rssi,
      ' dBm'
    ),
    _react2.default.createElement(
      'div',
      { className: 'strength-bars' },
      barsUi
    ),
    _react2.default.createElement('div', { className: strengthColor }),
    _react2.default.createElement(
      'div',
      { className: 'error' },
      errorMsg
    )
  );
};

module.exports = {
  RssiSignalStrength: RssiSignalStrength
};