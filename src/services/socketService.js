import io from 'socket.io-client';

import config from '../config';

const socketService = onValueChange => {
  const socket = io(config.apiUrl);
  socket.on('sensor', data => {
    console.log('got sensor data', data);
    onValueChange('temperature', data.temperature);
    onValueChange('humidity', data.humidity);
  });
  socket.on('temperature:changed', data => {
    console.log('temperature changed', data);
    onValueChange('temperature', data.value);
  });
  socket.on('humidity:changed', data => {
    console.log('humidity changed', data);
    onValueChange('humidity', data.value);
  });
  socket.emit('login', localStorage.getItem('password'));
};

export default socketService;