import React from 'react';
import { Layout, Row, Col, Typography, Space } from 'antd';

const { Text } = Typography;

const Footer = () => {
  return (
    <Layout.Footer style={{ background: '#001529', color: 'white', padding: '20px 50px' }}>
      <Row justify="space-between" gutter={16}>
        <Col xs={24} sm={8}>
          <Space direction="horizontal" size={16}>
            <a href="/" style={{ color: 'white' }}>Home</a>
            <a href="/movies" style={{ color: 'white' }}>Movies</a>
          </Space>
        </Col>

        <Col xs={24} sm={8} style={{ textAlign: 'center' }}>
          <Text type="secondary" style={{ color: 'white' }}>
            MovieTicketApp ©{new Date().getFullYear()} | All Rights Reserved
          </Text>
        </Col>
      </Row>
    </Layout.Footer>
  );
};

export default Footer;
