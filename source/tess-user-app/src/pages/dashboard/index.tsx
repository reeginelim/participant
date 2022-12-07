import { Space, Table, Tag } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import React from 'react';
import { Amplify, API, graphqlOperation } from 'aws-amplify';
import awsconfig from '../.././aws-exports';
Amplify.configure(awsconfig);
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import { create } from 'lodash';


console.log('prev11 todos!!!!!');
const id = "112233";
//const todos = await API.graphql(graphqlOperation(queries.getTestDataModel,{ id: '34567' }));
// const todos = await API.graphql({
//   query: queries.getHcData,
//   variables: { id: id }
// });


const schedule_obj = {
  comfort : 50,
  min_temp : 70,
  max_temp : 75,
  start_time: 1670198503,
  end_time: 1670276068,
  type: "HOME"
}

const hcSchedData = {
  id: "112233",
  device_id: "44556677",
  schedule: schedule_obj
};

//await API.graphql(graphqlOperation(mutations.createHcSchedule, {input: hcSchedData}));

//const todos = await API.graphql(graphqlOperation(queries.getTestDataModel,{ id: '34567' }));

// console.log('postdatatoda details!!!!!', todoDetails);
// console.log('postdata!!!!!', postdata);

const hcschedule = await API.graphql({
  query: queries.getHcSchedule,
  variables: { id: id }
});




console.log('todos!!!!!', hcschedule.data.getHcSchedule.id);
console.log('todos0001!!!!!', hcschedule);
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