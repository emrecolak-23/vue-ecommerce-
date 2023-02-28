<template>
  <div>
    <div class="row ms-1">
      <a
        data-bs-toggle="modal"
        data-bs-target="#modalView"
        href="#"
        class="btn-modal"
      >
        <span class="btn-text">Find My Model</span>
      </a>
    </div>
    <app-modal>
      <app-title />
      <app-entrance v-if="sectionNo == 1" />
      <app-measurement v-if="sectionNo == 2" />
      <app-model v-if="sectionNo == 3" />
      <app-footer />
    </app-modal>
  </div>
</template>

<script>
import appModal from './appModal.vue';
import appTitle from './modal/shared/appTitle.vue';
import appEntrance from './modal/entrance/appEntrance.vue';
import appFooter from './modal/shared/appFooter.vue';
import appMeasurement from './modal/measurement/appMesasurement.vue';
import appModel from './modal/selection/appModel.vue';

import { useStore } from 'vuex';
import { computed } from '@vue/runtime-core';
export default {
  components: {
    appModal,
    appEntrance,
    appFooter,
    appTitle,
    appMeasurement,
    appModel,
  },
  setup() {
    const store = useStore();

    const sectionNo = computed(() => store.getters['_sectionNo']);

    return {
      sectionNo,
    };
  },
};
</script>

<style scoped>
.btn-modal {
  width: 150px;
  height: 40px;
  font-weight: 200;
  color: black;
  background-color: none;
  padding: 0.5em 0;
  border: none;
  border-color: white;
  text-decoration: underline;
}
.btn-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 400px;
  font-size: 18px;
}

.btn-modal:hover {
  color: lightgrey;
  border: none;
}
.btn-model:active {
  border: none;
}
</style>
