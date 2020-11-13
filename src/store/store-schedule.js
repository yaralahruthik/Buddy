import { uid, Notify } from 'quasar'
import Vue from 'vue'
import { firebaseDb, firebaseAuth } from 'boot/firebase'
import { showErrorMessage } from 'src/functions/function-show-error-message'

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
  },
  scheduleDownloaded: false
}

const mutations = {
  updateSchedule(state, payload) {
    Object.assign(state.schedule[payload.id], payload.updates)
  },
  deleteSchedule(state, id) {
    Vue.delete(state.schedule, id)
  },
  addSchedule(state, payload) {
    Vue.set(state.schedule, payload.id, payload.scheduleRow)
  },
  clearSchedule(state) {
    state.schedule = {}
  },
  setScheduleDownloaded(state, value) {
    state.scheduleDownloaded = value
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

    // initial check for data
    userSchedule.once('value', snapshot => {
      commit('setScheduleDownloaded', true)
    }, error => {
      showErrorMessage(error.message)
      this.$router.replace('/auth')
    })
    
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
    scheduleRef.set(payload.scheduleRow, error => {
      if(error) {
        showErrorMessage(error.message)
      }
      else {
        Notify.create('Schedule Added!')
      }
    })
  },
  fbUpdateSchedule({}, payload) {
    let userId = firebaseAuth.currentUser.uid;
    let scheduleRef = firebaseDb.ref('schedule/' + userId + '/' + payload.id)
    scheduleRef.update(payload.updates, error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create("Schedule Updated!")
      }
    })
  },
  fbDeleteSchedule({}, scheduleRowId) {
    let userId = firebaseAuth.currentUser.uid;
    let scheduleRef = firebaseDb.ref('schedule/' + userId + '/' + scheduleRowId)
    scheduleRef.remove(error => {
      if (error) {
        showErrorMessage(error.message);
      } else {
        Notify.create("Schedule Deleted!")
      }
    })
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