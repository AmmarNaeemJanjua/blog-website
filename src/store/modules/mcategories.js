import { ALL_CATEGORIES, ADD_CATEGORY } from "@/constants/api";

const state = {
    categories: [],
};

const getters = {
  GET_CATEGORIES: (state) => state.categories,
};

const actions = {
  async FETCH_CATEGORIES(context) {
    let response = "";
    try {
      response = await axios.get(ALL_CATEGORIES, {
        headers: {
          Authorization: `Bearer 26|hdbxgIuLcZYeClFgYNu6UWefzRkWA5JzgGm4lRr739ea4c9a`,
        },
      });
      console.log(response);
      context.commit("SET_CATEGORIES", response.data.categories);
      return response;
    } catch (err) {
      console.log("Error fetching users: ", err.response);
    }
  },
  async CREATE_CATEGORY(context, payload) {
    let postData = {
      name: payload.name,
    };
    let response = "";
    try {
      response = await axios.post(ADD_CATEGORY, postData, {
        headers: {
          Authorization: `Bearer 26|hdbxgIuLcZYeClFgYNu6UWefzRkWA5JzgGm4lRr739ea4c9a`,
        },
      });
    } catch (err) {
      console.log(err.response);
    }

    if (response.status === 201){
      context.commit('PUSH_CATEGORY', response.data.category);
    }
  }
};

const mutations = {
  SET_CATEGORIES(state, categories) {
    state.categories = categories;
  },
  PUSH_CATEGORY(state, category) {
    state.categories.push(category);
  }
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
