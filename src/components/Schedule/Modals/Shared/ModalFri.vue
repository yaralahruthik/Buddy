<template>
  <q-input 
    clearable
    outlined 
    :value="fri"
    @input="$emit('update:fri', $event)"
    @clear="$emit('update:fri', '')"
    label="Fri Class with time" 
    />
</template>

<script>
export default {
    props: ['fri']
}
</script>

<style lang="scss">

</style>