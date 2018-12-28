import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HumiditySensorGauge from '../HumiditySensorGauge/HumiditySensorGauge';
import TempSensorGauge from '../TempSensorGauge/TempSensorGauge';

import './SensorsSection.scss';

class SensorsSection extends Component {
  static propTypes = {
    temperature: PropTypes.number,
    humidity: PropTypes.number,
  };

  render() {
    const temperature = this.props.temperature || 0;
    const humidity = this.props.humidity || 0;

    return (
      <div className="SensorsSection">
        <HumiditySensorGauge value={humidity} label={`${humidity.toFixed(0)}%`} />
        <TempSensorGauge value={temperature} label={`${temperature.toFixed(2)}º`}/>
      </div>
    );
  }
}

export default SensorsSection;
