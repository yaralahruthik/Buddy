<template>
  <q-input 
    clearable
    outlined 
    :value="mon"
    @input="$emit('update:mon', $event)"
    @clear="$emit('update:mon', '')"
    label="Mon Class with time" 
    />
</template>

<script>
export default {
    props: ['mon']
}
</script>

<style lang="scss">

</style>