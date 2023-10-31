import { ALL_BLOGS, UPDATE_STATUS } from "@/constants/api";

const state = {
  blog: [],
};

const getters = {
  GET_BLOGS: (state) => state.blog,
};

const actions = {
  async FETCH_BLOGS(context) {
    let response = "";
    try {
      response = await axios.get(ALL_BLOGS, {
        headers: {
          Authorization: `Bearer 26|hdbxgIuLcZYeClFgYNu6UWefzRkWA5JzgGm4lRr739ea4c9a`,
        },
      });
      context.commit("SET_BLOGS", response.data);
      return response;
    } catch (err) {
      console.log("Error fetching blog: ", err.response);
    }
  },

  async APPROVE_BLOG(context, {blogId, changeStatus}) {
    try {
      await axios.patch(
        `${UPDATE_STATUS}/${blogId}`,
        {
          "isApproved": changeStatus,
        },
        {
          headers: {
            Authorization: `Bearer 26|hdbxgIuLcZYeClFgYNu6UWefzRkWA5JzgGm4lRr739ea4c9a`,
          },
        }
      );
    } catch (err) {
      console.log("Error approving blog: ", err.response);
    }
  },
};

const mutations = {
  SET_BLOGS(state, blog) {
    state.blog = blog;
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
