import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import React from 'react';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

//import React from "react";
import { BrowserRouter as Router, Switch, Route, Link, useRouteMatch, useParams } from 'react-router-dom';
import XOGame from './pages/XOGame';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

export default function App() {
  return (
    <Router>
      <Layout className="layout">
        <Header>
          <Menu theme="dark" mode="horizontal">
            <Menu.Item key="0">
              <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="1">
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/topics">Topics</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} className="site-layout-background">
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 50px' }}>
            <Switch>
              <Route path="/about">
                <About />
              </Route>
              <Route path="/topics">
                <XOGame />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

// function Topics() {
//   let match = useRouteMatch();

//   return (
//     <div>
//       <h2>Topics</h2>

//       <ul>
//         <li>
//           <Link to={`${match.url}/components`}>Components</Link>
//         </li>
//         <li>
//           <Link to={`${match.url}/props-v-state`}>Props v. State</Link>
//         </li>
//       </ul>

//       {/* The Topics page has its own <Switch> with more routes
//           that build on the /topics URL path. You can think of the
//           2nd <Route> here as an "index" page for all topics, or
//           the page that is shown when no topic is selected */}
//       <Switch>
//         <Route path={`${match.path}/:topicId`}>
//           <Topic />
//         </Route>
//         <Route path={match.path}>
//           <h3>Please select a topic.</h3>
//         </Route>
//       </Switch>
//     </div>
//   );
// }
// function Topic() {
//   let { topicId } = useParams();
//   return <h3>Requested topic ID: {topicId}</h3>;
// }

ReactDOM.render(<App />, document.getElementById('root'));
