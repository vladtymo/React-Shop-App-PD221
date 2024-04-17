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
            Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </AntdFooter>
    )
}
