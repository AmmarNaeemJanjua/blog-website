import { SINGLEBLOG } from "@/constants/api";
import axios from "axios";

const state = {
    blog: [],
};

const getters = {
    getBlog: state => state.blog,
};

const actions = {
    async fetchSingleBlog({ commit }, id) {
        try {
            const url = `${SINGLEBLOG}/${id}`;
            const response = await axios.get(url);
            let blogDetails = response.data.blog;
            commit('setSingleBlog', blogDetails);
            return blogDetails;

        } catch (error) {
            return error;
        }
    },
};

const mutations = {
    setSingleBlog(state, blog) {
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
