import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer} from 'recharts';

class HumiditySensorChart extends Component {
  static propTypes = {
    humidityHistory: PropTypes.arrayOf(PropTypes.shape({ timestamp: PropTypes.string, value: PropTypes.number })),
  };

  render() {
    const data = this.props.humidityHistory.map(el => ({
      timestamp: moment(el.timestamp).format('DD-MM HH:mm'),
      value: parseFloat(el.value.toFixed(2)),
    }));

    return (
      <div style={{ width: '100%' }}>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            width={700}
            height={400}
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="timestamp" />
            <YAxis domain={['dataMin - 3', 'dataMax + 3']} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="value" stroke="#8884d8" dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
  }
}

export default HumiditySensorChart;
