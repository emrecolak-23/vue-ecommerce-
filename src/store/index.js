import { createStore } from 'vuex';

import models from './modules/models';
import alert from './modules/alert';
import product from './modules/product';

export default createStore({
  state: {
    sectionNo: 1,
    modelValues: {
      height: null,
      size: null,
    },
  },
  getters: {
    _sectionNo: (state) => state.sectionNo,
    _modelValues: (state) => state.modelValues,
  },
  mutations: {
    setSection(state, data) {
      state.sectionNo = data;
    },
    setModelValues(state, data) {
      state.modelValues = data;
    },
  },
  actions: {},
  modules: {
    models,
    alert,
    product,
  },
});
