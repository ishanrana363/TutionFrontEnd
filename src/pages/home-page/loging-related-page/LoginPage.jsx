import React from 'react';
import { GoogleCircleFilled } from '@ant-design/icons';
import { Button, Form, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

const LoginPage = () => {
    const [form] = Form.useForm(); // Form instance

    const onFinish = (values) => {
        console.log("Submitted Data:", values);
        form.resetFields(); // ইনপুট ফিল্ডগুলো ক্লিয়ার করবে
    };

    return (
        <div className='text-[#F1F4F8]'>
            <div className='flex flex-col w-full justify-center items-center h-screen'>
                <div className='max-w-7xl mx-auto bg-[##E7E7F1] px-16 shadow border'>
                    <div>
                        <img className='block mx-auto'
                            src="https://res.cloudinary.com/dj2edy2rg/image/upload/v1740054521/Illustration_amfkue.png"
                            alt=""
                        />
                        <div className='py-3'>
                            <h1 className='text-[#101828] text-3xl font-semibold'>Log in to your account</h1>
                            <p className='text-[#475467] pt-3'>Welcome back! Please enter your details.</p>
                        </div>
                    </div>

                    <Form
                        form={form}
                        name="login_form"
                        onFinish={onFinish}
                        layout="vertical"
                    >
                        <Form.Item
                            label="Email"
                            name="email"
                            rules={[
                                { required: true, message: "Please enter your email" },
                                { type: "email", message: "Please enter a valid email" }
                            ]}
                        >
                            <Input placeholder='Enter your email' />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{ required: true, message: "Enter your password" }]}
                        >
                            <Input.Password placeholder='Enter your password' />
                        </Form.Item>

                        <Form.Item>
                            <Button htmlType='submit' block style={{ backgroundColor: "#64A8E8", color: "white" }}>
                                Sign in
                            </Button>
                        </Form.Item>

                        <Form.Item>
                            <Button icon={<GoogleCircleFilled />} block>
                                Sign in with Google
                            </Button>
                        </Form.Item>

                        <div className='-mt-3'>
                            <Typography.Paragraph style={{ textAlign: "center" }}>
                                Don’t have an account? <Typography.Link href='/sign-up'>Sign up</Typography.Link>
                            </Typography.Paragraph>
                        </div>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
