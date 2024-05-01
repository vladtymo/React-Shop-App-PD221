import React from 'react';
import { Button, Checkbox, Form, Input, message } from 'antd';
import { accountsService } from '../services/accounts';
import { tokensService } from '../services/tokens';

const onFinish = async (values) => {
    console.log('Success:', values);

    const res = await accountsService.login(values);

    if (res.status != 200) {
        message.error(`Something went wrong!`);
        return;
    }

    tokensService.save(res.data);

    console.log(tokensService.getAccessToken());
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

export default function Login() {
    return (
        <>
            <h1 style={center}>Login Form</h1>
            <Form
                name="basic"
                style={{
                    maxWidth: 400,
                    margin: "auto"
                }}
                initialValues={{
                    remember: true,
                }}
                layout="vertical"

                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your email!',
                        },
                        {
                            type: 'email',
                            message: 'The input is not valid E-mail!',
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
                    style={center}
                >
                    <Checkbox>Remember me</Checkbox>
                </Form.Item>

                <Form.Item
                    style={center}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </>
    )
};

const center = {
    textAlign: "center"
}