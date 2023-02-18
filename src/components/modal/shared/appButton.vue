<template>
  <button class="btn btn-sm btn-forward"><slot></slot></button>
</template>

<style scoped>
.btn-forward {
  width: 100%;
  height: 40px;
  color: black;
  background-color: white;
  border-radius: 1px;
  align-items: center;
  padding: 5px;
  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 110%;
  vertical-align: middle;
  border-color: black;
  /* or 18px */
}
.active {
  color: white;
  background-color: black;
}
.btn-forward:hover {
  background-color: black;
  color: white;
}
.btn-forward:focus {
  outline: none;
  box-shadow: none;
}
</style>
