import Vue from 'vue';
import Vuex from 'vuex';
import { jsonInfo } from './modules/jsonInfo';
import { form1 } from './modules/form1';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    jsonInfo,
    form1,
  },
});
