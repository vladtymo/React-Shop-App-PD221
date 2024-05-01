import React, { useEffect, useState } from 'react'
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, LoginOutlined, LogoutOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { accountsService } from '../services/accounts';
const { Header } = Layout;

const menuItems = [
    {
        key: "/",
        label: <Link to="/">Home</Link>,
        icon: <HomeOutlined />
    },
    {
        key: "/products",
        label: <Link to="/products">Products</Link>,
        icon: <ProductOutlined />
    },
    {
        key: "/orders",
        label: <Link to="/orders">Orders</Link>,
        icon: <UnorderedListOutlined />
    },
    {
        key: "/about",
        label: <Link to="/about">About</Link>,
        icon: <InfoCircleOutlined />
    },
    {
        key: "/login",
        label: <Link to="/login">Login</Link>,
        icon: <LoginOutlined />
    },
    {
        key: "/logout",
        label: <span onClick={accountsService.logout}>Logout</span>,
        icon: <LogoutOutlined />
    }
]

export default function Sidebar() {

    let location = useLocation();

    const [current, setCurrent] = useState(location.pathname);

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

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
                defaultSelectedKeys={[current]}
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
