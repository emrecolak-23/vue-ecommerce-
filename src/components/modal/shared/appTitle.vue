<template>
  <div class="d-flex align-items-center justify-content-center group-1">
    <div class="line"></div>
    <img :src="getImgUrl('modal-title-icon.svg')" alt="" />
    <h1 class="title">Find my model</h1>
    <div class="line"></div>
  </div>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      return require(`../../../assets/${pic}`);
    },
  },
};
</script>

<style scoped>
.title {
  font-family: 'Poppins', sans-serif !important;
  font-style: normal;
  font-weight: 600;
  font-size: 29px;
  line-height: 36px;
  text-align: center;

  display: flex;
  align-items: center;
  justify-content: center;
  /* nWebPrimary */
  color: #010511;
  margin-left: 5px;
}
.group-1 {
  height: 28px;
  margin-top: 3px;
  margin-right: 20px;
}
.line {
  height: 2px;
  background-color: #010511;
  width: 82px;
  margin-right: 5px;
  margin-left: 5px;
}
</style>
