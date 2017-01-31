import React from 'react';
import { RssiSignalStrength } from '../src/main';
const shallow = enzyme.shallow;

function setup( config = {}) {
  let props = {
    deviceId: 'electron-id-12345',
    rssi: '-57'
  };

  props = {
    ...props,
    ...config
  }

  const enzymeWrapper = shallow(<RssiSignalStrength {...props} />);

  return {
    props,
    enzymeWrapper
  }
}

describe('RssiSignalStrength', () => {
  describe('base component render', () => {
    const { enzymeWrapper } = setup();

    it('should render self and primary css classes', () => {
      expect(enzymeWrapper).to.have.length(1);
      expect(enzymeWrapper.find('div').first().hasClass('rssi-signal-strength')).to.be.true;
    });

    it('should render correct dom structure', () => {
      expect(enzymeWrapper.find('.device-id')).to.have.length(1);
      expect(enzymeWrapper.find('.rssi-val')).to.have.length(1);
      expect(enzymeWrapper.find('.strength-bars')).to.have.length(1);
      expect(enzymeWrapper.find('.strength-color')).to.have.length(1);
      expect(enzymeWrapper.find('.error')).to.have.length(1);
    });

    it('should render default enzymeWrapper dom', () => {
      expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
      expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi -57 dBm');
    });
  });


    /*   signal strength (u-Blox Sara U2 and G3 modules)
     *   0: < -105 dBm
     *   1: < -93 dBm
     *   2: < -81 dBm
     *   3: < -69 dBm
     *   4: < -57 dBm
     *   5: >= -57 dBm
     */

   describe('signal strength 5 render test (rssi -57)', () => {
     const { enzymeWrapper } = setup({
       rssi: '-57'
     });

     it('should render correct dom for signal strength 5', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi -57 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(5);
       expect(enzymeWrapper.find('.strength-color.strength-5')).to.have.length(1);
     });
   });

   describe('signal strength 5 render test (rssi -50)', () => {
     const { enzymeWrapper } = setup({
       rssi: '-50'
     });

     it('should render correct dom for signal strength 5', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi -50 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(5);
       expect(enzymeWrapper.find('.strength-color.strength-5')).to.have.length(1);
     });
   });

   describe('signal strength 4 render test (rssi -58)', () => {
     const { enzymeWrapper } = setup({
       rssi: '-58'
     });

     it('should render correct dom for signal strength 4', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi -58 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(4);
       expect(enzymeWrapper.find('.strength-color.strength-4')).to.have.length(1);
     });
   });

   describe('signal strength 3 render test (rssi -70)', () => {
     const { enzymeWrapper } = setup({
       rssi: '-70'
     });

     it('should render correct dom for signal strength 3', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi -70 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(3);
       expect(enzymeWrapper.find('.strength-color.strength-3')).to.have.length(1);
     });
   });

   describe('signal strength 2 render test (rssi -82)', () => {
     const { enzymeWrapper } = setup({
       rssi: '-82'
     });

     it('should render correct dom for signal strength 2', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi -82 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(2);
       expect(enzymeWrapper.find('.strength-color.strength-2')).to.have.length(1);
     });
   });

   describe('signal strength 1 render test (rssi -94)', () => {
     const { enzymeWrapper } = setup({
       rssi: '-94'
     });

     it('should render correct dom for signal strength 1', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi -94 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(1);
       expect(enzymeWrapper.find('.strength-color.strength-1')).to.have.length(1);
     });
   });

   describe('signal strength 0 render test (rssi -106)', () => {
     const { enzymeWrapper } = setup({
       rssi: '-106'
     });

     it('should render correct dom for signal strength 0', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi -106 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(1);
       expect(enzymeWrapper.find('.bar-null')).to.have.length(1);
       expect(enzymeWrapper.find('.strength-color.strength-0')).to.have.length(1);
     });
   });

   describe('signal strength 0 and error test for error code 1 (rssi 1)', () => {
     const { enzymeWrapper } = setup({
       rssi: '1'
     });

     it('should render correct dom for signal strength 0', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi 1 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('error code = 1');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(1);
       expect(enzymeWrapper.find('.bar-null')).to.have.length(1);
       expect(enzymeWrapper.find('.strength-color.strength-0')).to.have.length(1);
     });
   });

   describe('signal strength 0 and error test for error code 2 (rssi 2)', () => {
     const { enzymeWrapper } = setup({
       rssi: '2'
     });

     it('should render correct dom for signal strength 0', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi 2 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('error code = 2');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(1);
       expect(enzymeWrapper.find('.bar-null')).to.have.length(1);
       expect(enzymeWrapper.find('.strength-color.strength-0')).to.have.length(1);
     });
   });

   describe('signal strength 0 and error test for unknown error (rssi 3)', () => {
     const { enzymeWrapper } = setup({
       rssi: '3'
     });

     it('should render correct dom for signal strength 0', () => {
       expect(enzymeWrapper.find('.device-id').text()).to.be.equal('electron-id-12345');
       expect(enzymeWrapper.find('.rssi-val').text()).to.be.equal('rssi 3 dBm');
       expect(enzymeWrapper.find('.error').text()).to.be.equal('unknown error code = 3');
       expect(enzymeWrapper.find('.strength-bars').children()).to.have.length(1);
       expect(enzymeWrapper.find('.bar-null')).to.have.length(1);
       expect(enzymeWrapper.find('.strength-color.strength-0')).to.have.length(1);
     });
   });
});
