import type { Request, Response } from 'express';

const basicGoods = [
];

const basicProgress = [
  
];

function getProfileBasic(_: Request, res: Response) {
  return res.json({
    data: {
      basicProgress,
      basicGoods,
    },
  });
}

export default {
  'GET  /api/profile/basic': getProfileBasic,
};
