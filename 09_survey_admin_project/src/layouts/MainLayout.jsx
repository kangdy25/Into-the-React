import React, { useMemo } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const menuItems = [
  { key: 'list', label: <Link to="/list">설문조사 관리</Link> },
];

const MainLayout = ({ selectedKeys, children, padding = 30 }) => {
  const connectStyle = useMemo(() => {
    return { padding };
  }, [padding]);

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
          selectedKeys={selectedKeys}
          items={menuItems}
        ></Menu>
      </Sider>
      <Layout>
        <Header />
        <Content style={connectStyle}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
