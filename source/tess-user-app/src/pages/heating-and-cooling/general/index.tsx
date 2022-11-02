import React, { useState } from 'react';
import { useRequest } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import { Descriptions, RadioChangeEvent, Radio, Card, Badge, InputNumber, Checkbox } from 'antd';

const onChange = (e: RadioChangeEvent) => {
  console.log(`radio checked:${e.target.value}`);
};

const General = () => {
  return (
    <Card>
      <Descriptions title="Basic Info" bordered>
        <Descriptions.Item label="Status">
          <Radio.Group onChange={onChange} defaultValue="a">
            <Radio.Button value="a">Heating</Radio.Button>
            <Radio.Button value="b">Cooling</Radio.Button>
            <Radio.Button value="c">Off</Radio.Button>
          </Radio.Group>
        </Descriptions.Item>
        <Descriptions.Item label="Current Mode">
          <span>Home </span>
          <br></br>
          <Checkbox>Set Default</Checkbox>
        </Descriptions.Item>
        <Descriptions.Item label="Indoor Temperature">
          <InputNumber defaultValue={50} />
        </Descriptions.Item>
      </Descriptions>
      <br></br>
      <Descriptions title="Weather Info" bordered>
        <Descriptions.Item label="Current Indoor Temprature(F)"> 68</Descriptions.Item>
        <Descriptions.Item label="Current Outdoor Temprature(F)"> 68</Descriptions.Item>
        <Descriptions.Item label="Current Indoor Humidity(%)"> 42</Descriptions.Item>
        <Descriptions.Item label="Current Outdoor Humidity(%)"> 74</Descriptions.Item>
        <Descriptions.Item label="Wind(MPH)"> 7</Descriptions.Item>
      </Descriptions>
    </Card>
  );
};

export default General;
