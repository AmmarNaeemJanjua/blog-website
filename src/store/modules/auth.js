import { REGISTER, LOGIN } from "@/constants/api";

const state = {
  user: {
    name: '',
    email: '',
    token: '',
    user_id: '',
  }
};

const getters = {
};

const actions = {
  // Using context because payload received in SIGNUP_ACTION is an object that contains not only the user data but also other properties related to the Vuex store.
  async SIGNUP_ACTION(context, userData) {
    let postData = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
    };
    let response = "";
    try {
      response = await axios.post(REGISTER, postData);
    } catch (err) {
      console.log(err.response);
    }
  },

  async LOGIN_ACTION(context, payload) {
    let postData = {
      email: payload.email,
      password: payload.password,
    };
    let response = "";
    try {
      response = await axios.post(LOGIN, postData);
    } catch (err) {
      console.log(err.response);
    }

    if (response.status === 200){
      context.commit('SET_USER_DATA', {
        name: response.data.name,
        email: response.data.email,
        token: response.data.token,
        user_id: response.data.user_id,
      })
    }
  },

  async LOGOUT_ACTION(context){
    context.commit('SET_USER_DATA', {
      name: null,
      email: null,
      token: null,
      user_id: null,
    })
  }
};

const mutations = {
  SET_USER_DATA(state, payload){
    state.user.name = payload.name;
    state.user.email = payload.email;
    state.user.token = payload.token;
    state.user.user_id = payload.user_id;
  }
};

export default {
  // namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
