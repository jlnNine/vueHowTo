import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { fetchJson } from '../../utils/api/testCall';

export interface JsonInfoState {
  json: string;
  loading: boolean;
  error: boolean;
}

const state: JsonInfoState = {
  json : '',
  loading : false,
  error : false,
};

const getters: GetterTree<JsonInfoState, any> = {
  jsonString: (state) => {
    return state.json;
  },
  isLoading: (state) => {
    return state.loading;
  },
};

const mutations: MutationTree<JsonInfoState> = {
  jsonLoaded(state, payload: string) {
    state.loading = false;
    state.json = payload;
    state.error = false;
  },
  jsonError(state) {
    state.loading = false;
    state.error = true;
  },
  jsonLoading(state) {
    state.loading = true;
  },
};

const actions: ActionTree<JsonInfoState, any> = {
  async fetchData({ commit }) {
    commit('jsonLoading');
    try {
      commit('jsonLoaded', await fetchJson());
    } catch (err) {
      commit('jsonError');
    }
  },
};

export const jsonInfo: Module<JsonInfoState, any> = {
  state,
  getters,
  actions,
  mutations,
};
