export default function () {
  const routes = [
    {
      path: '/',
      name: 'demo',
      component: resolve => require(['@/pages/demo'], resolve),
      meta: { requiresAuth: false }
    }
    // {
    //   path: '/register',
    //   name: 'register',
    //   component: resolve => require(['@/pages/Register'], resolve),
    //   meta: { requiresAuth: false }
    // },
    // {
    //   path: '/personal/about',
    //   name: 'aboutUs',
    //   component: resolve => require(['@/pages/personal/AboutUs'], resolve),
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: '/yellow/activity/:id',
    //   name: 'activityDetail',
    //   component: resolve => require(['@/pages/yellow/ActivityDetail'], resolve),
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: '/yellow/userinfor',
    //   name: 'userInfor',
    //   component: resolve => require(['@/pages/yellow/UserInfor'], resolve),
    //   meta: { requiresAuth: true }
    // },
    // {
    //   path: '/',
    //   component: resolve => require(['@/pages/Home'], resolve),
    //   meta: { requiresAuth: true },   // 全局控制访问页面要求登录
    //   children: [
    //     {
    //       path: '/',
    //       component: resolve => require(['@/pages/personal/Personal'], resolve)
    //     },
    //     {
    //       path: '/yellow',
    //       // name: 'yellow',
    //       component: resolve => require(['@/pages/yellow/Yellow'], resolve),
    //       children: [
    //         {
    //           path: '/',
    //           component: resolve => require(['@/pages/yellow/TodayDuty'], resolve)
    //         },
    //         {
    //           path: 'find',
    //           name: 'findUser',
    //           component: resolve => require(['@/pages/yellow/FindUser'], resolve)
    //         },
    //         {
    //           path: 'duty',
    //           name: 'todayduty',
    //           component: resolve => require(['@/pages/yellow/TodayDuty'], resolve)
    //         }

    //       ]
    //     },
    //     {
    //       path: 'personal',
    //       name: 'personal',
    //       component: resolve => require(['@/pages/personal/Personal'], resolve)
    //     }
    //   ]
    // },
    // {
    //   path: '*',
    //   redirect: '/login',
    //   meta: { requiresAuth: false }
    // }
  ]
  return routes
}
