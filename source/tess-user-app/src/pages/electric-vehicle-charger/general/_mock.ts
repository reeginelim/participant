// eslint-disable-next-line import/no-extraneous-dependencies
import type { Request, Response } from 'express';
import type { BasicListItemDataType } from './data.d';

const titles = [
  'Alipay',
  'Angular',
  'Ant Design',
  'Ant Design Pro',
  'Bootstrap',
  'React',
  'Vue',
  'Webpack',
];
const avatars = [
  'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png', // Alipay
  ];

const covers = [
  'https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png',
 ];
const desc = [
  ''
];

const user = [
  ''
];

function fakeList(count: number): BasicListItemDataType[] {
  const list = [];


  return list;
}

let sourceData: BasicListItemDataType[] = [];

function getFakeList(req: Request, res: Response) {

}

function postFakeList(req: Request, res: Response) {
  
}

export default {
  'GET  /api/get_list': getFakeList,
  'POST  /api/post_fake_list': postFakeList,
};
