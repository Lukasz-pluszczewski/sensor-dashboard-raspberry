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
const WebsocketPage = lazy(() => import(
  /* webpackChunkName: "WebsocketPage" */
  '../../pages/WebsocketPage'
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
            <Menu
              theme="dark"
              mode="horizontal"
              defaultSelectedKeys={[activePage]}
              style={{ lineHeight: '64px' }}
            >
              <Menu.Item key="home">
                <Link to="/"><Icon type="home" />Home</Link>
              </Menu.Item>
              <Menu.Item key="websocket">
                <Link to="/websocket"><Icon type="home" />Websocket</Link>
              </Menu.Item>
            </Menu>
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
                <Route
                  exact
                  path="/websocket"
                  component={WebsocketPage}
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
