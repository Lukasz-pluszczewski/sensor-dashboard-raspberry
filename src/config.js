import moment from 'moment';

const config = {
  apiUrl: process.env.REACT_APP_API_URL,
  proxyApiUrl: process.env.REACT_APP_PROXY_API_URL || 'http://api.sensors.pluszczewski.pl',
  defaultStartDateForCharts: moment().subtract(1, 'days').startOf('day'),
};

export default config;
