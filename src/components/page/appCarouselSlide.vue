<template>
  <img
    v-show="visibleIndex === index"
    class="carousel-slide"
    :src="
      dressedImage
        ? `https://dashboard.wears.com.tr/dressedImageSW/${dressedImage}`
        : getImgUrl(image)
    "
    alt="Product image"
  />
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
export default {
  props: {
    image: {
      type: String,
      default() {
        return '';
      },
    },
    index: {
      type: Number,
      default() {
        return 0;
      },
    },
    visibleIndex: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  methods: {
    getImgUrl(pic) {
      return `https://dashboard.wears.com.tr/imagesSW/${pic}`;
    },
  },
  setup() {
    const store = useStore();

    const dressedImage = computed(() => store.getters['models/_dressedModel']);

    return {
      dressedImage,
    };
  },
};
</script>

<style scoped>
@media (min-width: 1024px) {
  .carousel-slide {
    border-radius: var(--border-radius-size);
    cursor: pointer;
    margin-left: 0px;
  }
}
</style>
