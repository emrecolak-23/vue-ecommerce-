<template>
  <div>
    <div class="section-title">Choose your measurements</div>
    <div class="section-description">
      Enter the size you normally wear and your current height and start seeing
      the products on the models that looks the most like you.
    </div>
    <app-size-group @size="selectSize($event)" />
    <app-alert />
    <app-range-group @height="selectHeight($event)" />
    <app-button style="margin-top: 25px" @click="next"
      >See Models Like You</app-button
    >
  </div>
</template>

<script>
import appButton from '../shared/appButton.vue';
import appSizeGroup from './appSizeGroup.vue';
import appRangeGroup from './appRangeGroup.vue';
import appAlert from '../shared/appAlert.vue';
import { computed, ref } from 'vue';
import { useStore } from 'vuex';

import models from '@/constants/models';
export default {
  components: {
    appButton,
    appSizeGroup,
    appRangeGroup,
    appAlert,
  },
  setup() {
    const store = useStore();

    const size = ref(null);
    const height = ref(170);

    const alertShow = computed(() => store.getters['alert/_alertData'].show);

    function selectSize(selectedSize) {
      if (alertShow.value) {
        store.commit('alert/resetAlert');
      }
      size.value = selectedSize;
    }

    function selectHeight(selectedHeight) {
      height.value = selectedHeight;
    }

    function next() {
      if (!size.value) {
        store.commit('alert/showAlert', {
          text: 'You must choose size',
          alertClass: 'danger',
        });
        return;
      }
      store.commit('setModelValues', {
        height: height.value,
        size: size.value,
      });

      const filteredModels = models[size.value].filter((model) => {
        if (
          height.value >= model.height.min &&
          height.value <= model.height.max
        ) {
          return model;
        }
      });

      store.commit('models/setModel', filteredModels);
      store.commit('setSection', 3);
    }

    return {
      selectSize,
      selectHeight,
      next,
    };
  },
};
</script>

<style scoped>
.section-range {
  margin-top: 55px;
}

.section-title {
  width: 300px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 27px;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  margin-top: 45px;
}
.section-description {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  margin-top: 35px;
}
</style>
