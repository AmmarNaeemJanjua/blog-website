import { createStore } from "vuex";
import register from "./modules/register";

export default createStore({
  modules: {
    register,
  },
});