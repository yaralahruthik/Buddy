import { LocalStorage } from 'quasar'

export default async ({ router, store, Vue }) => {
  router.beforeEach((to, from, next) => {
    let loggedIn = LocalStorage.getItem('loggedIn')
    if (!loggedIn && to.path !== '/auth') {
      next('/auth')
    }
    else {
      next()
    }
  })
}
