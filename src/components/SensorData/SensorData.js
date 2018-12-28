import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Gauge from '../Gauge/Gauge';

class SensorData extends Component {
  static propTypes = {
    max: PropTypes.number,
    value: PropTypes.number,
  };

  render() {
    return (
      <div>
        <Gauge width={400} height={200} max={this.props.max} value={this.props.value} options={{}} />
      </div>
    );
  }
}

export default SensorData;
