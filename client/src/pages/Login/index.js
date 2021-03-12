import React, { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import './index.less'
import $ from 'jquery';
const Login = () => {
    console.log($, 111)
    const [init, setInit] = useState(20)
    const onFinish = (values) => {
        console.log('Success:', values);
        window.location.href = 'https://www.jianshu.com/p/eb6ce601597c'
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };
return  <div className="login">
        <Form
            className="login-form"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
        <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
        >
            <Input />
        </Form.Item>

        <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
        >
            <Input.Password />
        </Form.Item>
        {/* <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
        </Form.Item> */}
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Submit
            </Button>
        </Form.Item>
    </Form>
    </div>
}
export default Login