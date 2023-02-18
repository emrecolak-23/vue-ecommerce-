<template>
  <router-view></router-view>
</template>

<script>
export default {
  data() {
    return {
      cartOpen: false,
      carouselModalOpen: false,
      imageClickedIndex: 0,
      product: {
        id: 1,
        name: 'Fall Limited Edition Sneakers',
        description:
          'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250.0,
        discount: 50,
        manufacturer: 'Sneaker Company',
        mainThumbnail: 'image-product-1-thumbnail.jpg',
        images: [
          {
            main: 'image-product-1.jpg',
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
      cart: [],
    };
  },
};
</script>
