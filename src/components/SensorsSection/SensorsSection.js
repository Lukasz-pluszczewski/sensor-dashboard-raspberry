import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

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
    temperature2History: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    humidity2History: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    temperature3History: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    humidity3History: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    temperature4History: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    humidity4History: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
  };

  render() {
    const {
      temperatureHistory,
      humidityHistory,
      temperature2History,
      humidity2History,
      temperature3History,
      humidity3History,
      temperature4History,
      humidity4History,
    } = this.props;

    const currentTemperatureData = temperatureHistory.length ? _.last(temperatureHistory) : {};
    const currentHumidityData = humidityHistory.length ? _.last(humidityHistory) : {};
    const currentTemperature2Data = temperature2History.length ? _.last(temperature2History) : {};
    const currentHumidity2Data = humidity2History.length ? _.last(humidity2History) : {};
    const currentTemperature3Data = temperature3History.length ? _.last(temperature3History) : {};
    const currentHumidity3Data = humidity3History.length ? _.last(humidity3History) : {};
    const currentTemperature4Data = temperature4History.length ? _.last(temperature4History) : {};
    const currentHumidity4Data = humidity4History.length ? _.last(humidity4History) : {};

    const temperature = currentTemperatureData.value || 0;
    const humidity = currentHumidityData.value || 0;
    const temperature2 = currentTemperature2Data.value || 0;
    const humidity2 = currentHumidity2Data.value || 0;
    const temperature3 = currentTemperature3Data.value || 0;
    const humidity3 = currentHumidity3Data.value || 0;
    const temperature4 = currentTemperature4Data.value || 0;
    const humidity4 = currentHumidity4Data.value || 0;

    console.log('values', {
      currentTemperatureData,
      currentHumidityData,
      currentTemperature2Data,
      currentHumidity2Data,
      currentTemperature3Data,
      currentHumidity3Data,
      currentTemperature4Data,
      currentHumidity4Data,
    });

    return (
      <div className="SensorsSection">
        <div className="SensorsSection__section">
          <h2>Living room</h2>
          <div className="SensorsSection__gauges">
            <HumiditySensorGauge value={humidity} label={`${humidity.toFixed(0)}%`} date={currentHumidityData.timestamp} />
            <TempSensorGauge value={temperature} label={`${temperature.toFixed(2)}º`} date={currentTemperatureData.timestamp}/>
          </div>
        </div>
        <div className="SensorsSection__section">
          <h2>Bedroom</h2>
          <div className="SensorsSection__gauges">
            <HumiditySensorGauge value={humidity2} label={`${humidity2.toFixed(0)}%`} date={currentHumidity2Data.timestamp} />
            <TempSensorGauge value={temperature2} label={`${temperature2.toFixed(2)}º`} date={currentTemperature2Data.timestamp}/>
          </div>
        </div>
        <div className="SensorsSection__section">
          <h2>Other</h2>
          <div className="SensorsSection__gauges">
            <HumiditySensorGauge value={humidity3} label={`${humidity3.toFixed(0)}%`} date={currentHumidity3Data.timestamp} />
            <TempSensorGauge value={temperature3} label={`${temperature3.toFixed(2)}º`} date={currentTemperature3Data.timestamp}/>
          </div>
        </div>
        <div className="SensorsSection__section">
          <h2>Outside</h2>
          <div className="SensorsSection__gauges">
            <HumiditySensorGauge value={humidity4} label={`${humidity4.toFixed(0)}%`} date={currentHumidity4Data.timestamp} />
            <TempSensorGauge value={temperature4} label={`${temperature4.toFixed(2)}º`} date={currentTemperature4Data.timestamp}/>
          </div>
        </div>
        <div className="SensorsSection__section SensorsSection__sectionChart">
          <h2>Living room °C</h2>
          <TempSensorChart temperatureHistory={this.props.temperatureHistory} label="Temperature history"/>
        </div>
        <div className="SensorsSection__section SensorsSection__sectionChart">
          <h2>Living room %</h2>
          <HumiditySensorChart humidityHistory={this.props.humidityHistory} label="Humidity history"/>
        </div>
        <div className="SensorsSection__section SensorsSection__sectionChart">
          <h2>Bedroom °C</h2>
          <TempSensorChart temperatureHistory={this.props.temperature2History} label="Temperature history"/>
        </div>
        <div className="SensorsSection__section SensorsSection__sectionChart">
          <h2>Bedroom %</h2>
          <HumiditySensorChart humidityHistory={this.props.humidity2History} label="Humidity history"/>
        </div>
        <div className="SensorsSection__section SensorsSection__sectionChart">
          <h2>Other °C</h2>
          <TempSensorChart temperatureHistory={this.props.temperature3History} label="Temperature history"/>
        </div>
        <div className="SensorsSection__section SensorsSection__sectionChart">
          <h2>Other %</h2>
          <HumiditySensorChart humidityHistory={this.props.humidity3History} label="Humidity history"/>
        </div>
        <div className="SensorsSection__section SensorsSection__sectionChart">
          <h2>Outside °C</h2>
          <TempSensorChart temperatureHistory={this.props.temperature4History} label="Temperature history"/>
        </div>
        <div className="SensorsSection__section SensorsSection__sectionChart">
          <h2>Outside %</h2>
          <HumiditySensorChart humidityHistory={this.props.humidity4History} label="Humidity history"/>
        </div>
      </div>
    );
  }
}

export default SensorsSection;
