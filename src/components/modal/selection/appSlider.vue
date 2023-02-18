<template>
  <div
    style="margin-top: 30px"
    class="d-flex justify-content-center align-items-center"
  >
    <i class="prev-btn fa fa-angle-left fa-3x" @click="handleSlidePrev"></i>
    <swiper
      class="my-slider"
      :spaceBetween="50"
      :modules="modules"
      :slides-per-view="1"
      :centered-slides="true"
      :loop="true"
      :navigation="navigation"
      @swiper="onSwiper"
      @slideChange="onSlideChange"
    >
      <swiper-slide v-for="(model, index) in models" :key="index">
        <img class="model-image" :src="getImgUrl(model.img)" />
      </swiper-slide>
    </swiper>
    <i class="next-btn fa fa-angle-right fa-3x" @click="handleSlideNext"></i>
  </div>
  <app-pagination :data="models" :activeSlide="activeSlide" />
  <div
    class="model-description d-flex justify-content-center align-items-center"
  >
    <span class="model-result">{{ modelValues.height }}cm </span> - usually
    wear’s:
    <span class="model-result">{{ modelValues.size }}</span>
  </div>
  <div class="seperator"></div>
</template>

<script>
import appPagination from '../shared/appPagination.vue';
// Import Swiper Vue.js components
import { Navigation, Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { computed, onMounted, ref } from 'vue';
import { useStore } from 'vuex';
export default {
  emits: ['model'],
  components: {
    Swiper,
    SwiperSlide,
    appPagination,
  },
  data() {
    return {
      swiper: null,
    };
  },
  methods: {
    onSwiper(swiper) {
      this.swiper = swiper;
    },
    handleSlideNext() {
      this.swiper.slideNext();
    },
    handleSlidePrev() {
      this.swiper.slidePrev();
    },
    getImgUrl(pic) {
      return require(`../../../assets/models/${pic}`);
    },
  },

  setup(_, { emit }) {
    const store = useStore();
    const activeSlide = ref(0);

    const models = computed(() => store.getters['models/_model']);
    const modelValues = computed(() => store.getters['_modelValues']);

    onMounted(() => {
      emit('model', models.value[activeSlide.value]);
    });

    const onSlideChange = (e) => {
      activeSlide.value = e.realIndex;
      emit('model', models.value[activeSlide.value]);
    };

    return {
      onSlideChange,
      modules: [Navigation, Pagination, A11y],
      pagination: {
        clickable: true,
      },
      navigation: {
        nextEl: '.my-slider .next-btn',
        prevEl: '.my-slider .prev-btn',
      },
      activeSlide,
      models,
      modelValues,
    };
  },
};
</script>

<style>
.prev-btn,
.next-btn {
  cursor: pointer;
}

.model-description {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  /* or 16px */
  display: flex;
  align-items: center;
  text-align: center;

  color: #000000;
}

.model-result {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 115%;
  /* or 16px */
  display: flex;
  align-items: center;
  text-align: center;

  /* nWeb2Primary */
  color: #024e6d;
}
.seperator {
  width: 110px;
  height: 1px;

  /* nWebPrimary */
  background: #010511;
  margin-top: 4px;
  margin-left: auto;
  margin-right: auto;
}
</style>
