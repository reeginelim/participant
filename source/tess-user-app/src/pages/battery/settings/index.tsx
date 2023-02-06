import { PageContainer } from '@ant-design/pro-layout';
import { Badge, Card, Descriptions, Divider } from 'antd';
import type { FC } from 'react';
import React from 'react';
import { useRequest } from 'umi';
import { queryBasicProfile } from './service';
import styles from './style.less';
import {
  AutoComplete,
  Button,
  Cascader,
  Col,
  DatePicker,
  Input,
  InputNumber,
  Row,
  Select,
  Tooltip,
} from 'antd';

const Basic: FC = () => {
  const { data, loading } = useRequest(() => {
    return queryBasicProfile();
  });

  const { basicGoods, basicProgress } = data || {
    basicGoods: [],
    basicProgress: [],
  };
  let goodsData: typeof basicGoods = [];
  if (basicGoods.length) {
    let num = 0;
    let amount = 0;
    basicGoods.forEach((item) => {
      num += Number(item.num);
      amount += Number(item.amount);
    });
    goodsData = basicGoods.concat({
      id: 'total',
      num,
      amount,
    });
  }

  return (
    <PageContainer>
      <Card bordered={false}>
        <Descriptions title="General Settings" style={{ marginBottom: 32 }}>
          <Descriptions.Item>
            <Input.Group compact>
              <h3>Input One:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
              <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="1234"/>
              <Button type="primary">Update</Button>
            </Input.Group>
          </Descriptions.Item>
          <Descriptions.Item>
            <Input.Group compact>
              <h3>Input Two:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
              <Input style={{ width: 'calc(50% - 200px)' }} defaultValue="1234"/>
              <Button type="primary">Update</Button>
            </Input.Group>
          </Descriptions.Item>
        </Descriptions>
        <Divider style={{ marginBottom: 32 }} />
        <Descriptions title="Additional Settings" style={{ marginBottom: 32 }}>
        <Descriptions.Item>
            <Input.Group compact>
              <h3>Input Three:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
              <Input style={{ width: 'calc(100% - 200px)' }} defaultValue="1234"/>
              <Button type="primary">Update</Button>
            </Input.Group>
          </Descriptions.Item>
          <Descriptions.Item>
            <Input.Group compact>
              <h3>Input Four:&nbsp;&nbsp;&nbsp;&nbsp;</h3>
              <Input style={{ width: 'calc(50% - 200px)' }} defaultValue="1234"/>
              <Button type="primary">Update</Button>
            </Input.Group>
          </Descriptions.Item>
          {}
        </Descriptions>
      </Card>
    </PageContainer>
  );
};

export default Basic;
