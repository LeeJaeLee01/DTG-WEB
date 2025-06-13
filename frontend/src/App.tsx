import Layout from 'antd/es/layout/layout';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';

function App() {
  return (
    <Layout style={{ backgroundColor: '#FFFFFF' }}>
      <Sidebar />
      <Layout
        style={{
          backgroundColor: '#FFFFFF',
          width: '100%',
          padding: '16px 24px',
        }}
      >
        <Header />
      </Layout>
    </Layout>
  );
}

export default App;
