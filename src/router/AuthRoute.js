import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '@/redux/action';
function mapStateToProps(state) {
  return {
    userData: state.loginStatusReducer,
  };
}

function AuthRoute(props) {
  const { name, auth, backUrl, ...otherProps } = props;
  // 如果用户有权限，就渲染对应的路由
  if (
    props.userData.loginStatus &&
    (props.userData.userData.auth === auth || props.userData.userData.auth === 'admin')
  ) {
    return <Route {...otherProps} />;
  } else if (localStorage.getItem('userName') === 'admin') {
    let tempVal = {
      username: localStorage.getItem('userName'),
      auth: localStorage.getItem('auth'),
    };
    props.dispatch(login(tempVal));
    console.log('layout otherProps', <Route {...otherProps} />);

    return <Route {...otherProps} />;
  } else {
    // 如果没有权限，返回配置的默认路由
    return <Redirect to={backUrl} />;
  }
}

export default connect(mapStateToProps)(AuthRoute);
