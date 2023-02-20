<template>
  <div class="row text-center mt-5">
    <h1 class="section-info__name">Other Products</h1>
  </div>
  <div class="row mt-3 ms-5 me-5 mb-5">
    <div
      v-for="(product, index) in products1"
      :key="index"
      class="col-md-3 col-sm-6"
    >
      <div class="product-grid">
        <div class="product-image">
          <a @click="changeProduct(product.slug)" class="image">
            <img class="img-1" :src="getImgUrl(product.images[0].main)" />
            <img class="img-2" :src="getImgUrl(product.images[0].main)" />
          </a>
          <ul class="product-links">
            <li>
              <a href="#"><i class="fa fa-heart"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-random"></i></a>
            </li>
            <li>
              <a href="#"><i class="fa fa-shopping-cart"></i></a>
            </li>
          </ul>
          <a href="#" class="product-view"><i class="fa fa-search"></i></a>
        </div>
        <div class="product-content">
          <ul class="rating">
            <li class="disable">(1 reviews)</li>
          </ul>
          <h3 class="title">
            <a href="#">{{ product.name }}</a>
          </h3>
          <div class="price">${{ product.price }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';
export default {
  data() {
    return {
      products: [
        {
          id: 2,
          name: 'Brotherhood T-shirt',
          description:
            'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
          price: 65.0,
          discount: 50,
          manufacturer: 'Linçsquad',
          mainThumbnail: 'image-product-1-thumbnail.jpg',
          images: [
            {
              main: 'img-1.jpg',
              thumbnail: 'image-product-1-thumbnail.jpg',
            },
            {
              main: 'image-product-2.jpg',
              thumbnail: 'image-product-2-thumbnail.jpg',
            },
            {
              main: 'image-product-3.jpg',
              thumbnail: 'image-product-3-thumbnail.jpg',
            },
            {
              main: 'image-product-4.jpg',
              thumbnail: 'image-product-4-thumbnail.jpg',
            },
          ],
        },
        {
          id: 3,
          name: 'Get Lost In Istanbul T-Shirt',
          description:
            'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
          price: 30.0,
          discount: 50,
          manufacturer: 'Mugo',
          mainThumbnail: 'image-product-1-thumbnail.jpg',
          images: [
            {
              main: 'img-2.jpg',
              thumbnail: 'image-product-1-thumbnail.jpg',
            },
            {
              main: 'image-product-2.jpg',
              thumbnail: 'image-product-2-thumbnail.jpg',
            },
            {
              main: 'image-product-3.jpg',
              thumbnail: 'image-product-3-thumbnail.jpg',
            },
            {
              main: 'image-product-4.jpg',
              thumbnail: 'image-product-4-thumbnail.jpg',
            },
          ],
        },
      ],
    };
  },
  methods: {
    getImgUrl(pic) {
      return `https://dashboard.wears.com.tr/imagesSW/${pic}`;
    },
  },
  setup() {
    const router = useRouter();
    const store = useStore();

    const products1 = computed(() => store.getters['product/_otherProducts']);

    async function changeProduct(path) {
      store.commit('product/setProduct', path);
      store.commit('models/setDressedModel', null);
      router.push({ path: `/${path}` });
      window.scrollTo(0, 0);
    }

    return {
      products1,
      changeProduct,
    };
  },
};
</script>

<style scoped>
.section-info__name {
  font-size: var(--fs-lg);
  font-weight: 300;
}
.product-grid {
  font-family: 'Poppins', sans-serif;
}
.product-grid .product-image {
  overflow: hidden;
  position: relative;
  z-index: 1;
}
.product-grid .product-image a.image {
  display: block;
}
.product-grid .product-image img {
  width: 100%;
  height: auto;
}
.product-grid .product-image .img-1 {
  transition: all 0.3s ease 0s;
}
.product-grid:hover .product-image .img-1 {
  opacity: 0;
}
.product-grid .product-image .img-2 {
  width: 100%;
  height: 100%;
  opacity: 0;
  backface-visibility: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  transition: all 0.3s ease 0s;
}
.product-grid:hover .product-image .img-2 {
  opacity: 1;
}
.product-grid .product-hot-label,
.product-grid .product-discount-label {
  color: #fff;
  background: var(--color-primary-darkgrey);
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  padding: 3px 10px;
  position: absolute;
  top: 10px;
  left: 10px;
}
.product-grid .product-discount-label {
  background: #ff3939;
  left: auto;
  right: 10px;
}
.product-grid .product-view {
  color: #fff;
  background: #000;
  font-size: 16px;
  text-align: right;
  line-height: 50px;
  width: 60px;
  height: 60px;
  padding: 0 16px 0 0;
  border-radius: 50px;
  opacity: 0;
  transform: scale(0);
  position: absolute;
  bottom: -40px;
  left: -40px;
  transition: all 0.3s ease;
}
.product-grid:hover .product-view {
  opacity: 1;
  transform: scale(1);
  bottom: -20px;
  left: -20px;
}
.product-grid .product-view:hover {
  background: var(--color-primary-darkgrey);
}
.product-grid .product-links {
  padding: 0;
  margin: 0;
  list-style: none;
  transform: translateY(50%);
  position: absolute;
  bottom: 50%;
  right: 10px;
  z-index: 1;
}
.product-grid .product-links li {
  margin: 5px 0;
  opacity: 0;
  transform: translateX(100%);
  transition: all 0.3s ease;
}
.product-grid .product-links li:nth-child(2) {
  transition-delay: 0.1s;
}
.product-grid .product-links li:nth-child(3) {
  transition-delay: 0.2s;
}
.product-grid:hover .product-links li {
  opacity: 1;
  transform: translateX(0);
}
.product-grid .product-links li a {
  color: #000;
  background: #fff;
  font-size: 18px;
  text-align: center;
  line-height: 33px;
  width: 35px;
  height: 35px;
  border: 1px solid #000;
  display: block;
  transition: all 0.3s ease;
}
.product-grid .product-links li a:hover {
  color: #fff;
  background: var(--color-primary-darkgrey);
  border-color: var(--color-primary-darkgrey);
}
.product-grid .product-content {
  background: #fff;
  padding: 15px 0 0;
}
.product-grid .rating {
  color: #f7bc3d;
  font-size: 11px;
  padding: 0;
  margin: 0 0 8px;
  list-style: none;
}
.product-grid .rating li {
  display: inline-block;
}
.product-grid .rating .disable {
  color: #a3a3a3;
}
.product-grid .title {
  font-size: 15px;
  font-weight: 500;
  text-transform: capitalize;
  margin: 0 0 8px;
}
.product-grid .title a {
  color: #333;
  transition: all 0.3s ease 0s;
}
.product-grid .title a:hover {
  color: var(--color-primary-darkgrey);
}
.product-grid .price {
  color: #a3a3a3;
  font-size: 15px;
  font-weight: 500;
}
.product-grid .price span {
  color: #999;
  font-size: 14px;
  font-weight: 400;
  text-decoration: line-through;
  margin-right: 5px;
}
@media screen and (max-width: 990px) {
  .product-grid {
    margin-bottom: 30px;
  }
}
</style>
