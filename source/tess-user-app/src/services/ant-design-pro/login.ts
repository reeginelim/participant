// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** POST /api/login/captcha */
export async function getFakeCaptcha(
  params: {
    // query

    phone?: string;
  },
  options?: { [key: string]: any },
) {
  return request<API.FakeCaptcha>('/api/login/captcha', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}
