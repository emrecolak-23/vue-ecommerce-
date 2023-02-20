<template>
  <div class="quantity-input">
    <button
      class="button-icon padding-x--small padding-y--small"
      @click="$emit('removeQuantity')"
    >
      <img :src="getImgUrl('icon-minus.svg')" alt="Minus" />
    </button>

    <p>{{ quantity }}</p>
    <button
      class="button-icon padding-x--small padding-y--small"
      @click="$emit('addQuantity')"
    >
      <img :src="getImgUrl('icon-plus.svg')" alt="Plus" />
    </button>
  </div>
</template>

<script>
export default {
  props: {
    quantity: {
      type: Number,
      default() {
        return 0;
      },
    },
  },
  emits: ['addQuantity', 'removeQuantity'],
  methods: {
    getImgUrl(pic) {
      return `https://dashboard.wears.com.tr/imagesSW/${pic}`;
    },
  },
};
</script>

<style scoped>
.quantity-input {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 3.5rem;
  border-radius: var(--border-radius-size);
  border-color: var(--color-black);
  width: 100%;
}

@media (min-width: 1024px) {
  .quantity-input {
    width: 40%;
  }
}
</style>
