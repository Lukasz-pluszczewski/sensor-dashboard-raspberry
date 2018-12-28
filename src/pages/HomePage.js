import React, { Component } from 'react';
import PropTypes from 'prop-types';

import socket from '../services/socketService';
import { getAction, connect } from '../services/reduxBreeze';

import SensorsSection from '../components/SensorsSection/SensorsSection';
import Layout from '../components/Layout/Layout';

class HomePage extends Component {
  static propTypes = {
    getSensorData: PropTypes.func,
    setTemperature: PropTypes.func,
    setHumidity: PropTypes.func,
    temperature: PropTypes.number,
    humidity: PropTypes.number,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      // this.props.getSensorData();
    }, 2000);

    socket(this.onSensorValueChange);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  onSensorValueChange = (sensor, value) => {
    if (sensor === 'temperature') {
      this.props.setTemperature(value);
    } else if (sensor === 'humidity') {
      this.props.setHumidity(value);
    }
  };

  render() {
    return (
      <Layout
        sider={null}
        breadcrumbs={['Home']}
      >
        <SensorsSection temperature={this.props.temperature} humidity={this.props.humidity} />
      </Layout>
    );
  }
}

export default connect(
  {
    temperature: 'sensors.temperature',
    humidity: 'sensors.humidity',
  },
  {
    getSensorData: getAction('getSensorData'),
    setTemperature: getAction('setTemperature'),
    setHumidity: getAction('setHumidity'),
  }
)(HomePage);
