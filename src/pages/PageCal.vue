<template>
  <q-page>
    <div class="q-pa-md absolute full-width full-height column">

      <template v-if="scheduleDownloaded">
        <no-schedule v-if="!Object.keys(schedule).length" />

      <q-markup-table
        v-if="Object.keys(schedule).length">
        <thead>
          <tr>
            <th class="text-center bg-red-5">Monday</th>
            <th class="text-center bg-purple-5">Tuesday</th>
            <th class="text-center bg-blue-5">Wednesday</th>
            <th class="text-center bg-yellow-5">Thursday</th>
            <th class="text-center bg-green-5">Friday</th>
            <th class="text-center bg-orange-5">Saturday</th>
            <th class="text-center bg-brown-5">Sunday</th>
            <th class="text-center bg-grey">Options</th>
          </tr>
        </thead>
        <tbody>
          <row 
            v-for="(c, key) in schedule"
            :key="key"
            :schedule="c"
            :id="key"></row>
        </tbody>
      </q-markup-table>
      <div class="absolute-bottom text-center q-mb-lg">
        <q-btn
          @click="showAddSchedule = true"
          round
          color="primary"
          size="24px"
          icon="add"
        />
      </div>

      <q-dialog v-model="showAddSchedule">
        <add-schedule @close="showAddSchedule = false"></add-schedule>
      </q-dialog>

      </template>

      <template v-else>
        <span class="absolute-center">
          <q-spinner-hourglass
            color="primary"
            size="5em"
          />
        </span>
      </template>

    </div>

  </q-page>
</template>

<script>
import { mapGetters, mapState } from 'vuex'

export default {
  data() {
    return {
      showAddSchedule: false
    }
  },
  computed: {
    ...mapGetters('schedule', ['schedule']),
    ...mapState('schedule', ['scheduleDownloaded']),
    arraySchedule() {
      return Object.values(this.schedule)
    }
  },
  components: {
    'row' : require('components/Schedule/row.vue').default,
    'add-schedule' : require('components/Schedule/AddSchedule.vue').default,
    'no-schedule' : require('components/Schedule/NoSchedule.vue').default
  }
}
</script>
