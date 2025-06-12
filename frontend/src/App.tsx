import Layout from 'antd/es/layout/layout';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <Layout style={{ backgroundColor: '#FFFFFF' }}>
      {/* <Sider breakpoint="lg" collapsedWidth={'0'}>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items2}
        />
      </Sider> */}
      <Sidebar />
    </Layout>
  );
}

export default App;
