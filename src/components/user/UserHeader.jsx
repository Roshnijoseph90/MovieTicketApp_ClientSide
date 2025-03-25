import React from 'react';
import { Layout, Menu, Button, Avatar } from 'antd';
import { Link } from 'react-router-dom';  // useNavigate is not needed anymore
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';  // Using Ant Design icons

// Destructure Header from Ant Design's Layout
const { Header: AntLayoutHeader } = Layout;

const UserHeader = () => {
  return (
    <AntLayoutHeader style={{ background: '#001529' }}>
      <div className="logo">
        <Link to="/">
          <h2 style={{ color: 'white' }}>MovieTicketApp</h2>
        </Link>
      </div>
      <Menu theme="dark" mode="horizontal" style={{ float: 'right' }} defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/movies">Movies</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/search">Search</Link>
        </Menu.Item>

        {/* Profile icon and logout button */}
        <Menu.Item key="4" style={{ float: 'right' }}>
          <Link to="/profile">
            {/* Displaying profile icon */}
            <Avatar
              src={<UserOutlined />}  // Use Ant Design User icon
              style={{ backgroundColor: '#87d068' }}
            />
          </Link>
        </Menu.Item>
        <Menu.Item key="5" style={{ float: 'right' }}>
          <Button type="link">
            <LogoutOutlined />
            Logout
          </Button>
        </Menu.Item>
      </Menu>
    </AntLayoutHeader>
  );
};

export default UserHeader;
