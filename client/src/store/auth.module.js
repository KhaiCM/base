import AuthService from '../services/auth.service';

const userInStorage = JSON.parse(localStorage.getItem('user'));

export default {
  namespaced: true,
  state: () => ({
    token: '',
    errors: null,
  }),
  mutations: {
     updateToken(state, token) {
      state.token = token;

    },
    loginFailure(state) {
      state.loggedIn = false;
      state.user = null;
    },
    logout(state) {
      state.loggedIn = false;
      state.user = null;
    },
    setLoggedIn(state, payload) {
      state.loggedIn = payload;
    },
    setError(state, error) {
      state.errors = error;
    }
  },
  actions: {
    login({commit}, user) {
      return AuthService.login(user)
      .then(user => {
        commit('updateToken', user);
        return Promise.resolve(user);
      })
      .catch(({ response }) => {
        commit('setError', response)
      })
    },
    logout({commit}) {
      AuthService.logout();
      commit('logout');
    },
    register({commit}, user) {
      return AuthService.register(user).then(
        response => {
          commit('registerSuccess');
          return Promise.resolve(response.data);
        },
        error => {
          commit('registerFailure');
          return Promise.reject(error);
        }
      );
    }
  },
    getters: {},
};
