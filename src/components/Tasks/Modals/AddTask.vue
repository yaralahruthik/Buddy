<template>
  <q-card>
    <q-card-section class="row">
      <div class="text-h6">Add Task</div>
      <q-space />
      <q-btn
        v-close-popup 
        dense
        flat
        round
        icon="close"/>
    </q-card-section>

    <q-form @submit.prevent="submitForm">
      <q-card-section class="q-pt-none">
        <div class="row q-mb-sm">
          <q-input 
            outlined
            :rules="[val => !!val || 'Field is required']"
            autofocus
            clearable
            ref="name"
            v-model="taskToSubmit.name"
            label="Task Name"
            class="col"
            />
        </div>

        <div class="row q-mb-sm">
          <q-input clearable label="Due Date" outlined v-model="taskToSubmit.dueDate">
            <template v-slot:append>
              <q-icon name="event" class="cursor-pointer">
                <q-popup-proxy>
                  <q-date v-model="taskToSubmit.dueDate" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
        
        <div 
          v-if="taskToSubmit.dueDate"
          class="row q-mb-sm">
          <q-input clearable label="Due Time" outlined v-model="taskToSubmit.dueTime">
            <template v-slot:append>
              <q-icon name="access_time" class="cursor-pointer">
                <q-popup-proxy>
                  <q-time v-model="taskToSubmit.dueTime" />
                </q-popup-proxy>
              </q-icon>
            </template>
          </q-input>
        </div>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          type="submit" 
          label="Save" 
          color="primary" />
      </q-card-actions>
    </q-form>

  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

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
      this.$refs.name.validate()
      if (!this.$refs.name.hasError) {
        this.submitTask()
      }
    },
    submitTask() {
      this.addTask(this.taskToSubmit)
      this.$emit('close')
    }
  }
}
</script>

<style lang="scss">

</style>