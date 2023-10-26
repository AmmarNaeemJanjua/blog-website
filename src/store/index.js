import { createStore } from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";
import mblogs from "./modules/mblogs";

export default createStore({
  modules: {
    auth, users, mblogs,
  },
  state() {
    return {
      showLoading: false,
    };
  },
  mutations: {
    SPINNER_MUTATION(state, payload){
      state.showLoading = payload;
    }
  }
});
