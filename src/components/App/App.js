import React, { Component, Suspense, lazy } from 'react';

import Login from '../Login/Login';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Loading from '../Loading/Loading';
import { Layout, Menu, Icon, Button } from 'antd';

import './App.scss';

const { Header } = Layout;

// lazy loaded routes
const HomePage = lazy(() => import(
  /* webpackChunkName: "HomePage" */
  '../../pages/HomePage'
));

class App extends Component {

  removePassword = () => {
    localStorage.setItem('password', '');
    this.loginRef.forceUpdate();
  };

  render() {
    let activePage;

    switch(window.location.pathname) {
      case '/example':
        activePage = 'example';
        break;
      default:
        activePage = 'home';
    }

    return (
      <Router>
        <Layout>
          <Header className="header">
            <Button
              className="App__logout"
              type="primary"
              shape="circle"
              icon="logout"
              onClick={this.removePassword}
            />
          </Header>
          <Login ref={el => this.loginRef = el}>
            <Suspense fallback={<Loading withLayout/>}>
              <Switch>
                <Route
                  exact
                  path="/"
                  component={HomePage}
                />
              </Switch>
            </Suspense>
          </Login>
        </Layout>
      </Router>
    );
  }
}

export default App;
