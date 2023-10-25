import { createStore } from "vuex";
import auth from "./modules/auth";
import users from "./modules/users";

export default createStore({
  modules: {
    auth, users
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
