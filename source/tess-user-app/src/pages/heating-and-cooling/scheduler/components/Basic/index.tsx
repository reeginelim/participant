import { Card, Form, Input, Checkbox, Button, DatePicker, Space } from 'antd';
import IntegerStep from '../IntegerStep';
import { SliderMarks } from 'antd/lib/slider';
import React from 'react';
import {
  ProFormDateRangePicker,
  ProFormDateTimePicker,
  ProFormDigit,
  ProFormSlider,
} from '@ant-design/pro-form';
const { RangePicker } = DatePicker;

const BasicForm = () => {
  const [form] = Form.useForm();
  const onFinish = (values: any) => {
    console.log('Success:', values);
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

const BasicScheduler = () => {
  return (
    <Card>
      <BasicForm />
    </Card>
  );
};

export default BasicScheduler;
