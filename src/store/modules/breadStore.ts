import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';
import { uploadFile } from '../../utils/api/uploadFile';

export interface UploadState {
    menuNames: string[];
    status: number;
}

const state: UploadState = {
    menuNames : [],
    status : 0,
};

const getters: GetterTree<UploadState, any> = {
    currentPage: (state) => {
        return state.status;
    },
};

const mutations: MutationTree<UploadState> = {
    initBreadStore(state, payload: string[]) {
        state.menuNames = payload;
        state.status = 0;
    },
    nextPage(state) {
        state.status ++;
    },
};

const actions: ActionTree<UploadState, any> = {

};

export const breadStore: Module<UploadState, any> = {
  state,
  getters,
  actions,
  mutations,
};
