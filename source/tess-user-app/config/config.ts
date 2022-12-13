// https://umijs.org/config/
import { defineConfig } from 'umi';
import { join } from 'path';
import defaultSettings from './defaultSettings';
import proxy from './proxy';
import component from '@/locales/en-US/component';

const { REACT_APP_ENV } = process.env;

export default defineConfig({
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  layout: {
    // https://umijs.org/zh-CN/plugins/plugin-layout
    locale: true,
    siderWidth: 208,
    ...defaultSettings,
  },
  // https://umijs.org/zh-CN/plugins/plugin-locale
  locale: {
    // default zh-CN
    default: 'en-US',
    antd: true,
    // default true, when it is true, will use `navigator.language` overwrite default
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@ant-design/pro-layout/es/PageLoading',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    { path: '/', redirect: '/dashboard' },
    {
      path: '/user',
      layout: false,
      routes: [
        {
          path: '/user/login',
          layout: false,
          name: 'login',
          component: './user/Login',
        },
        {
          path: '/user',
          redirect: '/user/login',
        },
      ],
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: 'dashboard',
      component: './dashboard',
    },
    {
      path: '/battery',
      name: 'Battery',
      icon: 'dashboard',
      routes: [
        {
          path: '/battery',
          redirect: '/battery/general',
        },
        {
          name: 'General Info',
          icon: 'smile',
          path: '/battery/general',
          component: './battery/general',
        },
        {
          name: 'Cost',
          icon: 'smile',
          path: '/battery/cost',
          component: './battery/cost',
        },
      ],
    },
    {
      name: 'EV & Charger',
      path: '/electric-vehicle-charger',
      icon: 'dashboard',
      routes: [
        {
          path: '/electric-vehicle-charger',
          redirect: '/electric-vehicle-charger/schedule',
        },
        {
          name: 'General Info',
          icon: 'smile',
          path: '/electric-vehicle-charger/general',
          component: './electric-vehicle-charger/general',
        },
        {
          name: 'Schedule',
          icon: 'smile',
          path: '/electric-vehicle-charger/schedule',
          component: './electric-vehicle-charger/schedule',
        },
        {
          name: 'Cost',
          icon: 'smile',
          path: '/electric-vehicle-charger/cost',
          component: './electric-vehicle-charger/cost',
        },
      ],
    },
    {
      name: 'Heating & Cooling',
      path: '/heating-and-cooling',
      icon: 'dashboard',
      routes: [
        {
          path: '/heating-and-cooling',
          redirect: '/heating-and-cooling/general',
        },
        {
          name: 'General Info',
          path: '/heating-and-cooling/general',
          component: './heating-and-cooling/general',
        },
        {
          name: 'Schedule',
          icon: 'smile',
          path: '/heating-and-cooling/schedule',
          component: './heating-and-cooling/schedule',
        },
        {
          name: 'Cost',
          path: '/heating-and-cooling/cost',
          component: './heating-and-cooling/cost',
        },
      ],
    },
    {
      path: '/solar-panels',
      name: 'Solar Panels',
      icon: 'dashboard',
      routes: [
        {
          path: '/solar-panels',
          redirect: '/solar-panels/general',
        },
        {
          name: 'General Info',
          icon: 'smile',
          path: '/solar-panels/general',
          component: './solar-panels/general',
        },
        {
          name: 'Cost',
          icon: 'smile',
          path: '/solar-panels/cost',
          component: './solar-panels/cost',
        },
      ],
    },
    {
      path: '/water-heater',
      name: 'Water Heater',
      icon: 'dashboard',
      routes: [
        {
          path: '/water-heater',
          redirect: '/waterheater/general',
        },
        {
          name: 'General Info',
          icon: 'smile',
          path: '/water-heater/general',
          component: './waterheater/general',
        },
        {
          name: 'Cost',
          icon: 'smile',
          path: '/water-heater/cost',
          component: './waterheater/cost',
        },
      ],
    },

    // New page routes need to be placed before 404,
    // or the page will always display 404

    {
      component: '404',
    },
  ],
  access: {},
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // https://ant.design/docs/react/customize-theme-variable-cn
    'root-entry-name': 'variable',
  },
  // esbuild is father build tools
  // https://umijs.org/plugins/plugin-esbuild
  esbuild: {},
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },

  fastRefresh: {},
  openAPI: [
    {
      requestLibPath: "import { request } from 'umi'",
           schemaPath: join(__dirname, 'oneapi.json'),
      mock: false,
    },
    {
      requestLibPath: "import { request } from 'umi'",
      schemaPath: 'https://gw.alipayobjects.com/os/antfincdn/CA1dOm%2631B/openapi.json',
      projectName: 'swagger',
    },
  ],
  nodeModulesTransform: {
    type: 'none',
  },
  mfsu: {},
  webpack5: {},
  exportStatic: {},
});
