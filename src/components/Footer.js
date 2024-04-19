import React from 'react'
import { Layout } from 'antd';
const { Footer: AntdFooter } = Layout;

export default function Footer() {
    return (
        <AntdFooter
            style={{
                textAlign: 'center',
            }}
        >
            React Shop App ©{new Date().getFullYear()} Created by PD221 Group
        </AntdFooter>
    )
}
