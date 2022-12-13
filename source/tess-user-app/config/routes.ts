export default [
  {
    path: '/user',
    layout: false,
    routes: [
      { name: 'login', path: '/user/login', component: './user/Login' },
      { name: 'signup', path: '/user/register', component: './user/register' },
      { component: './404' },
    ],
  },
  { path: '/electric-vehicle-charger', icon: 'smile', component: './electric-vehicle-charger' },
  {
    icon: 'user',
    path: '/electric-vehicle-charger',
    routes: [
      { path: '/electric-vehicle-charger', redirect: '/electric-vehicle-charger/schedule' },
      {
        icon: 'smile',
        path: '/electric-vehicle-charger/schedule',
        component: './electric-vehicle-charger/schedule',
      },
      {
        icon: 'smile',
        path: '/electric-vehicle-charger/schedule',
        component: './electric-vehicle-charger/cost',
      },
      {
        icon: 'smile',
        path: '/electric-vehicle-charger/schedule',
        component: './electric-vehicle-charger/settings',
      },
      {
        icon: 'smile',
        path: '/electric-vehicle-charger/schedule',
        component: './electric-vehicle-charger/general',
      },
    ],
  },

  { path: '/', redirect: '/welcome' },
  {
    icon: 'user',
    path: '/heating-and-cooling',
    routes: [
      { path: '/heating-and-cooling', redirect: '/heating-and-cooling/center' },
      {
        icon: 'smile',
        path: '/heating-and-cooling/center',
        component: './heating-and-cooling/center',
      },
    ],
  },
  { component: './404' },
];
