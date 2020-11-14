<template>
  <div class="row q-mb-sm">
    <q-input clearable label="Due Time" @input="$emit('update:dueTime', $event)" @clear="$emit('update:dueTime', '')" outlined :value="dueTime">
      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer">
          <q-popup-proxy>
            <q-time @input="$emit('update:dueTime', $event)" :value="dueTime" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueTime']

}
</script>

<style>

</style>