import { BLOGS } from "@/constants/api";

const state = {
  blogs: [],
};

const getters = {
  getBlogs: state => state.blogs,
};

const actions = {
  async fetchBlogs({ commit }) {
    try {
      const response = await axios.get(BLOGS);
      //console.log(response.data) 
      commit('setBlogs', response.data);
      return response;
    } catch (error) {
      return error;
    }
  },
};

const mutations = {
  setBlogs(state, blogs) {
      state.blogs = blogs;
  },
};

export default {
  namespaced: true,  // Add this line to enable namespacing
  state,
  mutations,
  actions,
  getters,
};
