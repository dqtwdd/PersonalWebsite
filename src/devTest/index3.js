import ReactDOM from 'react-dom';

import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

//import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';

import XOGame from './pages/XOGame';
import RanderNum from './pages/RanderNum';
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
export default function App() {
  return (
    <Router>
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal">
              <Router>
                <Menu.Item>
                  <Link to="/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/about">About</Link>
                </Menu.Item>
                <Menu.Item>
                  <Link to="/topics">Topics</Link>
                </Menu.Item>
              </Router>
            </Menu>
          </Header>
        </Layout>
        <Switch>
          <Route path="/about">
            <RanderNum />
          </Route>
          <Route path="/topics">
            <XOGame />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
        </li>
      </ul>

      {/* The Topics page has its own <Switch> with more routes
          that build on the /topics URL path. You can think of the
          2nd <Route> here as an "index" page for all topics, or
          the page that is shown when no topic is selected */}
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}
function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}

ReactDOM.render(<App />, document.getElementById('root'));
