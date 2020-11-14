
const routes = [
  {
<<<<<<< HEAD
    path: "/",
    component: () => import("layouts/Layout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/PageCal.vue")
      },
      {
        path: "/todo",
        component: () => import("pages/PageTodo.vue")
      },
      {
        path: "/settings",
        component: () => import("pages/PageSettings.vue")
      },
      {
        path: "/auth",
        component: () => import("pages/PageAuth.vue")
=======
    path: '/',
    component: () => import('layouts/Layout.vue'),
    children: [
      { 
        path: '', 
        component: () => import('pages/PageCal.vue') 
      },
      { 
        path: '/settings', 
        component: () => import('pages/PageSettings.vue') 
      },
      { 
        path: '/auth', 
        component: () => import('pages/PageAuth.vue') 
>>>>>>> 065a8dd948752105642beed93807e9fc1316e891
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
<<<<<<< HEAD
    path: "*",
    component: () => import("pages/Error404.vue")
  }
];
=======
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]
>>>>>>> 065a8dd948752105642beed93807e9fc1316e891

export default routes
