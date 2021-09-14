import React from 'react';
import 'antd/dist/antd.css';
import './layout.css';
import { Avatar, Image, Layout, Menu, Button } from 'antd';
import { Switch, Link, Route } from 'react-router-dom';
// import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { normalUserRouter, adminRouter } from '@/router/router';
// import store from '@/redux/index';
import { connect } from 'react-redux';
import { logout } from '@/redux/action';
// import AuthRoute from '@/router/AuthRoute';

// const { SubMenu } = Menu;
// const { Header, Content, Sider } = Layout;
const { Header, Content } = Layout;

function mapStateToProps(state) {
  return {
    userStatus: state.loginStatusReducer,
  };
}

function renderMenu(userRoutes, path) {
  return (
    <Menu selectedKeys={path} theme="dark" mode="horizontal">
      {userRoutes.map((item, index) => {
        return (
          <Menu.Item key={item.path}>
            {` ${item.name}`}
            <Link to={item.path}></Link>
          </Menu.Item>
        );
      })}
    </Menu>
  );
}

function LayoutComponent(props) {
  function getUserRouter() {
    switch (props.userStatus.userData.auth) {
      case 'admin':
        return adminRouter;
      default:
        return normalUserRouter;
    }
  }
  let userRoutes = getUserRouter();

  function logOut() {
    props.dispatch(logout());
  }
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="menu">{renderMenu(userRoutes, props.location.pathname)}</div>
        <div>
          <Avatar src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} />
          <span className="user-name">admin</span>
          <Button onClick={logOut} type="primary" ghost>
            LogOut
          </Button>
        </div>
      </Header>
      <Layout>
        <Content style={{ padding: '0 50px', marginTop: 64 }}>
          <Switch>
            {userRoutes.map(({ path, component, ...routes }) => {
              return <Route key={path} path={path} component={component} {...routes} />;
            })}
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
}

// export default LayoutComponent;
export default connect(mapStateToProps)(LayoutComponent);
