<template>
  <q-banner 
    dense 
    :class="bgColor"
    inline-actions 
    class="list-header text-white text-center">
    <span class="text-bold text-subtitle1"><slot></slot></span>
  </q-banner>
</template>

<script>
export default {
  props: ['bgColor']

}
</script>

<style>
  
</style>