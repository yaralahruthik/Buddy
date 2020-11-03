<template>
  <q-input 
    clearable
    outlined 
    :value="tue"
    @input="$emit('update:tue', $event)"
    @clear="$emit('update:tue', '')"
    label="Add Tue Class with time" 
    />
</template>

<script>
export default {
    props: ['tue']
}
</script>

<style lang="scss">

</style>