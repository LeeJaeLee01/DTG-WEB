import Layout from 'antd/es/layout/layout';
import React from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import UserList from './components/UserList';
import { useRoutes } from 'react-router-dom';
import UserInfo from './components/UserInfo';

function App() {
  const element = useRoutes([
    { path: '/', element: <UserList /> },
    { path: '/user/:id', element: <UserInfo /> },
  ]);

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
        {element}
      </Layout>
    </Layout>
  );
}

export default App;
