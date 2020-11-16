<template>
  <div class="row q-mb-sm">
    <q-input 
      outlined
      :rules="[val => !!val || 'Field is required']"
      autofocus
      v-select-all
      clearable
      ref="name"
      :value="name"
      @input="$emit('update:name', $event)"
      @clear="$emit('update:name', '')" 
      label="Task Name"
      class="col"
      />
  </div>
</template>

<script>
import { selectAll } from 'src/directives/directive-select-all'

export default {
  props: ['name'],
  directives: {
    selectAll
  }
}
</script>

<style>

</style>