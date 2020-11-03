<template>
  <tr>
    <td class="text-center bg-red-2">{{ schedule.mon }}</td>
    <td class="text-center bg-purple-2">{{ schedule.tue }}</td>
    <td class="text-center bg-blue-2">{{ schedule.wed }}</td>
    <td class="text-center bg-yellow-2">{{ schedule.thu }}</td>
    <td class="text-center bg-green-2">{{ schedule.fri }}</td>
    <td class="text-center bg-orange-2">{{ schedule.sat }}</td>
    <td class="text-center bg-brown-2">{{ schedule.sun }}</td>
  </tr>
</template>

<script>
export default {
  props: ['schedule', 'id']
}
</script>

<style lang="scss">

</style>