import React, { lazy } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined, PlayCircleOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';
import Icon from '@ant-design/icons/lib/components/Icon';
const { Header, Content, Footer } = Layout;

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
                defaultSelectedKeys={['2']}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            >
                <Menu.Item key="1">
                    <HomeOutlined />
                    <span>Home</span>
                    <Link to="/" />
                </Menu.Item>
                <Menu.Item key="2">
                    <ProductOutlined />
                    <span>Products</span>
                    <Link to="products" />
                </Menu.Item>
                <Menu.Item key="3">
                    <UnorderedListOutlined />
                    <span>Orders</span>
                    <Link to="orders" />
                </Menu.Item>
            </Menu>
        </Header>
    )
}
