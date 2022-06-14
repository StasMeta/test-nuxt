<template>
  <section>
    <h1>Login Page</h1>
    <form class="mb-3">
      <div class="form-group mb-4">
        <label for="exampleInputPassword1" class="mb-2">Password</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
    <nuxt-link to="/"> Home Page </nuxt-link>
  </section>
</template>
<script>
export default {
  layout: "empty",
};
</script>
<style scoped lang="sass">
.form-group
  width: 600px
</style>
