<template>
  <div class="elipsis-group">
    <div v-for="(d, index) in data" :key="index">
      <div class="lds-ellipsis" :class="index === activeSlide ? 'active' : ''">
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data', 'activeSlide'],
};
</script>

<style scoped>
.elipsis-group {
  display: flex;
  align-items: center;
  justify-content: center;
}
.lds-ellipsis {
  display: inline-block;
  position: relative;
  width: 15px;
  height: 50px;
}
.lds-ellipsis div {
  position: absolute;
  top: 20px;
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: white;
  border: 1px solid black;
}
.active div {
  background: black;
}
</style>
