<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top">
    <div>
      <list-header bgColor="bg-red-4" >Feeling Lazy, Human?</list-header>
      
      <q-list 
        separator
        bordered>

      <task
        v-for="(task, key) in tasksTodo"
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
  props: ['tasksTodo'],
  components: {
    'task': require('components/Tasks/Task.vue').default,
    'list-header': require('components/Shared/ListHeader.vue').default
  }

}
</script>

<style>

</style>