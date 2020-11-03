<template>
  <q-input 
    clearable
    outlined 
    :value="sat"
    @input="$emit('update:sat', $event)"
    @clear="$emit('update:sat', '')"
    label="Sat Class with time" 
    />
</template>

<script>
export default {
    props: ['sat']
}
</script>

<style lang="scss">

</style>