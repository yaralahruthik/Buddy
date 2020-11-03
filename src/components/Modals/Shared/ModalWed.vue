<template>
  <q-input 
    clearable
    outlined 
    :value="wed"
    @input="$emit('update:wed', $event)"
    @clear="$emit('update:wed', '')"
    label="Add Wed Class with time" 
    />
</template>

<script>
export default {
    props: ['wed']
}
</script>

<style lang="scss">

</style>