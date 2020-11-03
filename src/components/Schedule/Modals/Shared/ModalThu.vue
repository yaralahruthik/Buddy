<template>
  <q-input 
    clearable
    outlined 
    :value="thu"
    @input="$emit('update:thu', $event)"
    @clear="$emit('update:thu', '')"
    label="Thu Class with time" 
    />
</template>

<script>
export default {
    props: ['thu']
}
</script>

<style lang="scss">

</style>