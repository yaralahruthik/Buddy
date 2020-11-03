import { uid } from 'quasar'
import Vue from 'vue'

const state = {
  schedule: {
    // ID1: {
    //   mon: "MonC",
    //   tue: "TueC",
    //   wed: "WedC",
    //   thu: "ThuC",
    //   fri: "FriC",
    //   sat: "SatC",
    //   sun: "SunC"
    // },
    // ID2: {
    //   mon: "MonC",
    //   tue: "TueC",
    //   wed: "WedC",
    //   thu: "ThuC",
    //   fri: "FriC",
    //   sat: "SatC",
    //   sun: "SunC"
    // },
    // ID3: {
    //   mon: "MonC",
    //   tue: "TueC",
    //   wed: "WedC",
    //   thu: "ThuC",
    //   fri: "FriC",
    //   sat: "SatC",
    //   sun: "SunC"
    // }
  }
};

const mutations = {
  deleteSchedule(state, id) {
    Vue.delete(state.schedule, id)
  },
  addSchedule(state, payload) {
    Vue.set(state.schedule, payload.id, payload.scheduleRow)
  }
}

const actions = {
  deleteSchedule({ commit }, id) {
    commit('deleteSchedule', id)
  },
  addSchedule({ commit }, scheduleRow) {
    let scheduleRowId = uid()
    let payload = {
      id: scheduleRowId,
      scheduleRow: scheduleRow
    }
    commit('addSchedule', payload)
  }
}

const getters = {
    schedule: (state) => {
        return state.schedule
    }
}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}