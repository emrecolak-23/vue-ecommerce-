<template>
  <app-header
    :cart-product-amount="cart.length"
    @cart-clicked="toggleCart"
    @open-menu="cartOpen = false"
  />
  <app-cart
    v-if="cartOpen"
    v-click-outside="onClickOutsideCart"
    :cart="cart"
    @cart-item-deleted="removeFromCart(id)"
  />
  <div class="main-container">
    <app-product-carousel
      v-if="productSm"
      :slides="productSm.images"
      @product-carousel-click="openCarouselModal"
    />
    <app-product-info
      v-if="productSm"
      :product="productSm"
      @add-to-cart="addProductToCart"
    />
  </div>
  <app-product-card />
  <app-page-footer />
  <teleport to="#modals">
    <app-carousel-modal
      v-if="carouselModalOpen"
      :slides="productSm.images"
      :opened-image-index="imageClickedIndex"
      @close-product-carousel-modal="carouselModalOpen = !carouselModalOpen"
    />
  </teleport>
</template>

<script>
import appCarouselModal from './page/modals/appCarouselModal.vue';
import appHeader from './page/appHeader.vue';
import appCart from './page/appCart.vue';
import appProductCarousel from './page/appProductCarousel.vue';
import appProductInfo from './page/appProductInfo.vue';
import vClickOutside from 'click-outside-vue3';
import appProductCard from './page/appProductCard.vue';
import appPageFooter from './page/appPageFooter.vue';

import { useStore } from 'vuex';
import { computed, onBeforeMount } from '@vue/runtime-core';
import { useRoute } from 'vue-router';
export default {
  components: {
    appHeader,
    appCart,
    appProductCarousel,
    appProductInfo,
    appCarouselModal,
    appProductCard,
    appPageFooter,
  },

  data() {
    return {
      cartOpen: false,
      carouselModalOpen: false,
      imageClickedIndex: 0,
      cart: [],
      product: {
        id: 1,
        name: 'Cream Jacket',
        description:
          'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250.0,
        discount: 50,
        manufacturer: 'Wears',
        mainThumbnail: 'img-product-1-thumbnail.png',
        images: [
          {
            main: 'img-product-1.png',
            thumbnail: 'img-product-1-thumbnail.png',
          },
        ],
      },
    };
  },

  directives: {
    clickOutside: vClickOutside.directive,
  },
  methods: {
    toggleCart() {
      this.cartOpen = !this.cartOpen;
    },

    onClickOutsideCart() {
      this.cartOpen = false;
    },

    addProductToCart(product, quantity) {
      if (quantity < 1) return;

      const item = this.cart.findIndex((x) => x.productId === product.id);

      // Means this product is already in the cart
      if (item !== -1) {
        this.cart[item].quantity += quantity;
      } else {
        const cartItem = {
          productId: product.id,
          name: product.name,
          mainThumbnail: product.mainThumbnail,
          price: this.getRealPrice(product.price, product.discount),
          quantity: quantity,
        };

        this.cart = [...this.cart, cartItem];
      }
    },

    getRealPrice(price, discount) {
      return price * (discount / 100);
    },

    removeFromCart(id) {
      this.cart = this.cart.filter((item) => item.id !== id);
    },

    openCarouselModal(visibleIndex) {
      if (window.window.screen.width < 1024) return;

      this.imageClickedIndex = visibleIndex;
      this.carouselModalOpen = true;
    },
  },
  setup() {
    const store = useStore();
    const route = useRoute();

    onBeforeMount(() => {
      store.commit('product/setProduct', route.params.slug);
    });

    const productSm = computed(() => store.getters['product/_product']);

    return {
      productSm,
    };
  },
};
</script>

<style>
html {
  font-family: 'Kumbh Sans', sans-serif;
  font-size: var(--fs-400);
}

body {
  background-color: var(--color-white);
  color: var(--color-black);
}

.container {
  margin: 0rem 2rem;
}

.attribution {
  margin-top: 5rem;
  font-size: 11px;
  text-align: center;
}
.attribution a {
  color: hsl(228, 45%, 44%);
}

@media (min-width: 1024px) {
  .main-container {
    display: flex;
    margin-top: calc(var(--header-height) + 3.5rem);
    padding: 2rem 3rem;
    align-items: center;
    justify-content: center;
    gap: 3rem;
  }
}
</style>
