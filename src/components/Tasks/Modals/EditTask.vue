<template>
  <q-card>
    <modal-header>Edit Task</modal-header>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <modal-task-name 
          ref="modalTaskName"
          :name.sync="taskToSubmit.name" />

        <modal-due-date :dueDate.sync="taskToSubmit.dueDate" />
        
        <modal-due-time v-if="taskToSubmit.dueDate" :dueTime.sync="taskToSubmit.dueTime" />
        
      </q-card-section>

      <modal-buttons></modal-buttons>

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
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit
      })
      this.$emit('close')
    }
  },
  components: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
    'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)
  }
}
</script>

<style lang="scss">

</style>