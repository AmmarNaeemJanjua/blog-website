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
      console.log(response);
      context.commit("SET_BLOGS", response.data);
      return response;
    } catch (err) {
      console.log("Error fetching blog: ", err.response);
    }
  },

  async APPROVE_BLOG(context, blogId) {
    try {
      await axios.patch(
        `${UPDATE_STATUS}/${blogId}`,
        {},
        {
          headers: {
            Authorization: `Bearer 26|hdbxgIuLcZYeClFgYNu6UWefzRkWA5JzgGm4lRr739ea4c9a`,
          },
        }
      );
      context.commit("BLOG_STATUS", blogId);
      return response;
    } catch (err) {
      console.log("Error approving blog: ", err.response);
    }
  },
};

const mutations = {
  SET_BLOGS(state, blog) {
    state.blog = blog;
  },

  BLOG_STATUS(state, blogId) {
    // Find the index of the blog in the state array
    const blogIndex = state.blog.findIndex((blog) => blog.id === blogId);

    if (blogIndex !== -1) {
      // Update the 'isApproved' status to true
      state.blog[blogIndex].isApproved = true;
    }
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
