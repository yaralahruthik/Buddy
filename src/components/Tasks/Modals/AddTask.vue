<template>
  <q-card>
    <modal-header>Add Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name 
          ref="modalTaskName"
          :name.sync="taskToSubmit.name" />

        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />
        
        <modal-due-time :dueTime.sync="taskToSubmit.dueTime" />
        
      </q-card-section>

      <modal-buttons></modal-buttons>

      <pre>{{ taskToSubmit }}</pre>
    </q-form>

  </q-card>
</template>

<script>
import ModalHeader from 'src/components/Schedule/Modals/Shared/ModalHeader.vue'
import { mapActions } from 'vuex'
import ModalDueDate from './Shared/ModalDueDate.vue'
import ModalDueTime from './Shared/ModalDueTime.vue'
import ModalButtons from 'src/components/Schedule/Modals/Shared/ModalButtons.vue'

export default {
  data() {
    return {
      taskToSubmit: {
        name: '',
        dueDate: '',
        dueTime: '',
        completed: false
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['addTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  },
  components: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
    'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
  }
}
</script>

<style lang="scss">

</style>