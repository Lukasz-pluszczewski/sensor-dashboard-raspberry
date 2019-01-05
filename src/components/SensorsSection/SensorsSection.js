import React, { Component } from 'react';
import PropTypes from 'prop-types';

import HumiditySensorGauge from '../HumiditySensorGauge/HumiditySensorGauge';
import HumiditySensorChart from '../HumiditySensorChart/HumiditySensorChart';
import TempSensorGauge from '../TempSensorGauge/TempSensorGauge';
import TempSensorChart from '../TempSensorChart/TempSensorChart';

import './SensorsSection.scss';

class SensorsSection extends Component {
  static propTypes = {
    temperature: PropTypes.number,
    humidity: PropTypes.number,
    temperatureHistory: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    humidityHistory: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
  };

  render() {
    const temperature = this.props.temperature || 0;
    const humidity = this.props.humidity || 0;

    return (
      <div className="SensorsSection">
        <div className="SensorsSection__section">
          <HumiditySensorGauge value={humidity} label={`${humidity.toFixed(0)}%`} />
          <TempSensorGauge value={temperature} label={`${temperature.toFixed(2)}º`}/>
        </div>
        <div className="SensorsSection__section">
          <TempSensorChart temperatureHistory={this.props.temperatureHistory} label="Temperature history"/>
        </div>
        <div className="SensorsSection__section">
          <HumiditySensorChart humidityHistory={this.props.humidityHistory} label="Humidity history"/>
        </div>
      </div>
    );
  }
}

export default SensorsSection;
