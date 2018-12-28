import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Gauge from '../Gauge/Gauge';

import './HumiditySensorGauge.scss';

class HumiditySensorGauge extends Component {
  static propTypes = {
    max: PropTypes.number,
    value: PropTypes.number,
    label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  render() {
    return (
      <div className="HumiditySensorGauge">
        <Gauge
          width={350}
          height={200}
          max={100}
          min={0}
          value={this.props.value}
          options={{
            staticLabels: {
              font: "10px sans-serif",
              labels: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
              color: "#000000",
              fractionDigits: 0,
            },
            staticZones: [
              { strokeStyle: 'rgb(33, 150, 243)', min: 30, max: 45, height: 1 },
              { strokeStyle: 'rgb(33, 150, 243)', min: 55, max: 60, height: 1 },

              { strokeStyle: 'rgb(0, 128, 0)', min: 45, max: 55, height: 1 },

              { strokeStyle: 'rgb(255, 0, 0)', min: 60, max: 100, height: 1 },
              { strokeStyle: 'rgb(255, 0, 0)', min: 0, max: 30, height: 1 },
            ],
          }}
        />
        <div className="HumiditySensorGauge__label">{this.props.label}</div>
      </div>
    );
  }
}

export default HumiditySensorGauge;
