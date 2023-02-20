<template>
  <div :class="display ? 'carousel-preview' : 'carousel-preview-flex'">
    <app-preview-image
      v-for="(slide, index) in slides"
      :key="index"
      :src="getImgUrl(slide.thumbnail)"
      :index="index"
      :visible-index="visibleIndex"
      @click="$emit('previewClicked', index)"
    />
  </div>
</template>

<script>
import appPreviewImage from './appPreviewImage.vue';

export default {
  components: { appPreviewImage },
  props: {
    display: {
      type: Boolean,
      default() {
        return true;
      },
    },
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
    visibleIndex: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  emits: ['previewClicked'],
  methods: {
    getImgUrl(pic) {
      return `https://dashboard.wears.com.tr/imagesSW/${pic}`;
    },
  },
};
</script>

<style scoped>
.carousel-preview {
  display: none;
}

@media (min-width: 1024px) {
  .carousel-preview {
    display: grid;
    gap: 0.5rem;
    margin-top: 2rem;
  }
  .carousel-preview-flex {
    display: flex;
    gap: 0.5rem;
    margin-top: 2rem;
  }
}
</style>
