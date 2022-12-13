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
  const [done, setDone] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<BasicListItemDataType> | undefined>(undefined);

  const {
    data: listData,
    loading,
    mutate,
  } = useRequest(() => {
    return queryFakeList({
      count: 50,
    });
  });
  const { run: postRun } = useRequest(
    (method, params) => {
      if (method === 'remove') {
        return removeFakeList(params);
      }
      if (method === 'update') {
        return updateFakeList(params);
      }
      return addFakeList(params);
    },
    {
      manual: true,
      onSuccess: (result) => {
        mutate(result);
      },
    },
  );

  const list = listData?.list || [];

  const paginationProps = {
    showSizeChanger: true,
    showQuickJumper: true,
    pageSize: 5,
    total: list.length,
  };

  const showEditModal = (item: BasicListItemDataType) => {
    setVisible(true);
    setCurrent(item);
  };

  const deleteItem = (id: string) => {
    postRun('remove', { id });
  };

  const handleDone = () => {
    setDone(false);
    setVisible(false);
    setCurrent({});
  };

  const handleSubmit = (values: BasicListItemDataType) => {
    setDone(true);
    const method = values?.id ? 'update' : 'add';
    postRun(method, values);
  };

  return (
    <PageContainer>
    <Card bordered={false}>
      <Descriptions title="Solar Panel" style={{ marginBottom: 32 }}>
        <Descriptions.Item label="PV Input(kWh)"> 150</Descriptions.Item>
        <Descriptions.Item label="Inverter">  String Inverter </Descriptions.Item>
        <Descriptions.Item label="PV System (Capacity)"> 10 kW</Descriptions.Item>
        <Descriptions.Item label="PV Model">Renogy </Descriptions.Item>
        <Descriptions.Item label="Inverter Model"> Hybrid Solar Inverter UL1741</Descriptions.Item>
      </Descriptions>
      
      <Divider style={{ marginBottom: 35}} />
      
    </Card>
  </PageContainer>
  );
};

export default BasicList;
