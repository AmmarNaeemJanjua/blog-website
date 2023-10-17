import { REGISTER } from "@/constants/api";

const state = {
  user: null,
};

const getters = {
};

const actions = {
  async registerUser({ commit }, userData) {
    try {
      const response = await axios.post(REGISTER, userData);
      if (response.status == 201) {
        commit('setUser', response.data);
      }
      return response;
    } catch (error) {
      return error;
    }
  },
};

const mutations = {
  setUser(state, user) {
    state.user = user;
  }
};

export default {
  state,
  mutations,
  actions,
  getters,
};
