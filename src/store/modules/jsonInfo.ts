import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    jsonString: null,
  },
  getters: {
    jsonRetrived: state => !!state.jsonString
  },
  mutations: {
    setJson: (state, json) => {
      state.jsonString = json;
    }
  },
  actions: {
    
  }
  
});
