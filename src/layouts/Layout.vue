<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title class="absolute-center">
          Buddy
        </q-toolbar-title>

        <q-btn
          v-if="!loggedIn"
          to="/auth"
          flat
          label="Login"
          icon-right="account_circle"
          class="absolute-right"
          />

        <q-btn
          v-else
          @click="logoutUser"
          flat
          label="Logout"
          icon-right="account_circle"
          class="absolute-right"
          />

      </q-toolbar>
    </q-header>

    <q-footer>
      <q-tabs>
        <q-route-tab 
          v-for="nav in navs"
          :key="nav.label"
          :to="nav.to"
          :icon="nav.icon" 
          :label="nav.label" />
      </q-tabs>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :breakpoint="767"
      :width="200"
      show-if-above
      bordered
      content-class="bg-grey-1">  
      <q-list>
        <q-item-label header class="text-grey-8">Navigation</q-item-label>
        <q-item
          v-for="nav in navs"
          :key="nav.label" 
          :to="nav.to"
          exact
          clickable>
          <q-item-section avatar>
            <q-icon :name="nav.icon"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ nav.label }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  data () {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop,
      navs: [
        {
          label: 'Buddy',
          icon: 'school',
          to: '/'
        },
        {
<<<<<<< HEAD
          label: 'Todo',
          icon: 'list',
          to: '/todo'
        },
        {
=======
>>>>>>> 065a8dd948752105642beed93807e9fc1316e891
          label: 'Settings',
          icon: 'settings',
          to: '/settings'
        }
      ]
    }
  },
  computed: {
    ...mapState('auth', ['loggedIn'])
  },
  methods: {
    ...mapActions('auth', ['logoutUser'])
  }
}
</script> 

<style lang="scss">
  @media screen and (min-width: 768px) {
    .q-footer {
      display: none;
    }
  }
</style>
