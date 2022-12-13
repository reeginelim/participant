// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';
import type { ListItemDataType } from './data.d ';

const titles = [
  ''
];
const avatars = [
  '', // Alipay
 ];

const covers = [
  '',
 ];
const desc = [
  '',

];

const user = [
  ''

];

// user info
const currentUseDetail = {

};

function fakeList(count: number): ListItemDataType[] {
  const list = [];


  return list;
}

function getFakeList(req: Request, res: Response) {

}


function getCurrentUser(req: Request, res: Response) {
  return res.json({
    data: currentUseDetail,
  });
}

export default {
  'GET  /api/fake_list_Detail': getFakeList,
  'GET  /api/currentUserDetail': getCurrentUser,
};
