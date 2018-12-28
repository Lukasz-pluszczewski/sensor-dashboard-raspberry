import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Gauge from '../Gauge/Gauge';

import './TempSensorGauge.scss';

class TempSensorGauge extends Component {
  static propTypes = {
    max: PropTypes.number,
    value: PropTypes.number,
    label: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  };

  render() {
    return (
      <div className="TempSensorGauge">
        <Gauge
          width={350}
          height={200}
          max={50}
          min={-20}
          value={this.props.value}
          options={{
            staticLabels: {
              font: "10px sans-serif",
              labels: [-20, -10, 0, 10, 20, 30, 40, 50],
              color: "#000000",
              fractionDigits: 0,
            },
            staticZones: [
              { strokeStyle: 'rgb(3, 169, 244)', min: -20, max: 20, height: 1 },
              { strokeStyle: 'rgb(0, 128, 0)', min: 20, max: 25, height: 1 },
              { strokeStyle: 'rgb(255, 255, 0)', min: 25, max: 30, height: 1 },
              { strokeStyle: 'rgb(255, 0, 0)', min: 30, max: 50, height: 1 },
            ],
          }}
        />
        <div className="TempSensorGauge__label">{this.props.label}</div>
      </div>
    );
  }
}

export default TempSensorGauge;
