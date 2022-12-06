import moment from 'moment';
import type { Request, Response } from 'express';
import type { PriceHistoryData } from './data';

const priceHistoryLineChartData = [];
for (let i = 0; i < 20; i += 1) {
  const date = moment(new Date().getTime() + 1000 * 60 * 30 * i).format('HH:mm');
  priceHistoryLineChartData.push({
    date,
    type: 'Price',
    value: Math.floor(Math.random() * 100) + 10,
  });
}
const getFakePriceHistoryData: PriceHistoryData = {
  priceHistoryLineChartData,
};

const fakeChartData = (_: Request, res: Response) => {
  return res.json({
    data: getFakePriceHistoryData,
  });
};

export default {
  'GET  /api/fake-price-history-data': fakeChartData,
};
