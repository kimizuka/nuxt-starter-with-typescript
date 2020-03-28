import { ActionTree, MutationTree, GetterTree } from 'vuex';

type State = {
  count: number;
};

export const state = (): State => ({
  count: 0
});

export const mutationTypes = {
  COUNT_UP: 'COUNT_UP',
};

export const mutations: MutationTree<State> = {
  [mutationTypes.COUNT_UP](state: any) {
    ++state.count;
  }
};

export const getters: GetterTree<State, {}> = {
  count: (state: any) => {
    return state.count;
  }
};

export const actions: ActionTree<State, {}> = {
  async countup({ commit }: any) {
    try {
      commit(mutationTypes.COUNT_UP);
    } catch (err) {
      throw err;
    }
  }
};