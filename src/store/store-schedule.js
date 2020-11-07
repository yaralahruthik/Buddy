import { uid } from 'quasar'
import Vue from 'vue'
import { firebaseDb, firebaseAuth } from 'boot/firebase'

const state = {
  schedule: {
    // 'ID1': {
    //   mon: "MonC",
    //   tue: "TueC",
    //   wed: "WedC",
    //   thu: "ThuC",
    //   fri: "FriC",
    //   sat: "SatC",
    //   sun: "SunC"
    // },
    // 'ID2': {
    //   mon: "MonC",
    //   tue: "TueC",
    //   wed: "WedC",
    //   thu: "ThuC",
    //   fri: "FriC",
    //   sat: "SatC",
    //   sun: "SunC"
    // },
    // 'ID3': {
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
  updateSchedule(state, payload) {
    Object.assign(state.schedule[payload.id], payload.updates)
  },
  deleteSchedule(state, id) {
    Vue.delete(state.schedule, id)
  },
  addSchedule(state, payload) {
    Vue.set(state.schedule, payload.id, payload.scheduleRow)
  }
}

const actions = {
  updateSchedule({ dispatch }, payload) {
    dispatch('fbUpdateSchedule', payload)
  },
  deleteSchedule({ dispatch }, id) {
    dispatch('fbDeleteSchedule', id)
  },
  addSchedule({ dispatch }, scheduleRow) {
    let scheduleRowId = uid()
    let payload = {
      id: scheduleRowId,
      scheduleRow: scheduleRow
    }
    dispatch('fbAddSchedule', payload)
  },
  fbReadData({ commit }) {
    let userId = firebaseAuth.currentUser.uid
    let userSchedule = firebaseDb.ref("schedule/" + userId)
    
    // child added
    userSchedule.on('child_added', snapshot => {
      let scheduleRow = snapshot.val()
      let payload = {
        id: snapshot.key,
        scheduleRow: scheduleRow
      }
      commit('addSchedule', payload)
    })

    // child changed
    userSchedule.on("child_changed", snapshot => {
      let scheduleRow = snapshot.val()
      let payload = {
        id: snapshot.key,
        updates: scheduleRow
      };
      commit("updateSchedule", payload)
    })

    // child removed
    userSchedule.on("child_removed", snapshot => {
      let scheduleRowId = snapshot.key
      commit("deleteSchedule", scheduleRowId)
    })
  },
  fbAddSchedule({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let scheduleRef = firebaseDb.ref('schedule/' + userId + '/' + payload.id)
    scheduleRef.set(payload.scheduleRow)
  },
  fbUpdateSchedule({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let scheduleRef = firebaseDb.ref('schedule/' + userId + '/' + payload.id)
    scheduleRef.update(payload.updates)
  },
  fbDeleteSchedule({}, scheduleRowId) {
    let userId = firebaseAuth.currentUser.uid;
    let scheduleRef = firebaseDb.ref('schedule/' + userId + '/' + scheduleRowId)
    scheduleRef.remove()
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