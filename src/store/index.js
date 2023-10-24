import { createStore } from "vuex";
import register from "./modules/register";
import AllBlogs from "./modules/AllBlogs"
import SpecificBlog from "./modules/SpecificBlog"

export default createStore({
  modules: {
    register, AllBlogs, SpecificBlog
  },
});