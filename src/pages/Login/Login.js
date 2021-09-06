import React from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import { Card, message } from 'antd';
import './Login.css';
import { connect } from 'react-redux';
import { login } from '@/redux/action';
import { withRouter } from 'react-router';
function mapStateToProps(state) {
  return {
    count: state.numReducer.count,
  };
}

function Login(props) {
  const onFinish = (values) => {
    if (values.username === 'admin' && values.password === 'admin') {
      values.auth = 'admin';
      props.dispatch(login(values));
      message.success('登陆成功');
      props.history.push('/');
    } else if (values.username === 'no' && values.password === 'no') {
      values.auth = 'normal';
      props.dispatch(login(values));
      message.success('登陆成功');
      props.history.push('/');
    } else {
      message.error('用户名或密码错误');
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="login_card">
      <Card style={{ width: 500 }}>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: 'Please input your username!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
  // }
}
const LoginCom = withRouter(connect(mapStateToProps)(Login));
export default LoginCom;
