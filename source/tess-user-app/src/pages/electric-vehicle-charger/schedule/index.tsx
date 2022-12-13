import { PlusOutlined, HomeOutlined, ContactsOutlined, ClusterOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Input, Row, Tag } from 'antd';
import React, { useState, useRef } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Link, useRequest } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import Applications from './components/Home';
import type { CurrentUser, TagType, tabKeyType } from './data.d ';
import { queryCurrent } from './service';
import styles from './Center.less';
import Home from './components/Home';
import Sleep from './components/Sleep';

import Vacation from './components/Vacation';
import Away from './components/Away';


const operationTabList = [
  {
    key: 'home',
    tab: (
      <span>
        HOME 
      </span>
    ),
  },
  {
    key: 'sleep',
    tab: (
      <span>
        SLEEP 
      </span>
    ),
  },
  {
    key: 'away',
    tab: (
      <span>
        AWAY 
      </span>
    ),
  },
  {
    key: 'vacation',
    tab: (
      <span>
        VACATION 
      </span>
    ),
  },
];



const Center: React.FC<RouteChildrenProps> = () => {
  const [tabKey, setTabKey] = useState<tabKeyType>('home');

  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'home') {
      return <Home />;
    }
    if (tabValue === 'sleep') {
      return <Sleep />;
    }
    if (tabValue === 'away') {
      return <Away />;
    }
    if (tabValue === 'vacation') {
      return <Vacation />;
    }
    return null;
  };

  return (
    <GridContent>
      <Row gutter={24}>
        <Col lg={0} md={24}>
          
        </Col>
        <Col lg={17} md={24}>
          <Card
            className={styles.tabsCard}
            bordered={false}
            tabList={operationTabList}
            activeTabKey={tabKey}
            onTabChange={(_tabKey: string) => {
              setTabKey(_tabKey as tabKeyType);
            }}
          >
            {renderChildrenByTabKey(tabKey)}
          </Card>
        </Col>
      </Row>
    </GridContent>
  );
};
export default Center;
