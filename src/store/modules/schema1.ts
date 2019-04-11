import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

export interface Schema1 {
  json: string;
  loading: boolean;
  error: boolean;
}

const state: Schema1 = {
  json : '',
  loading : false,
  error : false,
};

const getters: GetterTree<Schema1, any> = {

};

const mutations: MutationTree<Schema1> = {

};

const actions: ActionTree<Schema1, any> = {

};

export const profile: Module<Schema1, any> = {
  state,
  getters,
  actions,
  mutations,
};
