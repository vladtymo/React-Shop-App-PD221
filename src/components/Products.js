import React, { useEffect, useState } from 'react';
import { Button, message, Popconfirm, Rate, Space, Table, Tag } from 'antd';
import { makeFirstInUpperCase } from '../utils/utils';
import { Link } from 'react-router-dom';
import { productsService } from '../services/products';

const confirm = (id) => {
    console.log("Deleting product: ", id);
    message.success(`Deleting product {${id}}...`);
};

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Image',
        dataIndex: 'imageUrl',
        key: 'imageUrl',
        render: (text) => <img style={imageStyle} height={50} src={text} alt='Product image' />,
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Category',
        dataIndex: 'categoryName',
        key: 'categoryName',
        render: (text) => <span>{makeFirstInUpperCase(text)}</span>,
    },
    {
        title: 'Price',
        dataIndex: 'price',
        key: 'price',
        render: (text) => <span>{text}$</span>,
    },
    {
        title: 'Rating',
        dataIndex: 'discount',
        key: 'discount',
        render: (text) => <span>{text}%</span>,
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Show</a>
                <Popconfirm
                    title="Delete the task"
                    description="Are you sure to delete this task?"
                    onConfirm={() => confirm(record.id)}
                    okText="Yes"
                    cancelText="No"
                    placement='left'
                >
                    <Button danger>Delete</Button>
                </Popconfirm>
            </Space>
        ),
    },
];

const apiUrl = "https://shop-api-pv221.azurewebsites.net";

export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        (async function () {
            const response = await productsService.get();

            // TODO: fix server image url response
            // set absolute path for images
            const items = response.data;
            for (const i of items) {
                if (!i.imageUrl.includes("://"))
                    i.imageUrl = apiUrl + i.imageUrl;
            }

            console.log(items);
            setProducts(items);
        })();
    }, []);

    return (
        <>
            <Button style={createBtn} type="primary">
                <Link to="create">Create New Product</Link>
            </Button>

            <Table columns={columns} dataSource={products}
                pagination={{ pageSize: 5 }}
                rowKey="id" />
        </>
    );
}

const imageStyle = {
    width: 60,
    height: 60,
    objectFit: "cover",
    borderRadius: 6
}
const createBtn = {
    marginBottom: 10
}