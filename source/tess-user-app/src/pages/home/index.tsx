import { PageContainer } from '@ant-design/pro-layout';
import { Table, Typography } from 'antd';
const { Title } = Typography;
import React from 'react';

const { Column, ColumnGroup } = Table;
const deviceStatus = {
  1: 'Off',
  2: 'On',
};

interface DataType {
  key: React.Key;
  device: string;

  status: number;
  load: number;
  cost: number;
}

const data: DataType[] = [
  {
    key: '1',
    device: 'Heating & Cooling',
    status: 1,
    load: 50,
    cost: 60,
  },
  {
    key: '2',
    device: 'EV Charger',
    status: 2,
    load: 50,
    cost: 60,
  },
  {
    key: '3',
    device: 'Solar Panel',
    status: 1,
    load: 50,
    cost: 60,
  },
];

const HomeList = () => (
  <PageContainer>
    <Table dataSource={data}>
      <Column title="Device" dataIndex="device" key="device" />
      <Column
        title="Status"
        dataIndex="status"
        key="status"
        render={(status: number) => deviceStatus[status]}
      />
      <Column title="Load" dataIndex="load" key="load" />
      <Column title="Cost" dataIndex="cost" key="cost" />
    </Table>
  </PageContainer>
);

export default HomeList;
