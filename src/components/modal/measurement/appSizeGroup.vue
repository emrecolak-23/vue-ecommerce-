<template>
  <div class="section-size">
    <div class="size-result d-flex justify-content-between align-items-center">
      <div class="size-text">Choose your size: {{ size }}</div>
      <a class="size-link">Don't you know your size?</a>
    </div>
    <div class="size-buttons row">
      <div class="col-md-4 buttons" v-for="(s, index) in sizes" :key="index">
        <app-button
          @click="selectSize(s)"
          :class="size === s ? 'active' : ''"
          >{{ s }}</app-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import appButton from '../shared/appButton.vue';
import models from '@/constants/models';
export default {
  emits: ['size'],
  components: { appButton },
  setup(_, { emit }) {
    const sizes = Object.keys(models);
    const size = ref(null);

    function selectSize(selectedSize) {
      size.value = selectedSize;
      emit('size', selectedSize);
    }

    return {
      sizes,
      selectSize,
      size,
    };
  },
};
</script>

<style scoped>
.size-buttons {
  margin-top: 15px;
}
.section-size {
  margin-top: 47px;
}

.size-link {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 12px;
  text-align: center;
  text-decoration-line: underline;

  /* nWebPrimary */
  color: #010511;
  cursor: pointer;
}

.buttons {
  margin-bottom: 20px;
}
</style>
