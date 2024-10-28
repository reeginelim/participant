import { useRequest } from 'umi';
import { Card, Statistic, Row, Col } from 'antd';
import { Line } from '@ant-design/charts';
import type { DataItem } from './data.d';
import { fakeChartData } from './service';
import { PageContainer } from '@ant-design/pro-layout';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '../../../aws-exports';
Amplify.configure(awsconfig);
const PriceHistory = ({ priceHistoryLineChartData }: { priceHistoryLineChartData: DataItem[] }) => {
  const { loading, data } = useRequest(fakeChartData);
  console.log('data', data);
  return (
    <>
      <PageContainer>
        <Card>
          <Row gutter={16}>
            <Col span={6}>
              <Statistic title="Yesterday's Ave Price" value={0.5} />
            </Col>
            <Col span={6}>
              <Statistic title="Yesterday's Lowest Price" value={0.4} />
            </Col>
            <Col span={6}>
              <Statistic title="Yesterday's Highest Price" value={0.65} />
            </Col>
          </Row>
        </Card>
        <Card>
          <div style={{ padding: '0 24px' }}>
            <Line
              label={'test'}
              forceFit
              height={400}
              data={data?.priceHistoryLineChartData || []}
              responsive
              xField="date"
              yField="value"
              seriesField="type"
              interactions={[
                {
                  type: 'slider',
                  cfg: {},
                },
              ]}
              legend={{
                position: 'top-center',
              }}
            />
          </div>
        </Card>
      </PageContainer>
    </>
  );
};

export default PriceHistory;
