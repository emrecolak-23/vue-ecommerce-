<template>
  <app-carousel-preview
    :slides="slides"
    :visible-index="visibleIndex"
    @preview-clicked="changeProductImage"
  />
  <article class="product-carousel">
    <app-carousel-slide
      v-for="(slide, index) in slides"
      :key="index"
      :image="slide.main"
      :index="index"
      :visible-index="visibleIndex"
      @click="$emit('productCarouselClick', visibleIndex)"
    />

    <!-- Mobile button -->
    <button
      class="button-icon product-carousel__button product-carousel__button--previous"
      @click="previousSlide"
    >
      <img :src="getImgUrl('icon-previous.svg')" alt="Previous" />
    </button>

    <!-- Mobile button -->
    <button
      class="button-icon product-carousel__button product-carousel__button--next"
      @click="nextSlide"
    >
      <img :src="getImgUrl('icon-next.svg')" alt="Next" />
    </button>
  </article>
</template>

<script>
import appCarouselSlide from './appCarouselSlide.vue';
import appCarouselPreview from './appCarouselPreview.vue';

export default {
  components: { appCarouselSlide, appCarouselPreview },
  props: {
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  emits: ['productCarouselClick'],
  data() {
    return { visibleIndex: 0 };
  },
  computed: {
    slidesLength() {
      return this.slides.length;
    },
  },
  methods: {
    previousSlide() {
      this.visibleIndex === 0
        ? (this.visibleIndex = this.slidesLength - 1)
        : this.visibleIndex--;
    },
    nextSlide() {
      this.visibleIndex === this.slidesLength - 1
        ? (this.visibleIndex = 0)
        : this.visibleIndex++;
    },
    changeProductImage(previewIndex) {
      this.visibleIndex = previewIndex;
    },
    getImgUrl(pic) {
      return require(`../../assets/images/${pic}`);
    },
  },
};
</script>

<style scoped>
.product-carousel {
  display: relative;
}

.product-carousel__button {
  position: absolute;
  top: 200px;
  z-index: 1;
  width: 40px;
  height: 40px;
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pointer;
}

.product-carousel__button--previous {
  left: 1rem;
}

.product-carousel__button--next {
  right: 1rem;
}

.button-icon > img {
  width: 8px;
}

@media (min-width: 1024px) {
  .product-carousel {
    max-width: 40%;
  }

  .product-carousel__button--previous {
    display: none;
  }

  .product-carousel__button--next {
    display: none;
  }
}
</style>
