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
    async: ({ start, end }) => request.makeProxyRequest('GET', `/sensors`, null, { start, end }),
    initial: {
      temperatureHistory: [],
      humidityHistory: [],
      temperature2History: [],
      humidity2History: [],
      temperature3History: [],
      humidity3History: [],
      temperature4History: [],
      humidity4History: [],
    },
    result: {
      temperatureHistory: 'result.temperature',
      humidityHistory: 'result.humidity',
      temperature2History: 'result.temperature2',
      humidity2History: 'result.humidity2',
      temperature3History: 'result.temperature3',
      humidity3History: 'result.humidity3',
      temperature4History: 'result.temperature4',
      humidity4History: 'result.humidity4',
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
