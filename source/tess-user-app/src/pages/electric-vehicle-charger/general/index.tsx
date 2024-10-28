import type { FC } from 'react';
import React, { useState } from 'react';
import { DownOutlined, PlusOutlined } from '@ant-design/icons';
import {
  Avatar,
  Button,
  Card,
  Col,
  Descriptions,
  Divider,
  Dropdown,
  Input,
  List,
  Menu,
  Modal,
  Progress,
  Radio,
  Row,
  Slider,
  Switch,
} from 'antd';

import { PageContainer } from '@ant-design/pro-layout';
import { useRequest } from 'umi';
import moment from 'moment';
import OperationModal from './components/OperationModal';
import { addFakeList, queryFakeList, removeFakeList, updateFakeList } from './service';
import type { BasicListItemDataType } from './data';
import styles from './style.less';

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;
const { Search } = Input;

const Info: FC<{
  title: React.ReactNode;
  value: React.ReactNode;
  bordered?: boolean;
}> = ({ title, value, bordered }) => (
  <div className={styles.headerInfo}>
    <span>{title}</span>
    <p>{value}</p>
    {bordered && <em />}
  </div>
);

export const BasicList: FC = () => {
  return (
    <PageContainer>
    <Card bordered={false}>
      <Descriptions title="Electric Vehicle & Charger" style={{ marginBottom: 32 }}>
        <Descriptions.Item label="State of Charge"><Switch checkedChildren="On" unCheckedChildren="Off"  /> <Descriptions.Item label="State of Charge"><Switch checkedChildren="Auto" unCheckedChildren="Off" defaultChecked /></Descriptions.Item> (8 hours)</Descriptions.Item>
        <Descriptions.Item label="Charging">
            <Switch checkedChildren="On" unCheckedChildren="Off"  />{' '}
            <Switch checkedChildren="MAN" unCheckedChildren="AUTO" defaultChecked />
          </Descriptions.Item>
        <Descriptions.Item label="Current Cost"> 100/hr </Descriptions.Item>
        <Descriptions.Item label="Current limit for AC charging"> 18kwh(80%)</Descriptions.Item>
      </Descriptions>
      
      <Divider style={{ marginBottom: 35}} />
      <Descriptions title="Additional Info" style={{ marginBottom: 32 }}>
        <Descriptions.Item label="Charger"> Tesla PowerWall </Descriptions.Item>
        <Descriptions.Item label="Model">1819349044</Descriptions.Item>
        <Descriptions.Item label="Manufacturer">Tesla</Descriptions.Item>
  
        <Descriptions.Item label="Input Voltage"> 35V</Descriptions.Item>
        <Descriptions.Item label="State of Health"> Good</Descriptions.Item>
      </Descriptions>
    </Card>
  </PageContainer>
  );
};

export default BasicList;
