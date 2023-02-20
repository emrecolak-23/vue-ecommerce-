<template>
  <footer
    class="d-flex flex-wrap justify-content-between align-items-center border-top"
  >
    <p class="col-md-4 mb-0 text-muted">© 2022 Wears, Inc</p>

    <a
      href="/"
      class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none"
    >
      <img :src="getImgUrl('wears.png')" alt="" />
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item">
        <a href="#" class="nav-link px-2 text-muted">AI & ML Solutions</a>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  methods: {
    getImgUrl(pic) {
      return `https://dashboard.wears.com.tr/imagesSW/${pic}`;
    },
  },
};
</script>

<style>
footer {
  background: white;
  bottom: 0px;
  height: 200px;
}
</style>
