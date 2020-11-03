<template>
  <tr>
    <td class="text-center bg-red-2">{{ schedule.mon }}</td>
    <td class="text-center bg-purple-2">{{ schedule.tue }}</td>
    <td class="text-center bg-blue-2">{{ schedule.wed }}</td>
    <td class="text-center bg-yellow-2">{{ schedule.thu }}</td>
    <td class="text-center bg-green-2">{{ schedule.fri }}</td>
    <td class="text-center bg-orange-2">{{ schedule.sat }}</td>
    <td class="text-center bg-brown-2">{{ schedule.sun }}</td>
    <td class="text-center bg-grey-5">
      <div class="q-gutter-sm">
      <q-btn round dense color="green" icon="edit" @click.stop="showEditTask = true" />
      <q-btn round dense color="red" icon="delete" @click.stop="promptToDelete(id)"/>
      </div>
    </td>
    <q-dialog v-model="showEditTask">
      <edit-schedule 
        @close="showEditTask = false" 
        :schedule="schedule"
        :id="id"/>
  </q-dialog>
  </tr>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      showEditTask: false
    }
  },
  props: ['schedule', 'id'],
  methods: {
    ...mapActions('schedule', ['deleteSchedule']),
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Sure?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteSchedule(id)
      })
    }
  },
  components: {
    'edit-schedule': require('components/Schedule/EditSchedule.vue').default
  }
}
</script>

<style lang="scss">

</style>