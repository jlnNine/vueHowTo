import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { uploadFile } from '../../utils/api/uploadFile';

export interface UploadState {
  calenderYear: string;
  isLoading: boolean;
  file: any;
  error: boolean;
}

const state: UploadState = {
  calenderYear : '',
  isLoading : false,
  file : null,
  error: false,
};

const getters: GetterTree<UploadState, any> = {
};

const mutations: MutationTree<UploadState> = {
  jsonLoaded(state, payload: string) {
    state.isLoading = false;
  },
  jsonError(state) {
    state.isLoading = false;
  },
  jsonLoading(state) {
    state.isLoading = true;
  },
  updateFile(state, payload: any) {
    state.file = payload;
  },
  updateYear(state, payload: any) {
    state.calenderYear = payload;
  },
};

const actions: ActionTree<UploadState, any> = {
  async uploadFileData({ commit } ) {
    commit('jsonLoading');
    try {
      await uploadFile(state.calenderYear, state.file);
      commit('jsonLoaded');
      commit('nextPage');
    } catch (err) {
      commit('jsonError');
    }
  },
};

export const fileUpload: Module<UploadState, any> = {
  state,
  getters,
  actions,
  mutations,
};
