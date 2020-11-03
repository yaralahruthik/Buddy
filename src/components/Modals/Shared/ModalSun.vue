<template>
  <q-input 
    clearable
    outlined 
    :value="sun"
    @input="$emit('update:sun', $event)"
    @clear="$emit('update:sun', '')"
    label="Add Sun Class with time" 
    />
</template>

<script>
export default {
    props: ['sun']
}
</script>

<style lang="scss">

</style>