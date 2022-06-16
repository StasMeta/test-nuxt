<template>
  <section class="m-auto pt-5">
    <h1 class="text-danger">{{ textError }}</h1>
    <nuxt-link to="/">{{ textLink }}</nuxt-link>
  </section>
</template>
<script>
export default {
  data() {
    return {
      textError: "Error 404",
      textLink: "Home",
    };
  },
};
</script>
<style scoped lang="sass">
section
  width: 600px
</style>
