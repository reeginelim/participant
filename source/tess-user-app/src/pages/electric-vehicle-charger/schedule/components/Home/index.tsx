import { TimePicker, Slider, Card, Form, Input, Checkbox, Button, DatePicker, Space  } from 'antd';
import ProForm, {
  ProFormDateRangePicker,
  ProFormDependency,
  ProFormDigit,
  ProFormRadio,
  ProFormSelect,
  ProFormText,
  ProFormSlider,
  ProFormDatePicker,
  ProFormTextArea,
  ProFormDateTimePicker,
  ProFormDateTimeRangePicker,
  ProFormTimePicker,
} from '@ant-design/pro-form';
import { PageContainer } from '@ant-design/pro-layout';
import type { Moment } from 'moment';
import moment from 'moment';
import { Progress } from 'antd';
import type { DatePickerProps } from 'antd';

import React from 'react';
import { SliderMarks } from 'antd/lib/slider';


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
    0: 'Comfort (0%)',
    100: 'Savings(100%)',
  };
  return (
    <PageContainer content="Home Scheduler">
    <Card bordered={false}>
      <ProForm
        hideRequiredMark
        
        name="basic"
        layout="vertical"
        initialValues={{ public: '1' }}
        
      >
       
        {/* <p style={{textAlign: 'left'}}>
          Shortest time to Charge
        </p> */}
        {/* <Progress
          strokeColor={{
            '0%': '#108ee9',
            '100%': '#87d068',
          }}
          percent={70.9}
        //format={percent => `${percent} saving`}
        /> */}
        {/* <p style={{textAlign: 'right'}}>
          Savings
        </p> */}
        <ProFormSlider min={0} max={100} width="xs" marks={marks} />
        <ProFormDigit
          label={
            <span>
              State of Charge
              
            </span>
          }
          name="weight"
          placeholder="10% Charging"
          min={0}
          max={100}
          width="xs"
          fieldProps={{
            formatter: (value) => `${value || 0} %`,
            parser: (value) => (value ? value.replace('%', '') : '0'),
          }}
        />
        <ProFormTimePicker
          name="dateTime"
          label="Desired Time to Leave"
          width="md"
        />
        

        <ProFormText
          width="md"
          label="Time to Finish Charge"
          name="title"
          disabled={true}
          rules={[
            {
              required: false,
              message: '6 AM',
            },
          ]}
          placeholder="6 AM"
        />

        <ProFormText
          width="md"
          label="Battery Health"
          name="title"
          disabled={true}
          rules={[
            {
              required: false,
              message: '98%',
            },
          ]}
          placeholder="98%"
        />

        <ProFormDatePicker
          name="dateTime"
          label="Scheduler"
          width="md"
        />


      


    

      </ProForm>
    </Card>
  </PageContainer>
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

