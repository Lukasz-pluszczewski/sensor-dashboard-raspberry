import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import PropTypes from 'prop-types';
import GaugeJS from 'gaugeJS';

class Gauge extends Component {
  static propTypes = {
    width: PropTypes.number,
    height: PropTypes.number,
    max: PropTypes.number,
    min: PropTypes.number,
    value: PropTypes.number,
    options: PropTypes.object,
  };

  componentDidMount() {
    const target = findDOMNode(this);
    this.gaugeInstance = new GaugeJS.Gauge(target).setOptions(this.props.options);
    this.gaugeInstance.maxValue = this.props.max;
    this.gaugeInstance.minValue = this.props.min || 0;
    this.gaugeInstance.set(this.props.value);
  }

  componentDidUpdate() {
    this.gaugeInstance.set(this.props.value);
  }

  render() {
    return (
      <canvas width={this.props.width} height={this.props.height} />
    );
  }
}

export default Gauge;
