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
  if (basicGoods.length) {
    let num = 0;
    let amount = 0;
    basicGoods.forEach((item) => {
      num += Number(item.num);
      amount += Number(item.amount);
    });
    goodsData = basicGoods.concat({
      id: '总计',
      num,
      amount,
    });
  }

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
          <Descriptions.Item label="State of Charge"><Switch checkedChildren="On" unCheckedChildren="Off" defaultChecked /></Descriptions.Item>
          <Descriptions.Item label="Charging">已取货</Descriptions.Item>
          <Descriptions.Item label="Current Cost">已取货</Descriptions.Item>
        </Descriptions>
        <h3>Current limit: </h3><Slider marks={marks} defaultValue={30} tooltip={{ open: true }} />
        <Divider style={{ marginBottom: 35}} />
        <Descriptions title="Additional Info" style={{ marginBottom: 32 }}>
          <Descriptions.Item label="Charger">付小小</Descriptions.Item>
          <Descriptions.Item label="Model">18100000000</Descriptions.Item>
          <Descriptions.Item label="System Capacity">菜鸟仓储</Descriptions.Item>
          <Descriptions.Item label="Input Voltage">浙江省杭州市西湖区万塘路18号</Descriptions.Item>
          <Descriptions.Item label="State of Health">无</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};

export default Basic;
