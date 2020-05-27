import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
// const originalPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location, onResolve, onReject) {
//   if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
//   return originalPush.call(this, location).catch(err => err)
// };
const routes = [{
    path: '/',
    redirect: "/query-index"
  },
  {
    path: '/query-index',
    name: 'query-index',
    component: () => import('../components/queryIndex.vue')
  },
  {
    path: '/query-main',
    name: 'query-main',
    component: () => import('../components/queryMain.vue'),
    children: [{
        path: '/query-port',
        name: 'query-port',
        component: () => import('../components/portQuery.vue')
      },
      {
        path: '/query-int',
        name: 'query-int',
        component: () => import('../components/queryInt.vue')
      },
      ,
      {
        path: '/query-all',
        name: 'query-all',
        component: () => import('../components/queryAll.vue')
      },
      {
        path: '/query-customerize',
        name: 'query-customerize',
        component: () => import('../components/queryCustomerize.vue')
      }
    ]
  }


];

const router = new VueRouter({
  // mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
