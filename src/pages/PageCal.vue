<template>
  <q-page padding>
    <q-table
      title="Time Table"
      :data="data"
      :columns="columns"
      row-key="id"
      rows-per-page-options="0"
      hide-bottom>
    </q-table>
  </q-page>
</template>

<script>
export default {
  data () {
    return {
      columns: [
        { name: 'mon', headerClasses: 'bg-red-5', classes: 'bg-red-2', label: 'Mon', field: 'mon', align: 'center'},
        { name: 'tue', headerClasses: 'bg-purple-5', classes: 'bg-purple-2', label: 'Tue', field: 'tue', align: 'center'},
        { name: 'wed', headerClasses: 'bg-blue-5', classes: 'bg-blue-2', label: 'Wed', field: 'wed', align: 'center'},
        { name: 'thu', headerClasses: 'bg-yellow-5', classes: 'bg-yellow-2', label: 'Thu', field: 'thu', align: 'center'},
        { name: 'fri', headerClasses: 'bg-green-5', classes: 'bg-green-2', label: 'Fri', field: 'fri', align: 'center'},
        { name: 'sat', headerClasses: 'bg-orange-5', classes: 'bg-orange-2', label: 'Sat', field: 'sat', align: 'center'},
        { name: 'sun', headerClasses: 'bg-brown-5', classes: 'bg-brown-2', label: 'Sun', field: 'sun', align: 'center'}
      ],
      data: [
        {
          id: 1,
          mon: 'MonC',
          tue: 'TueC',
          wed: 'WedC',
          thu: 'ThuC',
          fri: 'FriC',
          sat: 'SatC',
          sun: 'SunC'
        },
        {
          id: 2,
          mon: 'MonC',
          tue: 'TueC',
          wed: 'WedC',
          thu: 'ThuC',
          fri: 'FriC',
          sat: 'SatC',
          sun: 'SunC'
        },
        {
          id: 3,
          mon: 'MonC',
          tue: 'TueC',
          wed: 'WedC',
          thu: 'ThuC',
          fri: 'FriC',
          sat: 'SatC',
          sun: 'SunC'
        }
      ]
    }
  }
}
</script>
