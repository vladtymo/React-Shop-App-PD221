import React, { lazy } from 'react'
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';
const { Header } = Layout;

const menuItems = [
    {
        key: 0,
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined />
    },
    {
        key: 1,
        label: <Link to="/products">Products</Link>,
        icon: <ProductOutlined />
    },
    {
        key: 2,
        label: <Link to="/orders">Orders</Link>,
        icon: <UnorderedListOutlined />
    },
]

export default function Sidebar() {
    return (
        <Header
            style={{
                display: 'flex',
                alignItems: 'center',
            }}
        >
            <div className="demo-logo" />
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={['1']}
                items={menuItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            >
            </Menu>
        </Header>
    )
}
