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
  console.log('stateeeeeeeeeeeeeeee', state);
  return {
    userStatus: state.loginStatusReducer,
  };
}

function renderMenu(userRoutes) {
  return (
    <Menu theme="dark" mode="horizontal">
      {userRoutes.map((item, index) => {
        return (
          <Menu.Item key={index}>
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
        break;
      default:
        return normalUserRouter;
        break;
    }
  }
  let userRoutes = getUserRouter();

  function logOut() {
    props.dispatch(logout());
  }
  return (
    <Layout className="layout">
      <Header className="header">
        <div className="menu">{renderMenu(userRoutes)}</div>
        <div>
          <Avatar src={<Image src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />} />
          <span className="user-name">admin</span>
          <Button onClick={logOut} type="primary" ghost>
            LogOut
          </Button>
        </div>
      </Header>
      <Layout>
        {/* <Sider width={200} className="site-layout-background">
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
        </Sider> */}
        <Content style={{ padding: '0 50px' }}>
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
