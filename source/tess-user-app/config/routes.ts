export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/Login',
      },
      {
        name: 'register',
        path: '/user/register',
        component: './user/register',
      },
      {
        component: './404',
      },
    ],
  },
  {
    path: '/electric-vehicle-charger',
    name: 'ev',
    icon: 'smile',
    component: './electric-vehicle-charger',
  },
  {
    name: 'electric-vehicle-charger',
    icon: 'user',
    path: '/electric-vehicle-charger',
    routes: [
      {
        path: '/electric-vehicle-charger',
        redirect: '/electric-vehicle-charger/schedule',
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
        path: '/electric-vehicle-charger/schedule',
        component: './electric-vehicle-charger/cost',
      },
      {
        name: 'Setting',
        icon: 'smile',
        path: '/electric-vehicle-charger/schedule',
        component: './electric-vehicle-charger/settings',
      },
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    icon: 'crown',
    access: 'canAdmin',
    component: './Admin',
    routes: [
      {
        path: '/admin/sub-page',
        name: 'sub-page',
        icon: 'smile',
        component: './Welcome',
      },
      {
        component: './404',
      },
    ],
  },
  {
    name: 'list.table-list',
    icon: 'table',
    path: '/list',
    component: './TableList',
  },
  {
    path: '/',
    redirect: '/welcome',
  },
  {
    component: './404',
  },
];
