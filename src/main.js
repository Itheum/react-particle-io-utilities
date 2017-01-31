import React from 'react';
import Promise from 'promise';

const RssiSignalStrength = (props) => {
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

  let strengthBars = 0;
  let strengthColor = 'strength-color ';
  let wrapperStrengthColor = 'rssi-signal-strength ';
  let errorMsg = '';
  const barsUi = [];

  if (props.rssi < 0) {
    if (props.rssi >= -57) {
      strengthBars = 5;
    }
    else if (props.rssi > -68) {
      strengthBars = 4;
    }
    else if (props.rssi > -80) {
      strengthBars = 3;
    }
    else if (props.rssi > -92) {
      strengthBars = 2;
    }
    else if (props.rssi > -104) {
      strengthBars = 1;
    }
  }
  else if (props.rssi > 2) {
    errorMsg = 'unknown error code = ' + props.rssi;
  }
  else {
    errorMsg = 'error code = ' + props.rssi;
  }

  // work out the strength color
  strengthColor += 'strength-' + strengthBars;

  // work out the bars ui
  if (strengthBars > 0) {
    for (let i=0; i<strengthBars; i++) {
      barsUi.push(<div key={i} className="bar"></div>);
    }
  }
  else {
      barsUi.push(<div key="0" className="bar-null"></div>);
  }

  return (
    <div className={wrapperStrengthColor}>
      <div className="device-id">{props.deviceId}</div>
      <div className="rssi-val">rssi {props.rssi} dBm</div>
      <div className="strength-bars">{barsUi}</div>
      <div className={strengthColor}></div>
      <div className="error">{errorMsg}</div>
    </div>
  );
}

module.exports = {
  RssiSignalStrength
};
