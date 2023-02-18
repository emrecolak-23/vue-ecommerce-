export default {
  namespaced: true,
  state: {
    alertData: {
      show: false,
      text: '',
      alertClass: '',
    },
  },
  getters: {
    _alertData: (state) => state.alertData,
  },
  mutations: {
    showAlert(state, alertInfo) {
      state.alertData = {
        show: true,
        text: alertInfo.text,
        alertClass: alertInfo.alertClass,
      };
    },
    resetAlert(state) {
      state.alertData = {
        show: false,
        text: '',
        alertClass: '',
      };
    },
  },
};
