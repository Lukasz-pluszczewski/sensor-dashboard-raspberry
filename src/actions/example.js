import request from '../services/request';

const actionsDefinitions = {
  makeRequest: {
    type: 'better-promise',
    async: query => request.makeRequest('GET', '/example', null, query),
    initial: {
      'result.getRecipes': [],
    },
  },
  asyncExample: {
    type: 'better-promise',
    async: arg => Promise.resolve(arg),
  },
  syncExample: {
    type: 'better-promise',
    sync: (arg) => ({
      foo: arg.foo,
      bar: arg.bar,
    }),
    result: {
      foo: 'result.foo',
      bar: 'result.bar',
    },
  },
  defaultExample: {
    type: 'default',
    result: {
      foo: { source: 'payload.foo', default: null},
      bar: { source: 'payload.bar', default: null },
    },
  },
  complicatedExample: {
    type: 'default',
    result: {
      baz: (action, currentValue) => {
        return (currentValue || 0) + action.payload;
      },
    },
  },
};

export default actionsDefinitions;