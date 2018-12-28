import React, { Component } from 'react';

import notification from '../services/notificationService';
import { getAction, connect } from '../services/reduxBreeze';

import Layout from '../components/Layout/Layout';

class ExamplePage extends Component {
  static propTypes = {
  };

  componentDidMount() {
    notification.success('Component mounted!')
  }

  componentWillUnmount() {
    notification.error('Component will unmount!');
  }

  render() {
    return (
      <Layout
        breadcrumbs={['Home', 'Example']}
      >
        Lorem ipsum
      </Layout>
    );
  }
}

export default connect(
  {
    defaultFoo: 'example.foo',
    defaultBar: 'example.bar',
  },
  {
    defaultExample: getAction('defaultExample'),
  }
)(ExamplePage);
