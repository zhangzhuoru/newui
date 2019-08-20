/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
 import Dashboard from '@/views/Dashboard.vue'
export default [
  {
    path: '/dashboard',
    // Relative to /src/views
    view: 'Dashboard',
    hash:'11',
    component:Dashboard
  },
  {
    path: '/user-profile',
    name: 'User Profile',
    view: 'UserProfile'
  },
  {
    path: '/table-list',
    name: 'Table List',
    view: 'TableList'
  },
  {
    path: '/typography',
    view: 'Typography'
  },
  {
    path: '/icons',
    view: 'Icons'
  },
  {
    path: '/maps',
    view: 'Maps'
  },
  {
    path: '/pinfo',
    name: 'Pinfo',
    view: 'Pinfo'
  },
  {
    path: '/pinsjfo',
    name: 'Pinsjfo',
    view: 'Pinsjfo'
  },
  {
    path: '/notifications',
    view: 'Notifications'
  },
  {
    path: '/upgrade',
    name: 'Upgrade to PRO',
    view: 'Upgrade'
  }
]
