import { request } from 'umi';
import type { PriceHistoryData } from './data';

export async function fakeChartData(): Promise<{ data: PriceHistoryData }> {
  return request('/api/fake-price-history-data');
}
