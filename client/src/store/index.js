import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';

import _ from 'lodash';

Vue.use(Vuex);

export default new Vuex.Store({
  mutations: {
    resetState(state) {
      _.forOwn(modules, (value, key) => {
        state[key] = _.cloneDeep(value.state);
    });
    }
  },
  modules: {
    auth
  }
});
