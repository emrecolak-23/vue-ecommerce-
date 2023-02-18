export default {
  namespaced: true,
  state: {
    model: {},
    dressedModel: null,
  },
  getters: {
    _models: (state) => state.models,
    _model: (state) => state.model,
    _dressedModel: (state) => state.dressedModel,
  },
  mutations: {
    setModel(state, data) {
      state.model = data;
    },
    setDressedModel(state, data) {
      state.dressedModel = data;
    },
  },
  actions: {},
};
