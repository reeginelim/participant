import { DataItem } from '@antv/g2plot/esm/interface/config';

export { DataItem };

export interface PriceHistoryLineChartData {
  date: number;
  type: number;
  value: number;
}

export interface PriceHistoryData {
  priceHistoryLineChartData: PriceHistoryLineChartData[];
}
