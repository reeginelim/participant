import type { Request, Response } from 'express';

const basicGoods = [
  
];

function getProfileBasic(_: Request, res: Response) {}

export default {
  'GET  /api/profile/basic': getProfileBasic,
};
