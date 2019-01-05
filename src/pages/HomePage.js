import React, { Component } from 'react';
import PropTypes from 'prop-types';

import config from '../config';
import socket from '../services/socketService';
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
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      this.props.getSensorData();
    }, 2000);

    this.props.getSensorHistory(config.defaultStartDateForCharts.toISOString());
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  handleDateChange = date => {
    const isoDate = date.startOf('day').toISOString();
    this.props.getSensorHistory(isoDate);
  };

  render() {
    return (
      <Layout
        sider={null}
        breadcrumbs={['Home']}
      >
        <DatePicker default={config.defaultStartDateForCharts} onChange={this.handleDateChange} />
        <SensorsSection
          temperature={this.props.temperature}
          humidity={this.props.humidity}
          temperatureHistory={this.props.temperatureHistory}
          humidityHistory={this.props.humidityHistory}
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
  },
  {
    getSensorData: getAction('getSensorData'),
    getSensorHistory: getAction('getSensorHistory'),
    setTemperature: getAction('setTemperature'),
    setHumidity: getAction('setHumidity'),
  }
)(HomePage);
