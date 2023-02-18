<template>
  <article class="product-info container">
    <h3 class="product-info__producer-name">{{ product.manufacturer }}</h3>
    <h1 class="product-info__name">{{ product.name }}</h1>
    <div class="product-info__original">
      <span class="product-info_original_description">
        <img :src="getImgUrl('image_180.png')" alt="" />
        Original Product
      </span>
      <p class="product-info_original_description">
        <img :src="getImgUrl('image_181.png')" alt="" />
        Free Shipping more than 100$
      </p>
    </div>

    <div class="product-info__price-container">
      <div class="product-info__current-price-container">
        <h2 class="product-info__current-price">${{ productRealPrice }}</h2>
        <div class="product-info__discount">{{ product.discount }}%</div>
      </div>

      <h4 class="product-info__old-price">${{ product.price }}</h4>
    </div>
    <app-modal-button />
    <div class="product-info__buttons-container">
      <app-quantity-input
        :quantity="quantity"
        @add-quantity="addQuantity"
        @remove-quantity="removeQuantity"
      />
      <app-button
        class="app-button--orange-box-shadow"
        icon="icon-cart.svg"
        alt="Cart"
        @click="addToCart"
        >Add to Cart</app-button
      >
    </div>
    <p class="product-info__description">
      {{ product.description }}
    </p>
  </article>
</template>

<script>
import appQuantityInput from '@/components/page/appQuantityInput';
import appButton from '@/components/page/appButton';
import appModalButton from '../appModalButton.vue';

export default {
  components: { appQuantityInput, appButton, appModalButton },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  emits: ['addToCart'],
  data() {
    return {
      quantity: 0,
      sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
      activeSize: 0,
    };
  },
  computed: {
    productRealPrice() {
      return this.product.price * (this.product.discount / 100);
    },
  },
  methods: {
    addQuantity() {
      this.quantity++;
    },
    removeQuantity() {
      if (this.quantity >= 1) this.quantity--;
    },
    addToCart() {
      console.log(this.product);
      this.$emit('addToCart', this.product, this.quantity);

      this.quantity = 0;
    },
    getImgUrl(pic) {
      return require(`../../assets/images/${pic}`);
    },
  },
};
</script>

<style scoped>
.btn-product {
  background: black;
  color: white;
  border-radius: 5px;
  font-family: 'Poppins', sans-serif;
  font-size: 12px;
  font-weight: 500;
  width: 200px;
}

.btn-product:hover {
  background: lightgray;
  color: black;
}
.btn-product:focus {
  outline: none;
  box-shadow: none;
}
.btn-product:active {
  outline: none;
  box-shadow: none;
}
ul {
  display: flex;
  margin: 0;
  padding: 0;
}
.size-active {
  border: 1px solid black;
}
ul li {
  list-style: none;
  margin: 5px 5px 0;
  font-size: 10px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  color: var(--color-black);
  cursor: pointer;
}
ul li:first-child {
  margin-left: 0;
}
.product-info_original_description {
  color: var(--color-primary-darkgrey);
  line-height: 1rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  width: 40%;
}
.product-info__original {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 2rem;
  background-color: var(--color-white);
  border-radius: var(--border-radius-size);
  width: 100%;
}
.product-info {
  display: grid;
  gap: 1rem;
  margin-top: 2rem;
}

.product-info__producer-name {
  font-size: var(--fs-300);
  font-weight: 300;
  color: var(--color-primary-grey);
}

.product-info__name {
  font-size: var(--fs-lg);
  font-weight: 300;
}

.product-info__description {
  color: var(--color-dark-grayish-blue);
  line-height: 1.5rem;
}

.product-info__price-container {
  display: flex;
  max-width: 100%;
  justify-content: space-between;
  align-items: center;
}

.product-info__current-price-container {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.product-info__current-price {
  font-size: var(--fs-500);
  font-weight: 300;
}

.product-info__discount {
  color: var(--color-primary-orange);
  padding: 0.3rem 0.6rem;
  border-radius: var(--border-radius-size);
  font-weight: 300;
  background-color: var(--color-primary-pale-orange);
}

.product-info__old-price {
  color: var(--color-grayish-blue);
  font-weight: 300;
  text-decoration: line-through;
}

.product-info__buttons-container {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .product-info {
    max-width: 100%;
  }

  .product-info__price-container {
    flex-direction: column;
    align-items: flex-start;
  }
  .product-info__size-container {
    flex-direction: column;
    align-items: flex-start;
  }

  .product-info__buttons-container {
    flex-direction: row;
    gap: 1.3rem;
  }
}
</style>
