import React, { useState } from 'react';
import { useRequest } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import {
  Descriptions,
  RadioChangeEvent,
  Radio,
  Card,
  Badge,
  InputNumber,
  Checkbox,
  Switch,
  Space,
} from 'antd';
import { PageContainer } from '@ant-design/pro-layout';
const onChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};

const General = () => {
  const [disabled, setDisabled] = useState(true);
  const toggleDisabled = () => {
    setDisabled(!disabled);
  };

  return (
    <PageContainer>
      <Card>
        <Descriptions title="Device Info">
          <Descriptions.Item label="Status">
            <Space>
              <Radio.Group onChange={onChange} defaultValue="a">
                <Radio.Button disabled={disabled} value="a">
                  Heating
                </Radio.Button>
                <Radio.Button disabled={disabled} value="b">
                  Cooling
                </Radio.Button>
                <Radio.Button disabled={disabled} value="c">
                  Off
                </Radio.Button>
              </Radio.Group>
              <Switch
                checkedChildren={'Auto  '}
                unCheckedChildren={'Manual'}
                defaultChecked
                onChange={toggleDisabled}
              />
            </Space>
          </Descriptions.Item>
          <Descriptions.Item label="Current Mode">
            <Space>
              <span>Home </span>

              <Checkbox>Set Default</Checkbox>
            </Space>
          </Descriptions.Item>
        </Descriptions>
        <br></br>
        <Descriptions title="Indoor Environment Info">
          <Descriptions.Item label="Desired Indoor Temperature(F)">
            <InputNumber defaultValue={50} />
          </Descriptions.Item>
          <Descriptions.Item label="Current Indoor Temprature(F)"> 68</Descriptions.Item>

          <Descriptions.Item label="Current Indoor Humidity(%)"> 42</Descriptions.Item>
        </Descriptions>
        <Descriptions title="Outdoor Environment Info">
          <Descriptions.Item label="Current Outdoor Temprature(F)"> 68</Descriptions.Item>
          <Descriptions.Item label="Current Outdoor Humidity(%)"> 74</Descriptions.Item>
          <Descriptions.Item label="Wind(MPH)"> 7</Descriptions.Item>
        </Descriptions>
      </Card>
    </PageContainer>
  );
};

export default General;
