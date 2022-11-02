import { PlusOutlined, HomeOutlined, ContactsOutlined, ClusterOutlined } from '@ant-design/icons';
import { Avatar, Card, Col, Divider, Input, Row, Tag } from 'antd';
import React, { useState, useRef } from 'react';
import { GridContent } from '@ant-design/pro-layout';
import { Link, useRequest } from 'umi';
import type { RouteChildrenProps } from 'react-router';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Applications from './components/Applications';
import type { CurrentUser, TagType, tabKeyType } from './data';
import { queryCurrent } from './service';
import styles from './Center.less';
import BasicScheduler from './components/Basic';
import SleepScheduler from './components/Sleep';
import AwayScheduler from './components/Away';
import VacationScheduler from './components/Vacation';

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

// const TagList: React.FC<{ tags: CurrentUser['tags'] }> = ({ tags }) => {
//   const ref = useRef<Input | null>(null);
//   const [newTags, setNewTags] = useState<TagType[]>([]);
//   const [inputVisible, setInputVisible] = useState<boolean>(false);
//   const [inputValue, setInputValue] = useState<string>('');

//   const showInput = () => {
//     setInputVisible(true);
//     if (ref.current) {
//       // eslint-disable-next-line no-unused-expressions
//       ref.current?.focus();
//     }
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setInputValue(e.target.value);
//   };

//   const handleInputConfirm = () => {
//     let tempsTags = [...newTags];
//     if (inputValue && tempsTags.filter((tag) => tag.label === inputValue).length === 0) {
//       tempsTags = [...tempsTags, { key: `new-${tempsTags.length}`, label: inputValue }];
//     }
//     setNewTags(tempsTags);
//     setInputVisible(false);
//     setInputValue('');
//   };

//   return (
//     <div className={styles.tags}>
//       <div className={styles.tagsTitle}>标签</div>
//       {(tags || []).concat(newTags).map((item) => (
//         <Tag key={item.key}>{item.label}</Tag>
//       ))}
//       {inputVisible && (
//         <Input
//           ref={ref}
//           type="text"
//           size="small"
//           style={{ width: 78 }}
//           value={inputValue}
//           onChange={handleInputChange}
//           onBlur={handleInputConfirm}
//           onPressEnter={handleInputConfirm}
//         />
//       )}
//       {!inputVisible && (
//         <Tag onClick={showInput} style={{ borderStyle: 'dashed' }}>
//           <PlusOutlined />
//         </Tag>
//       )}
//     </div>
//   );
// };

const Center: React.FC<RouteChildrenProps> = () => {
  const [tabKey, setTabKey] = useState<tabKeyType>('home');

  //  获取用户信息
  const { data: currentUser, loading } = useRequest(() => {
    return queryCurrent();
  });

  // 渲染tab切换
  const renderChildrenByTabKey = (tabValue: tabKeyType) => {
    if (tabValue === 'home') {
      return <BasicScheduler />;
    }
    if (tabValue === 'sleep') {
      return <SleepScheduler />;
    }
    if (tabValue === 'away') {
      return <AwayScheduler />;
    }
    if (tabValue === 'vacation') {
      return <VacationScheduler />;
    }
    return null;
  };

  return (
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
  );
};
export default Center;
