import { Card, Form, Button, DatePicker, Space } from 'antd';
import { ProFormDateRangePicker, ProFormDigit, ProFormSlider } from '@ant-design/pro-form';
import { API, graphqlOperation } from 'aws-amplify';
import * as mutations from '../../../../../graphql/mutations';

type scheduleData = {
  comfort: number;
  min_temp: number;
  max_temp: number;
  start_time: number;
  end_time: number;
  type: string;
};
type postData = {
  id: string;
  device_id: string;
  schedule: scheduleData;
};

// const schedule_obj = {
//   comfort: 550,
//   min_temp: 760,
//   max_temp: 78,
//   start_time: 16701985035,
//   end_time: 16702760688,
//   type: 'SLEEP',
// };

// const hcSchedData = {
//   id: '0099009997',
//   device_id: '8899',
//   schedule: schedule_obj,
// };

const BasicForm = (props) => {
  const [form] = Form.useForm();
  const onFinish = async (values: any) => {
    const schedData: scheduleData = {
      comfort: values.preference,
      min_temp: values.min_temp,
      max_temp: values.max_temp,
      start_time: values.time[0].unix(),
      end_time: values.time[1].unix(),
      type: props.scene.toUpperCase(),
    };
    const data: postData = {
      id: '0019009988', // transaction id, should be different for each post data.
      device_id: '6677',
      schedule: schedData,
    };
    // console.log('postdata!!!!', data);
    const postPromise = API.graphql(graphqlOperation(mutations.createHcSchedule, { input: data }));
    postPromise
      .then((res) => console.log('result', res))
      .catch((err) => console.error('error', err));
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  const onReset = () => {
    form.resetFields();
  };
  const marks = {
    0: 'Savings',
    10: 'Comfort',
  };
  return (
    <Form
      name="basic"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 14 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item label="Preference" name="preference">
        <ProFormSlider min={0} max={10} marks={marks} />
      </Form.Item>
      <Form.Item label="Min Temp" name="min_temp">
        <ProFormDigit />
      </Form.Item>
      <Form.Item label="Max Temp" name="max_temp">
        <ProFormDigit />
      </Form.Item>
      <Form.Item label="Time Range" name="time">
        <ProFormDateRangePicker />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
          <Button htmlType="button" onClick={onReset}>
            Reset
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};

const BasicScheduler = (props) => {
  return (
    <Card>
      <BasicForm scene={props.scene} />
    </Card>
  );
};

export default BasicScheduler;
