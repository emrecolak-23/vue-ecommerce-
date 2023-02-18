<template>
  <div>
    <div class="d-flex justify-content-center mt-5">
      <img :src="getImgUrl('sm-entrance.png')" alt="" />
    </div>
    <div class="description text-center">
      Just tell us the <span class="description-emph">size</span> and
      <span class="description-emph">height</span> you’re shopping? for and
      we’ll find models that match.
    </div>
    <app-button style="margin-top: 25px" @click="next"
      >Start Find My Model</app-button
    >
  </div>
</template>

<script>
import appButton from '../shared/appButton.vue';
export default {
  components: { appButton },
  methods: {
    getImgUrl(pic) {
      return require(`../../../assets/${pic}`);
    },
    next() {
      this.$store.commit('setSection', 2);
    },
  },
};
</script>

<style scoped>
.description {
  height: 44px;
  width: 370px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  /* nWebPrimary */
  color: #010511;
  margin-left: auto;
  margin-right: auto;
  margin-top: 35px;
}
.description .description-emph {
  color: #024e6d;
  font-weight: 600;
}
</style>
