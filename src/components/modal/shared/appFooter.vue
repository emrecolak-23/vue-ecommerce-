<template>
  <div class="footer">
    <div class="d-flex justify-content-between align-items-center">
      <div class="logo-group">
        powered by
        <img class="company-logo" :src="getImgUrl('wears.png')" alt="" />
      </div>
      <div class="company-signature">© Wear’s All Rights Reserved</div>
    </div>
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
.logo-group {
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 7px;
  line-height: 100%;
  color: #000000;
}
.footer {
  position: absolute;
  bottom: 10px;
  right: 20px;
  left: 20px;
}
.company-signature {
  font-family: 'Poppins', sans-serif;
  font-style: italic;
  font-weight: 500;
  font-size: 8px;
  line-height: 110%;
  /* identical to box height, or 9px */
  display: flex;
  align-items: center;

  color: rgba(0, 0, 0, 0.58);
}

.company-logo {
  width: 120;
  height: 40px;
}
</style>
