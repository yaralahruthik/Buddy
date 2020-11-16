<template>
  <transition
    appear
    enter-active-class="animated zoomIn"
    leave-active-class="animated zoomOut absolute-top">
    <q-banner class="bg-grey-3">
      <template v-slot:avatar>
        <q-icon name="sentiment_neutral" color="red" />
      </template>
      <span class="text-subtitle1">No Tasks?</span>
    </q-banner>
  </transition>
</template>

<script>
export default {

}
</script>

<style>

</style>