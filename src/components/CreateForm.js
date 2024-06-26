import React, { useEffect, useState } from 'react';
import { Button, Checkbox, Form, Input, InputNumber, Select, Space, Upload, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { ArrowLeftOutlined, UploadOutlined } from '@ant-design/icons';
import { productsService } from '../services/products';
import { useNavigate, useParams } from "react-router-dom";

export default function CreateForm() {

    const [categories, setCategories] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [product, setProduct] = useState({});

    const [form] = Form.useForm();
    const navigate = useNavigate();
    const params = useParams();

    const loadCategories = async () => {
        const res = await productsService.getCategories();
        const mapped = res.data.map(i => { return { value: i.id, label: i.name } });
        setCategories(mapped);
    }

    const loadProduct = async () => {
        const res = await productsService.get(params.id);
        setProduct(res.data);
        form.setFieldsValue(res.data);
    }

    useEffect(() => {
        if (params.id) {
            setEditMode(true);
            loadProduct();
        }

        loadCategories();
        // eslint-disable-next-line
    }, []);

    const onFinish = async (values) => {
        console.log(values);

        if (editMode) {

            // use original values
            values.id = product.id;
            values.imageUrl = product.imageUrl;

            const response = await productsService.edit(values);

            if (response.status === 200) {
                message.success(`Product edited successfully!`);
            }
        }
        else {
            // set correct image file
            values.image = values.image.originFileObj;

            const response = await productsService.create(values);

            if (response.status === 200) {
                message.success(`Product created successfully!`);
            }
        }

        // go back
        navigate(-1);
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
            <Button type="text" onClick={() => navigate(-1)}>
                <ArrowLeftOutlined />
            </Button>
            <h1 style={{ textAlign: "center" }}>{editMode ? "Edit" : "Create"} Product</h1>
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
                        options={categories}>
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
                    initialValue={null}>
                    <TextArea rows={4}
                        placeholder="Enter product description"
                        minLength={10} maxLength={3000} showCount />
                </Form.Item>

                <Form.Item
                    name="inStock"
                    valuePropName="checked"
                    initialValue={false}
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
                            {editMode ? "Edit" : "Create"}
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