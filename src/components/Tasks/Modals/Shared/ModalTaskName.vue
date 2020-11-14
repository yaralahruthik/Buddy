<template>
  <div class="row q-mb-sm">
    <q-input 
      outlined
      :rules="[val => !!val || 'Field is required']"
      autofocus
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
export default {
  props: ['name']
}
</script>

<style>

</style>