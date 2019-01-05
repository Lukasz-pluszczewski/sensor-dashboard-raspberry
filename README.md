# Sensor dashboard raspberry
> Frontend boilerplate using create-react-app, ant design, redux and redux-breeze

### Environment variables
- **PORT** (default: 5000, production only)
- **API_URL**
- **PROXY_API_URL**

### Run the development build
`API_URL=http://localhost:8080 PROXY_API_URL=http://localhost:8081 npm start`

### Run the production build
`API_URL=http://localhost:8080 PROXY_API_URL=http://localhost:8081 npm run production`

`Production` script runs `npm run build` and then `npm run serve`. Only the latter requires API_URL env variable.
