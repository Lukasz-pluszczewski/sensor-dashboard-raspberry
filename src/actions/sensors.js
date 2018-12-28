import request from '../services/request';

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