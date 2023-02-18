<template>
  <div class="modals-container">
    <article class="carousel-modal product-carousel">
      <!-- Close button -->
      <button
        class="button-icon product-carousel__button--close"
        @click="$emit('closeProductCarouselModal')"
      >
        <img :src="getImgUrl('icon-close.svg')" alt="Next" />
      </button>
      <div class="product-carousel__container">
        <app-carousel-slide
          v-for="(slide, index) in slides"
          :key="index"
          :image="slide.main"
          :index="index"
          :visible-index="visibleIndex"
        />
        <!-- Previous button -->
        <button
          class="button-icon product-carousel__button product-carousel__button--previous"
          @click="previousSlide"
        >
          <img :src="getImgUrl('icon-previous.svg')" alt="Previous" />
        </button>
        <!-- Next button -->
        <button
          class="button-icon product-carousel__button product-carousel__button--next"
          @click="nextSlide"
        >
          <img :src="getImgUrl('icon-next.svg')" alt="Next" />
        </button>
      </div>
      <app-carousel-preview
        :slides="slides"
        :visible-index="visibleIndex"
        @preview-clicked="changeProductImage"
        :display="false"
      />
    </article>
  </div>
  <!-- <ProductCarousel class="carousel-modal" :slides="slides" /> -->
</template>

<script>
import appCarouselSlide from '@/components/page/appCarouselSlide.vue';
import appCarouselPreview from '@/components/page/appCarouselPreview.vue';

export default {
  components: { appCarouselSlide, appCarouselPreview },
  props: {
    slides: {
      type: Array,
      default() {
        return [];
      },
    },
    openedImageIndex: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  emits: ['closeProductCarouselModal'],
  data() {
    return { visibleIndex: 0 };
  },
  computed: {
    slidesLength() {
      return this.slides.length;
    },
  },
  mounted() {
    this.visibleIndex = this.openedImageIndex;
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
      return require(`../../../assets/images/${pic}`);
    },
  },
};
</script>

<style scoped>
.modals-container {
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 2000;
}

.carousel-modal {
  position: absolute;
  width: 28%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.product-carousel__container {
  position: relative;
}

.product-carousel__button {
  position: absolute;
  z-index: 1;
  width: 40px;
  height: 40px;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 25px;
  cursor: pointer;
}

.product-carousel__button--next {
  position: absolute;
  left: 100%;
}

.product-carousel__button--close {
  position: absolute;
  top: -8%;
  right: 0;
  cursor: pointer;
}

.product-carousel__button--close > img {
  width: 20px;
}

.product-carousel__button > img {
  width: 10px;
}
</style>
