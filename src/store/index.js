import { createStore } from "vuex";
import register from "./modules/register";
import AllBlogs from "./modules/AllBlogs"

export default createStore({
  modules: {
    register, AllBlogs
  },
});