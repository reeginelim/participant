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


  // 渲染tab切换
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
          {/* <Card bordered={false} style={{ marginBottom: 24 }} loading={loading}>
            {!loading && currentUser && (
              <div>
                <div className={styles.avatarHolder}>
                  <img alt="" src={currentUser.avatar} />
                  <div className={styles.name}>{currentUser.name}</div>
                  <div>{currentUser?.signature}</div>
                </div>
                {renderUserInfo(currentUser)}
                <Divider dashed />
                
                <Divider style={{ marginTop: 16 }} dashed />
                <div className={styles.team}>
                  <div className={styles.teamTitle}>团队</div>
                  <Row gutter={36}>
                    {currentUser.notice &&
                      currentUser.notice.map((item) => (
                        <Col key={item.id} lg={24} xl={12}>
                          <Link to={item.href}>
                            <Avatar size="large" src={item.logo} />
                            {item.member}
                          </Link>
                        </Col>
                      ))}
                  </Row>
                </div>
              </div>
            )}
          </Card> */}
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
