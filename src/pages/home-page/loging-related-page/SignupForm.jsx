import React from "react";
import { Form, Input, Button, Select, Typography, Row, Col } from "antd";
import { UserOutlined, EnvironmentOutlined, LockOutlined, PhoneOutlined } from "@ant-design/icons";

const { Title, Paragraph, Link } = Typography;

const SignupForm = () => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        console.log("Submitted Data:", values);
        form.resetFields(); // ফর্ম রিসেট করবে
    };

    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", background: "#F8F9FC", padding: "20px" }}>
            <div style={{ width: "100%", maxWidth: 800, padding: "30px", background: "white", borderRadius: "10px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)" }}>
                <Title level={2} style={{ textAlign: "center" }}>Create An Account</Title>
                <Paragraph style={{ textAlign: "center", color: "#667085" }}>
                    Welcome back! Please enter your details.
                </Paragraph>

                <Form form={form} layout="vertical" onFinish={onFinish}>
                    {/* Name & Gender */}
                    <Row gutter={[20, 20]}>
                        <Col xs={24} sm={12}>
                            <Form.Item label="Enter your name" name="name" rules={[{ required: true, message: "Please enter your name" }]}>
                                <Input allowClear placeholder="Enter your name" suffix={<UserOutlined />} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item label="Gender" name="gender" rules={[{ required: true, message: "Select your gender" }]}>
                                <Select placeholder="Select your gender">
                                    <Select.Option value="male">Male</Select.Option>
                                    <Select.Option value="female">Female</Select.Option>
                                    <Select.Option value="other">Other</Select.Option>
                                </Select>
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Phone & City */}
                    <Row gutter={[20, 20]}>
                        <Col xs={24} sm={12}>
                            <Form.Item label="Phone number" name="phone" rules={[
                                { required: true, message: "Please enter your phone number" },
                                { pattern: /^[0-9]{10,15}$/, message: "Enter a valid phone number" }
                            ]}>
                                <Input placeholder="Enter your phone number" allowClear suffix={<PhoneOutlined />} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item label="City" name="city" rules={[{ required: true, message: "Please enter your city name" }]}>
                                <Input allowClear placeholder="Write your city name" suffix={<EnvironmentOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Location */}
                    <Row gutter={[20, 20]}>
                        <Col xs={24}>
                            <Form.Item label="Location" name="location" rules={[{ required: true, message: "Please enter your location" }]}>
                                <Input placeholder="Write your location" suffix={<EnvironmentOutlined />} allowClear />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Password & Confirm Password */}
                    <Row gutter={[20, 20]}>
                        <Col xs={24} sm={12}>
                            <Form.Item label="Password" name="password" rules={[{ required: true, message: "Please enter your password" }]}>
                                <Input.Password placeholder="Enter your password" suffix={<LockOutlined />} />
                            </Form.Item>
                        </Col>

                        <Col xs={24} sm={12}>
                            <Form.Item label="Confirm password" name="confirmPassword" dependencies={['password']}
                                rules={[
                                    { required: true, message: "Please confirm your password" },
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('password') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('Passwords do not match!'));
                                        },
                                    }),
                                ]}
                            >
                                <Input.Password placeholder="Confirm your password" suffix={<LockOutlined />} />
                            </Form.Item>
                        </Col>
                    </Row>

                    {/* Submit Button */}
                    <Form.Item>
                        <Button type="primary" htmlType="submit" block style={{ backgroundColor: "#4C8BF5" }}>
                            Create account
                        </Button>
                    </Form.Item>
                </Form>

                {/* Sign-in Link */}
                <Paragraph style={{ textAlign: "center" }}>
                    Already have an account? <Link href="/sign-in">Sign in</Link>
                </Paragraph>
            </div>
        </div>
    );
};

export default SignupForm;
