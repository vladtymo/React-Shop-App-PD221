import React, { useContext, useEffect, useState } from 'react'
import { Button, Layout, Menu, Space } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, InfoCircleOutlined, LoginOutlined, LogoutOutlined, ProductOutlined, UnorderedListOutlined } from '@ant-design/icons';
import { accountsService } from '../services/accounts';
import MenuItem from 'antd/es/menu/MenuItem';
import { AccountsContext } from '../contexts/account.context';
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
    // {
    //     key: "/login",
    //     label: <Link to="/login"><LoginOutlined /></Link>
    // },
    // {
    //     key: "/logout",
    //     label: <span onClick={accountsService.logout}><LogoutOutlined /></span>
    // }
]

export default function Sidebar() {

    let location = useLocation();
    const [current, setCurrent] = useState(location.pathname);

    const { email, isAuth, logout } = useContext(AccountsContext);

    useEffect(() => {
        if (location) {
            if (current !== location.pathname) {
                setCurrent(location.pathname);
            }
        }
    }, [location, current]);

    const onLogout = () => {
        accountsService.logout();
        logout();
    }

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
                selectedKeys={[current]}
                items={menuItems}
                style={{
                    flex: 1,
                    minWidth: 0,
                }}
            >
            </Menu>

            {
                isAuth ?
                    <Space>
                        <span style={{ color: "white" }}>Hello, {email}</span>
                        <Link onClick={onLogout} style={{ color: "white" }}><LogoutOutlined /></Link>
                    </Space>
                    :
                    <Link to="/login" style={{ color: "white" }}>
                        <Space size="small">
                            <LoginOutlined />
                            <span>Login</span>
                        </Space>
                    </Link>
            }
        </Header>
    )
}
