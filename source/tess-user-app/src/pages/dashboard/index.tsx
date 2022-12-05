import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';

interface DataType {
  key: string;
  name: string;
  status: string; 
  load: number
  cost: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Device Type',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'age',
  },
  {
    title: 'Load',
    dataIndex: 'load',
    key: 'address',
  },
  {
    title: 'Cost',
    dataIndex: 'cost',
    key: 'address',
  },
];

const data: DataType[] = [
  {
    key: '1',
    name: 'Heating & Cooling',
    status: 'On',
    load: 100, 
    cost: '80/hr'

  },
  {
    key: '2',
    name: 'Water Heater',
    status: 'On',
    load: 100, 
    cost: '80/hr'
  },
  {
    key: '3',
    name: 'Solar Panels',
    status: 'On',
    load: 100, 
    cost: '80/hr'
  },
  {
    key: '4',
    name: 'Electric Vehicle',
    status: 'On',
    load: 100, 
    cost: '80/hr'
  },
  {
    key: '5',
    name: 'Electric Vehicle Charger',
    status: 'On',
    load: 100, 
    cost: '80/hr'
  },
  {
    key: '6',
    name: 'Battery Storage',
    status: 'On',
    load: 100, 
    cost: '80/hr'
  },
];

const App: React.FC = () => <Table columns={columns} dataSource={data} />;

export default App;