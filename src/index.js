import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login/Login';
import store from './redux/index';
import { Provider } from 'react-redux';
import { homeRouter } from '@/router/router';
import AuthRoute from '@/router/AuthRoute';

// const urlParams = getUrlParams();

function Demo(props) {
  useEffect(() => {});
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route path="/Login" component={Login} />
          <AuthRoute {...homeRouter} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Demo />, document.getElementById('root'));
