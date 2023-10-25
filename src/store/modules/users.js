import { ALL_USERS } from "@/constants/api";

const state = {
  users: [],
};

const getters = {
  GET_USERS: (state) => state.users,
};

const actions = {
  async FETCH_USERS(context) {
    let response = "";
    try {
      response = await axios.get(ALL_USERS, {
        headers: {
          Authorization: `Bearer 26|hdbxgIuLcZYeClFgYNu6UWefzRkWA5JzgGm4lRr739ea4c9a`,
        },
      });
      console.log(response);
      context.commit("SET_USERS", response.data);
      return response;
    } catch (err) {
      console.log("Error fetching users: ", err.response);
    }
  },

  async REMOVE_USER(context, userId) {
    try {
      await axios.delete(`${DELETE_USER}/${userId}`, {
        headers: {
          Authorization: `Bearer 26|hdbxgIuLcZYeClFgYNu6UWefzRkWA5JzgGm4lRr739ea4c9a`,
        },
      });
      context.commit("DELETE_USER", userId);
    } catch (err) {
      console.log("Error removing user: ", err.response);
    }
  },
};

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },

  DELETE_USER(state, userId) {
    // Remove the user from the state based on their ID
    state.users = state.users.filter((user) => user.id !== userId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
