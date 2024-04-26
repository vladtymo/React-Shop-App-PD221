import React from 'react'
import { Layout as AntdLayout, theme } from 'antd';
import Sidebar from './Sidebar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const { Content } = AntdLayout;

export default function Layout() {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <AntdLayout className='Layout'>

            <Sidebar />

            <Content className='main'
                style={{
                    padding: '0 48px',
                }}
            >
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        marginTop: 20,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Outlet />
                </div>
            </Content>

            <Footer />
        </AntdLayout>
    )
}
