import Vue from 'vue'
import { uid } from 'quasar'

const state = {
  tasks: {
    // 'ID1': {
    //   name: "Get bananas",
    //   completed: false,
    //   dueDate: "2020/05/14",
    //   dueTime: "20:30"
    // },
    // 'ID2': {
    //   name: "Get Apples",
    //   completed: false,
    //   dueDate: "2020/05/14",
    //   dueTime: "20:30"
    // },
    // 'ID3': {
    //   name: "Get Water",
    //   completed: false,
    //   dueDate: "2020/05/14",
    //   dueTime: "20:30"
    // }
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    Vue.delete(state.tasks, id)
  },
  addTask(state, payload) {
    Vue.set(state.tasks, payload.id, payload.task)
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}