<template>
  <q-item 
    @click="updateTask({ id: id, updates: { completed: !task.completed } })"
    :class="!task.completed ? 'bg-red-1' : 'bg-green-1'"
    v-touch-hold:1000.mouse="showEditTaskModal"
    clickable
    v-ripple>
    <q-item-section side top>
      <q-checkbox 
        v-model="task.completed"
        class="no-pointer-events" />
    </q-item-section>

    <q-item-section>
      <q-item-label
        :class="{ 'text-strike' : task.completed }"
        v-html="$options.filters.searchHighlight(task.name, search)">
      </q-item-label>
    </q-item-section>

    <q-item-section
      v-if="task.dueDate" 
      side>
      <div class="row">
        <div class="column justify-center">
          <q-icon 
            name="event"
            size="18px"
            class="q-mr-xs" />
        </div>
        <div class="column">
          <q-item-label 
            class="row justify-end"
            caption>
            {{ task.dueDate | niceDate }}
          </q-item-label>
          <q-item-label 
            class="row justify-end"
            caption>
            <small>{{ taskDueTime }}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>

    <q-item-section side>
      <div class="row">
        <q-btn
          @click.stop="showEditTaskModal"
          dense
          flat
          round
          color="primary"
          icon="edit" />

        <q-btn
          @click.stop="promptToDelete(id)"
          dense
          flat
          round
          color="red"
          icon="delete" />
      </div>
    </q-item-section>

    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask = false" />
    </q-dialog>

  </q-item>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { date } from 'quasar'
const { formatDate } = date

export default {
  data() {
    return {
      showEditTask: false
    }
  },
  computed: {
    ...mapState('tasks', ['search']),
    ...mapGetters('settings', ['settings']),
    taskDueTime() {
      if (this.settings.show12HourTimeFormat) {
        return formatDate(this.task.dueDate + ' ' + this.task.dueTime, 'h:mmA')
      }
      return this.task.dueTime
    }
  },
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    showEditTaskModal() {
      this.showEditTask = true  
    },
    promptToDelete(id) {
      this.$q.dialog({
        title: 'Confirm',
        message: 'Are you sure?',
        ok: {
          push: true
        },
        cancel: {
          color: 'negative'
        },
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  filters: {
    niceDate(value) {
      return formatDate(value, 'D MMM')
    },
    searchHighlight(value, search) {
      if (search) {
        let searchRegExp = new RegExp(search, 'ig')
        return value.replace(searchRegExp, (match) => {
          return '<span class="bg-yellow-6">' + match + '</span>'
        })
      }
      return value
    }
  },
  components: {
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default
  }
}
</script>

<style lang="scss">

</style>