import { Card } from 'antd';
import React, { useState } from 'react';
import { useRequest } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import type { tabKeyType } from './data.d';
import { queryCurrent } from './service';
import styles from './Center.less';
import BasicScheduler from './components/Basic';
import SleepScheduler from './components/Sleep';
import AwayScheduler from './components/Away';
import VacationScheduler from './components/Vacation';
import HomeScheduler from './components/Home';
import { PageContainer } from '@ant-design/pro-layout';

const sceneTabList = [
  {
    key: 'home',
    tab: <span>HOME</span>,
  },
  {
    key: 'sleep',
    tab: <span>SLEEP</span>,
  },
  {
    key: 'away',
    tab: <span>AWAY</span>,
  },
  {
    key: 'vacation',
    tab: <span>VACATION</span>,
  },
];

const Center: React.FC<RouteChildrenProps> = () => {
  const [tabKey, setTabKey] = useState<tabKeyType>('home');

  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'home') {
      return <HomeScheduler scene={tabValue} />;
    }
    if (tabValue === 'sleep') {
      return <SleepScheduler scene={tabValue} />;
    }
    if (tabValue === 'away') {
      return <AwayScheduler scene={tabValue} />;
    }
    if (tabValue === 'vacation') {
      return <VacationScheduler scene={tabValue} />;
    }
    return null;
  };

  return (
    <PageContainer>
      <Card
        className={styles.tabsCard}
        bordered={false}
        tabList={sceneTabList}
        activeTabKey={tabKey}
        onTabChange={(_tabKey: string) => {
          setTabKey(_tabKey as tabKeyType);
        }}
      >
        {renderChildrenByTabKey(tabKey)}
      </Card>
    </PageContainer>
  );
};
export default Center;
