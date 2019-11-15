import React from 'react';
import './App.css';
import {Col, Layout, Row} from "antd";

function App() {
  return (
      <div>
          <Row>
              <Col span={12}>col-12</Col>
              <Col span={12}>col-12</Col>
          </Row>
          <Row>
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
              <Col span={8}>col-8</Col>
          </Row>
          <Row>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
              <Col span={6}>col-6</Col>
          </Row>
      </div>
  );
}

export default App;
