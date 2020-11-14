<template>
<<<<<<< HEAD
  <q-page class="q-pa-md">
    <q-list 
      separator
      bordered>
    </q-list>

    <task
      v-for="(task, key) in tasks"
      :key="key"
      :task="task"
      :id="key" ></task>
=======
  <q-page>

>>>>>>> 065a8dd948752105642beed93807e9fc1316e891
  </q-page>
</template>

<script>
<<<<<<< HEAD
import Task from 'src/components/Tasks/Task.vue'
  import { mapGetters } from 'vuex'

  export default {
    computed: {
      ...mapGetters('tasks', ['tasks'])
    },
    components: {
      'task': require('components/Tasks/Task.vue').default
    }
  }

</script>

<style lang="scss">

</style>
=======

</script>
>>>>>>> 065a8dd948752105642beed93807e9fc1316e891
