'use strict';

import React from 'react';
import { RssiSignalStrength } from '../main';
require('../css/rssiSignalStrength.css');

const Example = () => (
  <div>
    <h1>RssiSignalStrength component</h1>
    <h2>This react component duplicates the 1-5 bar logic for Electron signal strength (based on rssi) as well as shows a color block to indicate signal strenth as a single RGB color. You can use the RGB color to implement a RGB led on your Electron and then remote monitor the Electron for trouble shooting.</h2>
    <div className="all-signal-strengths">
      <RssiSignalStrength deviceId="electron-id-12345" rssi="-56" />
    </div>
  </div>
);

module.exports = Example;
