import request from '../services/request';
import config from '../config';

const actionsDefinitions = {
  getSensorData: {
    type: 'better-promise',
    async: () => request.makeRequest('GET', '/sensor'),
    initial: {
      'result.temperature': 0,
      'result.humidity': 0,
    },
    result: {
      temperature: 'result.temperature',
      humidity: 'result.humidity',
    },
  },
  getSensorHistory: {
    type: 'better-promise',
    async: (start, end) => request.makeProxyRequest('GET', `/sensors`, null, { start, end }),
    initial: {
      temperatureHistory: [],
      humidityHistory: [],
    },
    result: {
      temperatureHistory: 'result.temperature',
      humidityHistory: 'result.humidity',
    },
  },
  setTemperature: {
    type: 'default',
    result: {
      temperature: 'payload',
    },
  },
  setHumidity: {
    type: 'default',
    result: {
      humidity: 'payload',
    },
  },
};

export default actionsDefinitions;