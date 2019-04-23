import Vue from 'vue';
import Vuex from 'vuex';
import { fileUpload } from './modules/fileUpload';
import { breadStore } from './modules/breadStore';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    fileUpload,
    breadStore,
  },
});
