import Vue from 'vue'
import Vuex from 'vuex'

import schedule from './store-schedule'
<<<<<<< HEAD
import tasks from './store-tasks'
=======
>>>>>>> 065a8dd948752105642beed93807e9fc1316e891
import auth from './store-auth'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      schedule,
<<<<<<< HEAD
      tasks,
=======
>>>>>>> 065a8dd948752105642beed93807e9fc1316e891
      auth
    },

    // enable strict mode (adds overhead!)
    // for dev mode only
    strict: process.env.DEBUGGING
  })

  return Store
}
