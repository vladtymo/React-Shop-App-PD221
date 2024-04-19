import React, { useEffect, useState } from 'react';
import { Rate, Space, Table, Tag } from 'antd';

function makeFirstInUpperCase(text) {
    return text[0].toUpperCase() + text.slice(1);
}

const columns = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
    },
    {
        title: 'Image',
        dataIndex: 'thumbnail',
        key: 'image',
        render: (text) => <img style={imageStyle} height={50} src={text} alt='Product image' />,
    },
    {
        title: 'Name',
        dataIndex: 'title',
        key: 'name',
        render: (text) => <a>{text}</a>,
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
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
        dataIndex: 'rating',
        key: 'rating',
        render: (text) => <Rate disabled allowHalf defaultValue={text} />
    },
    {
        title: 'Action',
        key: 'action',
        render: (_, record) => (
            <Space size="middle">
                <a>Invite {record.name}</a>
                <a>Delete</a>
            </Space>
        ),
    },
];

const api = "https://dummyjson.com/products";
export default function Products() {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        (async function () {
            const response = await fetch(api);
            const data = await response.json();
            setProducts(data.products);
        })();

        // load data from server
        // const response = fetch(api).then(res => {
        //     return res.json();
        // }).then(data => {
        //     setProducts(data.products);
        // });

    }, []);

    return (
        <Table columns={columns} dataSource={products} pagination={{ pageSize: 5 }} />
    );
}

const imageStyle = {
    width: 100,
    height: 50,
    objectFit: "cover",
    borderRadius: 6
}