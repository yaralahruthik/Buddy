<template>
  <div class="row q-mb-sm">
    <q-input clearable label="Due Date" outlined @input="$emit('update:dueDate', $event)" @clear="$emit('update:dueDate', '')"  :value="dueDate">
      <template v-slot:append>
        <q-icon name="event" class="cursor-pointer">
          <q-popup-proxy>
            <q-date @input="$emit('update:dueDate', $event)" :value="dueDate" />
          </q-popup-proxy>
        </q-icon>
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['dueDate']

}
</script>

<style>

</style>