// @ts-ignore
/* eslint-disable */
import { CurrentUser } from '@/pages/account/center/data';
import { Auth } from 'aws-amplify';
import { request } from 'umi';

/**  GET /api/currentUser */
export async function currentUser(options?: { [key: string]: any }) {
  return Auth.currentUserInfo();
}

/**  POST /api/login/outLogin */
export async function outLogin(options?: { [key: string]: any }) {
  try {
    await Auth.signOut();
  } catch (error) {
    console.log('error signing out: ', error);
  }
}

/**  POST /api/login/account */
export async function login(body: API.LoginParams, options?: { [key: string]: any }) {
  try {
    const user = await Auth.signIn(body.username, body.password);
    return user;
  } catch (error) {
    console.log('error signing in', error);
  }
  return undefined;
}

export async function getNotices(options?: { [key: string]: any }) {
  return request<API.NoticeIconList>('/api/notices', {
    method: 'GET',
    ...(options || {}),
  });
}

/**  GET /api/rule */
export async function rule(
  params: {
    // query
    current?: number;

    pageSize?: number;
  },
  options?: { [key: string]: any },
) {
  return request<API.RuleList>('/api/rule', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** PUT /api/rule */
export async function updateRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** POST /api/rule */
export async function addRule(options?: { [key: string]: any }) {
  return request<API.RuleListItem>('/api/rule', {
    method: 'POST',
    ...(options || {}),
  });
}

/** DELETE /api/rule */
export async function removeRule(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/rule', {
    method: 'DELETE',
    ...(options || {}),
  });
}
