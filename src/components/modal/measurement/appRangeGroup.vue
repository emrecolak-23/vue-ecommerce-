<template>
  <div class="section-range">
    <div class="size-text d-flex justfiy-content-start">
      Choose your height: {{ height }} cm
    </div>
    <app-range
      style="margin-top: 50px"
      v-model.number="height"
      :ranges="[140, 200]"
      metric="cm"
    />
  </div>
</template>

<script>
import appRange from '../shared/appRange.vue';
import { ref, watch } from 'vue';
export default {
  emits: ['height'],
  components: { appRange },
  setup(_, { emit }) {
    const height = ref(170);

    watch(height, () => {
      emit('height', height.value);
    });

    return {
      height,
    };
  },
};
</script>

<style></style>
