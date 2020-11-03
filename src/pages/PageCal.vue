<template>
  <q-page padding>
    <q-markup-table>
      <thead>
        <tr>
          <th class="text-center bg-red-5">Monday</th>
          <th class="text-center bg-purple-5">Tuesday</th>
          <th class="text-center bg-blue-5">Wednesday</th>
          <th class="text-center bg-yellow-5">Thursday</th>
          <th class="text-center bg-green-5">Friday</th>
          <th class="text-center bg-orange-5">Saturday</th>
          <th class="text-center bg-brown-5">Sunday</th>
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
  </q-page>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('schedule', ['schedule']),
    arraySchedule() {
      return Object.values(this.schedule)
    }
  },
  components: {
    'row' : require('components/row.vue').default
  }
}
</script>
