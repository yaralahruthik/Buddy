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
        <tr 
          v-for="(c, key) in schedule"
          :key="key">
          <td class="text-center bg-red-2">{{ c.mon }}</td>
          <td class="text-center bg-purple-2">{{ c.tue }}</td>
          <td class="text-center bg-blue-2">{{ c.wed }}</td>
          <td class="text-center bg-yellow-2">{{ c.thu }}</td>
          <td class="text-center bg-green-2">{{ c.fri }}</td>
          <td class="text-center bg-orange-2">{{ c.sat }}</td>
          <td class="text-center bg-brown-2">{{ c.sun }}</td>
        </tr>
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
  }
}
</script>
