import { GetterTree, MutationTree, ActionTree, Module } from 'vuex';

export interface Form1State {
  email: string;
  name: string;
  food: string;
  checked: any[];
}

export const state: Form1State = {
  email: 'jesper@mail.com',
  name: 'jesper loose',
  food: 'Beans',
  checked: [],
};

const getters: GetterTree<Form1State, any> = {
  formUpdate: (state) => {
    return state;
  },
};

const mutations: MutationTree<Form1State> = {
  updateForm1(state, payload) {
    state.email = payload.email;
    state.name = payload.name;
    state.food = payload.food;
    state.checked = payload.checked;
  },
};

const actions: ActionTree<Form1State, any> = {

};

export const form1: Module<Form1State, any> = {
  state,
  getters,
  actions,
  mutations,
};
