const state = {
  schedule: {
    ID1: {
      mon: "MonC",
      tue: "TueC",
      wed: "WedC",
      thu: "ThuC",
      fri: "FriC",
      sat: "SatC",
      sun: "SunC"
    },
    ID2: {
      mon: "MonC",
      tue: "TueC",
      wed: "WedC",
      thu: "ThuC",
      fri: "FriC",
      sat: "SatC",
      sun: "SunC"
    },
    ID3: {
      mon: "MonC",
      tue: "TueC",
      wed: "WedC",
      thu: "ThuC",
      fri: "FriC",
      sat: "SatC",
      sun: "SunC"
    }
  }
};

const mutations = {}

const actions = {}

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