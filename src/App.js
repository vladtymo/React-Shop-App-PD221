import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
const { Content } = Layout;

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>

      <Sidebar />

      <Content
        style={{
          padding: '0 48px',
        }}
      >
        {/* <Breadcrumb
          style={{
            margin: '16px 0',
          }}
        >
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Products</Breadcrumb.Item>
          <Breadcrumb.Item>Create</Breadcrumb.Item>
        </Breadcrumb> */}
        <div
          style={{
            background: colorBgContainer,
            minHeight: 280,
            padding: 24,
            marginTop: 20,
            borderRadius: borderRadiusLG,
          }}
        >
          Content
        </div>
      </Content>

      <Footer />
    </Layout>
  );
};
export default App;