import React from 'react';
import { Layout, Menu } from 'antd';

const { Header, Content, Sider } = Layout;

const menuItems = [
  { key: '1', label: '설문조사 파일' },
  { key: '2', label: '설문조사 관리' },
];

const MainLayout = ({ children }) => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <div
          className="logo"
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.3)',
          }}
        ></div>

        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={menuItems}
        />
      </Sider>
      <Layout>
        <Header />
        <Content>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
