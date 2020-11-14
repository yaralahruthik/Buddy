<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions('auth', ['handleAuthStateChange'])
  },
  mounted() {
    this.handleAuthStateChange()
  }
}
</script>

<style lang="scss">
<<<<<<< HEAD
  
=======

>>>>>>> 065a8dd948752105642beed93807e9fc1316e891
</style>