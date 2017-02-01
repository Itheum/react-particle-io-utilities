'use strict';

import React, {Component} from 'react';
import { RssiSignalStrength } from '../main';
require('../css/rssiSignalStrength.css');

export default class Example extends Component {
  constructor(props) {
    super(props);

    this.state = {
      rssi: -51
    };

    this.rssiTestData = [-51, -57, -58, -69, -81, -93, -104, -113, -114, -50, 1, 2, 3, 0];
  }

  componentDidMount() {
    setInterval(() => {
      const nextVal = this.rssiTestData.indexOf(this.state.rssi) + 1;

      this.setState({
        rssi: this.rssiTestData[(nextVal >= this.rssiTestData.length) ? 0 : nextVal]
      })
    }, 2000);
  }

  render() {
    return (
      <div>
        <h1>RssiSignalStrength component</h1>
        <h2>This react component duplicates the 1-5 bar logic for Electron signal strength (based on rssi) as well as shows a color block to indicate signal strenth as a single RGB color. You can use the RGB color to implement a RGB led on your Electron and then remote monitor the Electron for trouble shooting.</h2>
        <div className="all-signal-strengths">
          <RssiSignalStrength deviceId="electron-id-12345" rssi={this.state.rssi} />
        </div>
        <div class="desc">
          The above example cycles through these dBm values [-51, -57, -58, -69, -81, -93, -104, -113, -114, -50, 1, 2, 3, 0]
        </div>
      </div>
    )
  }
}
