export default {
  namespaced: true,
  state: {
    products: [
      {
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
        slug: 'cream-jacket',
      },
      {
        id: 2,
        name: 'Green Jacket',
        description:
          'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250.0,
        discount: 50,
        manufacturer: 'Wears',
        mainThumbnail: 'img-product-2-thumbnail.png',
        images: [
          {
            main: 'img-product-2.png',
            thumbnail: 'img-product-2-thumbnail.png',
          },
        ],
        slug: 'green-jacket',
      },
      {
        id: 3,
        name: 'Ma Primi',
        description:
          'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250.0,
        discount: 50,
        manufacturer: 'Wears',
        mainThumbnail: 'img-product-3-thumbnail.png',
        images: [
          {
            main: 'img-product-3.png',
            thumbnail: 'img-product-3-thumbnail.png',
          },
        ],
        slug: 'ma-primi',
      },
      {
        id: 4,
        name: 'Ma Primi Giovani',
        description:
          'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
        price: 250.0,
        discount: 50,
        manufacturer: 'Wears',
        mainThumbnail: 'img-product-4-thumbnail.png',
        images: [
          {
            main: 'img-product-4.png',
            thumbnail: 'img-product-4-thumbnail.png',
          },
        ],
        slug: 'ma-primi-giovani',
      },
    ],
    product: null,
  },
  getters: {
    _product: (state) => state.product,
    _products: (state) => state.products,
    _otherProducts: (state) => {
      return state.products.filter((product) => product.id != state.product.id);
    },
  },
  mutations: {
    setProduct(state, slug) {
      state.product = state.products.filter(
        (product) => product.slug === slug
      )[0];
    },
  },
  actions: {},
};
