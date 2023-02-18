<template>
  <div v-if="alertData.show">
    <div :class="alertClass">
      <div class="icon hidden-xs me-1">
        <i class="fa fa-info-circle"></i>
      </div>
      <strong class="me-2">Info</strong>
      {{ alertData.text }}
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { useStore } from 'vuex';

import className from 'classnames';
export default {
  setup() {
    const store = useStore();
    const alertData = computed(() => store.getters['alert/_alertData']);
    const alertClass = computed(() => {
      return className('popup p-1 d-flex align-items-center', {
        'alert alert-danger alert-dismissible fade show':
          alertData.value.alertClass === 'danger',
        'alert alert-success alert-dismissible fade show':
          alertData.value.alertClass === 'success',
      });
    });

    return {
      alertData,
      alertClass,
    };
  },
};
</script>

<style>
.popup {
  margin-bottom: 10px;
  height: 30px;
  width: 50%;
  font-size: 14px;
}
</style>
