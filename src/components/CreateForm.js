import React from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select, Space, Upload } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { UploadOutlined } from '@ant-design/icons';
import { productsService } from '../services/products';
const { Option } = Select;

export default function CreateForm() {

    const [form] = Form.useForm();

    const onFinish = async (values) => {
        console.log(values);

        // set correct image file
        values.image = values.image.originFileObj;

        const response = await productsService.create(values);
        console.log("Create status:", response.statusText);
    };
    const onReset = () => {
        form.resetFields();
    };
    const normFile = (e) => {
        if (Array.isArray(e)) {
            return e;
        }
        return e?.file;
    };

    return (
        <>
            <h1>Create New Product</h1>
            <Form
                form={form}
                name="control-hooks"
                onFinish={onFinish}
                style={{
                    maxWidth: 600,
                    margin: "auto"
                }}
                layout="vertical"
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                    style={{
                        flexGrow: 1
                    }}

                >
                    <Input placeholder="Enter product name" />
                </Form.Item>

                <div style={col2}>

                    <Form.Item
                        name="price"
                        label="Price"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            flexGrow: 1
                        }}
                    >
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                            prefix="$"
                            placeholder="Enter product price"
                        />
                    </Form.Item>

                    <Form.Item
                        name="discount"
                        label="Discount"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                        style={{
                            flexGrow: 1
                        }}
                    >
                        <InputNumber
                            style={{
                                width: '100%',
                            }}
                            prefix="%"
                            placeholder="Enter product discount"
                        />
                    </Form.Item>
                </div>

                <Form.Item
                    name="categoryId"
                    label="Category"
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a product category"
                        allowClear
                    >
                        <Option value="1">Electronics</Option>
                        <Option value="2">Transport</Option>
                        <Option value="3">Sport</Option>
                        <Option value="4">other</Option>
                    </Select>
                </Form.Item>

                <Form.Item
                    name="image"
                    label="Image"
                    valuePropName="file"
                    getValueFromEvent={normFile}
                >
                    <Upload>
                        <Button icon={<UploadOutlined />}>Click to Choose a File</Button>
                    </Upload>
                </Form.Item>
                <Form.Item
                    name="description"
                    label="Description"
                >
                    <TextArea rows={4}
                        placeholder="Enter product description"
                        minLength={10} maxLength={3000} showCount />
                </Form.Item>

                <Form.Item
                    name="inStock"
                    valuePropName="checked"
                    label="In Stock">
                    <Checkbox>
                        In Stock
                    </Checkbox>
                </Form.Item>
                <Form.Item style={{
                    textAlign: "center"
                }}>

                    <Space>
                        <Button type="primary" htmlType="submit">
                            Create
                        </Button>
                        <Button htmlType="button" onClick={onReset}>
                            Reset
                        </Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    );
};

const col2 = {
    display: "flex",
    gap: 10
}