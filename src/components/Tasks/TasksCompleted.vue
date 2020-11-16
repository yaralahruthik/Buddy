<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut">
    <div class="q-mt-sm">
      <list-header bgColor="bg-green-4">Good Job, Human!</list-header>
      
      <q-list 
        separator
        bordered>

        <task
          v-for="(task, key) in tasksCompleted"
          :key="key"
          :task="task"
          :id="key" ></task>

      </q-list>
    </div>
  </transition>
</template>

<script>
import ListHeader from '../Shared/ListHeader.vue'
export default {
  props: ['tasksCompleted'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'list-header': require('components/Shared/ListHeader.vue').default
  }

}
</script>

<style>

</style>