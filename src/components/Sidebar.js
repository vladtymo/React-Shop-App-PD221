import React, { lazy } from 'react'
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;

const items = [
    {
        key: 0,
        label: "Home"
    },
    {
        key: 1,
        label: "Products"
    },
    {
        key: 2,
        label: "Orders"
    },
    {
        key: 3,
        label: "About"
    },
];

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
                items={items}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            />
        </Header>
    )
}
