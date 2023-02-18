<template>
  <div
    class="modal fade"
    id="modalView"
    tabindex="-1"
    aria-labelledby="modalView"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered modal-lg">
      <div class="modal-content">
        <div class="modal-body">
          <button
            type="close"
            class="btn-close"
            align="right"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <img :src="getImgUrl('modal-close.svg')" alt="" />
          </button>
          <slot></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      return require(`../assets/${pic}`);
    },
  },
};
</script>

<style scoped>
.modal {
  overflow-x: hidden;
  overflow-y: auto;
}

.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1050;
  display: none;
  height: 100%;
  overflow: hidden;
  outline: 0;
}

.modal-dialog {
  height: 100%;
  width: 520px;
  margin-top: 0 !important;
  margin-right: 0 !important;
}
.modal-content {
  background: white;
  /* Note: backdrop-filter has minimal browser support */
  min-width: 520px;
  max-width: 520px;
  min-height: 100%;
  max-height: 100%;
  border: 2px solid black;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}
.modal-body {
  overflow-y: auto;
  overflow-x: hidden;
  background: white;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
}

.btn-close {
  position: absolute;
  right: 10px;
  padding: 1em;
  border-radius: 50%;
  top: 15px;
  padding: 1%;
  opacity: 1;
  background: none;
  height: 28px;
  width: 28px;
  cursor: pointer;
}
.btn-close:focus {
  outline: none;
  box-shadow: none;
}
</style>
