# react-particle-io-utilities

A work in progress repo of React utility components that can be used with the particle.io IoT platform APIs to render some UI around the raw data the APIs return. For example, if you get the RSSI value from an Electron via the API and you want to mirror the signal strength logic as a React UI component (i.e. 1 - 5 bars) you can use the <RssiSignalStrength /> components like so:

`<RssiSignalStrength deviceId="electron-id-12345" rssi="-56" />`

![react-particle-io-utilities](https://raw.githubusercontent.com/newbreedofgeek/react-particle-io-utilities/master/RssiSignalStrength-ui-eg.png)


Full example usage code is available in the `src/examples` directory. Have a look at a [live working version here](https://newbreedofgeek.github.io/react-particle-io-utilities/)

### get started
- run
```
npm install --save react-particle-io-utilities
```

- bring RssiSignalStrength into your project like so
```
var {RssiSignalStrength} = require('react-particle-io-utilities')
```

- then use it like so
```
<RssiSignalStrength deviceId="electron-id-12345" rssi="-56" />
```
