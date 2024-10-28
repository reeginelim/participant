import type { Request, Response } from 'express';

const basicGoods = [
];

const basicProgress = [
];

function getProfileBasic(_: Request, res: Response) {
}

export default {
  'GET  /api/profile/basic': getProfileBasic,
};
