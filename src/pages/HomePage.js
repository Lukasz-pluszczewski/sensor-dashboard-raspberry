import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import config from '../config';
import { getAction, connect } from '../services/reduxBreeze';

import SensorsSection from '../components/SensorsSection/SensorsSection';
import Layout from '../components/Layout/Layout';

import { DatePicker } from 'antd';

class HomePage extends Component {
  static propTypes = {
    getSensorData: PropTypes.func,
    getSensorHistory: PropTypes.func,
    setTemperature: PropTypes.func,
    setHumidity: PropTypes.func,
    temperature: PropTypes.number,
    humidity: PropTypes.number,
    temperatureHistory: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    humidityHistory: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    temperature2History: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
    humidity2History: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
  };

  componentDidMount() {
    this.props.getSensorHistory({ start: config.defaultStartDateForCharts.toISOString() });
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleDateChange = date => {
    const isoDate = date.startOf('day').toISOString();
    this.props.getSensorHistory({ start: isoDate });
  };

  render() {
    return (
      <Layout
        sider={null}
      >
        <DatePicker default={moment(config.defaultStartDateForCharts)} onChange={this.handleDateChange} />
        <SensorsSection
          temperature={this.props.temperature}
          humidity={this.props.humidity}
          temperatureHistory={this.props.temperatureHistory}
          humidityHistory={this.props.humidityHistory}
          temperature2History={this.props.temperature2History}
          humidity2History={this.props.humidity2History}
        />
      </Layout>
    );
  }
}

export default connect(
  {
    temperature: 'sensors.temperature',
    humidity: 'sensors.humidity',
    humidityHistory: 'sensors.humidityHistory',
    temperatureHistory: 'sensors.temperatureHistory',
    humidity2History: 'sensors.humidity2History',
    temperature2History: 'sensors.temperature2History',
  },
  {
    getSensorData: getAction('getSensorData'),
    getSensorHistory: getAction('getSensorHistory'),
    setTemperature: getAction('setTemperature'),
    setHumidity: getAction('setHumidity'),
  }
)(HomePage);
