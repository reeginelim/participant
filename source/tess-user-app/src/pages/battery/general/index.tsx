import { PageContainer } from '@ant-design/pro-layout';
import { Badge, Card, Descriptions, Divider, Slider, Space } from 'antd';
import type { FC } from 'react';
import React from 'react';
import { useRequest } from 'umi';
import { queryBasicProfile } from './service';
import styles from './style.less';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

const Basic: FC = () => {
  const marks = {
    0: '0%',
    100: {
      style: {
        color: '#f50',
      },
      label: <strong>100%</strong>,
    },
  };

  return (
    <PageContainer>
      <Card bordered={false}>
        <Descriptions title="Battery Storage" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="State of Charge">80% (6 hours)</Descriptions.Item>
          <Descriptions.Item label="Charging">
            <Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked />{' '}
            <Switch checkedChildren="MAN" unCheckedChildren="AUTO" defaultChecked />
          </Descriptions.Item>
          <Descriptions.Item label="Current Cost">100/hr</Descriptions.Item>
          <Descriptions.Item label="Desired State of Charge">100% (8 hours)</Descriptions.Item>
        </Descriptions>
        <h3>Flexibility: </h3>
        <Slider marks={marks} defaultValue={30} step = {5} tooltip={{ open: true }} />
        <Divider style={{ marginBottom: 35 }} />
        <Descriptions title="Additional Info" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="Charger">Tesla PowerWall</Descriptions.Item>
          <Descriptions.Item label="Model">1819349043</Descriptions.Item>
          <Descriptions.Item label="Battery Capacity">8 hours</Descriptions.Item>
          {/* <Descriptions.Item label="System Capacity">130 kWh</Descriptions.Item> */}
          {/* <Descriptions.Item label="Input Voltage">60 W</Descriptions.Item> */}
          <Descriptions.Item label="Battery Health">Good</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};

export default Basic;
