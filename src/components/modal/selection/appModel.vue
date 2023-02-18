<template>
  <div>
    <app-slider @model="handleModel($event)" />
    <app-button
      style="margin-top: 25px"
      align="right"
      data-bs-dismiss="modal"
      @click="selectModel"
      >See On Your Model</app-button
    >
    <div class="edit-link" @click="editModel">Edit Your Model</div>
  </div>
</template>

<script>
import appSlider from './appSlider.vue';
import appButton from '../shared/appButton.vue';

import { useStore } from 'vuex';
import { computed, ref } from 'vue';
import dressedModels from '@/constants/dressedModels';
export default {
  components: { appSlider, appButton },
  setup() {
    const store = useStore();
    const model = ref();

    const product = computed(() => store.getters['product/_product']);

    function handleModel(m) {
      model.value = m;
    }

    function selectModel() {
      dressedModels.forEach((dressModel) => {
        if (dressModel.name == model.value.name) {
          dressModel.dressed.forEach((dress) => {
            if (dress.productId === product.value.id) {
              store.commit('models/setDressedModel', dress.img);
            }
          });
        }
      });
    }

    function editModel() {
      store.commit('setSection', 2);
    }

    return {
      handleModel,
      selectModel,
      editModel,
    };
  },
};
</script>

<style scoped>
.edit-link {
  margin-top: 5px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 12px;
  text-decoration-line: underline;

  /* nWebPrimary */
  color: #010511;
  cursor: pointer;
}
</style>
