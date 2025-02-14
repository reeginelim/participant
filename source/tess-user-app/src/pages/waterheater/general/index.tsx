import { PageContainer } from '@ant-design/pro-layout';
import { Badge, Card, Descriptions, Divider,Slider } from 'antd';
import type { FC } from 'react';
import React from 'react';
import { useRequest } from 'umi';
import { queryBasicProfile } from './service';
import styles from './style.less';
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';
import { Switch } from 'antd';

const Basic: FC = () => {
  const { data, loading } = useRequest(() => {
    return queryBasicProfile();
  });

  const { basicGoods, basicProgress } = data || {
    basicGoods: [],
    basicProgress: [],
  };
  let goodsData: typeof basicGoods = [];

  const marks = {
    40: '40°F',
    130: {
      style: {
        color: '#f50',
      },
      label: <strong>130°F</strong>,
    },
  };

  return (
    <PageContainer>
      <Card bordered={false}>
        <Descriptions title="Water Heater" style={{ marginBottom: 32 }}>
          {/* <Descriptions.Item label="State of Charge">80% (6 hours)</Descriptions.Item> */}
          <Descriptions.Item label="Status"><Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked /> <Switch checkedChildren="MAN" unCheckedChildren="AUTO" defaultChecked /></Descriptions.Item>
          <Descriptions.Item label="Current load">100 kW</Descriptions.Item>
          <Descriptions.Item label="Current temperature">100 °F</Descriptions.Item>
        </Descriptions>
        <h3>Set desired temperature: </h3><Slider marks={marks} min= {40} max = {130} step = {5} defaultValue={30} tooltip={{ open: true }} />
        <Divider style={{ marginBottom: 35}} />
        <Descriptions title="Additional Info" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="Manufacturer">Acme Water Heating</Descriptions.Item>
          <Descriptions.Item label="Model">1819349043</Descriptions.Item>
          <Descriptions.Item label="Time until re-heating">8 hours</Descriptions.Item>
          {/* <Descriptions.Item label="System Capacity">130 kWh</Descriptions.Item> */}
          {/* <Descriptions.Item label="Input Voltage">60 W</Descriptions.Item> */}
        </Descriptions>
      </Card>
    </PageContainer>
  );
};

export default Basic;
