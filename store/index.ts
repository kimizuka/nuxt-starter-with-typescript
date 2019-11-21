export const state = () => ({
  count: 0
});

export const mutationTypes = {
  COUNT_UP: 'COUNT_UP',
};

export const mutations = {
  [mutationTypes.COUNT_UP](state: any) {
    ++state.count;
  }
};

export const getters = {
  count: (state: any) => {
    return state.count;
  }
};

export const actions = {
  async countup({ commit }: any) {
    try {
      commit(mutationTypes.COUNT_UP);
    } catch (err) {
      throw err;
    }
  }
};