import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React, { useEffect, useState } from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../.././aws-exports';
Amplify.configure(awsconfig);
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { create } from 'lodash';
import { query } from 'express';

const id = '112233';
interface DataType {
  key: string;
  name: string;
  status: string;
  load: number;
  cost: string;
}

const columns: ColumnsType<DataType> = [
  {
    title: 'Device Type',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
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

const App: React.FC = () => {
  const [data, setData] = useState(); // data should be an array
  const [loading, setLoading] = useState(false);
  const convert = (input) => {
    //Convert fetched data format to table
    return [
      {
        // TODO: change mock data
        key: '1',
        name: input.data.getHcSchedule.id,
        status: 'On',
        load: input.data.getHcSchedule.schedule.comfort,
        cost: '100/hr',
      },
    ];
  };
  const fetchData = () => {
    // Fetch data from database
    setLoading(true);
    const hcSchedulePromise = API.graphql({
      query: queries.getHcSchedule,
      variables: { id: id },
    });
    hcSchedulePromise.then((res) => {
      const converted = convert(res);
      console.log(converted);
      setData(converted);
      setLoading(false);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <Table rowKey={(record) => record.name} loading={loading} columns={columns} dataSource={data} />
  );
};

export default App;
