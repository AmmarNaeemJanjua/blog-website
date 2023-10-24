import { createStore } from "vuex";
import auth from "./modules/auth";

export default createStore({
  modules: {
    auth,
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
