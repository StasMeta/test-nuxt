<template>
  <section>
    <h1 class="mb-3">{{ pageTitle }}</h1>
    <div v-if="$route.query.message" class="alert alert-danger" role="alert">
      {{ text.alertDanger }}
    </div>
    <form class="mb-3" @submit.prevent="onSubmit">
      <div class="form-group mb-4">
        <label for="exampleInputPassword1" class="mb-2">{{ text.label }}</label>
        <input
          type="password"
          class="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" class="btn btn-primary">{{ text.btn }}</button>
    </form>
    <nuxt-link to="/">{{ text.link }}</nuxt-link>
  </section>
</template>
<script>
export default {
  name: "LoginPage",
  layout: "empty",
  data() {
    return {
      pageTitle: "Login Page",
      text: {
        label: "Password",
        btn: "Login",
        link: "Home Page",
        alertDanger: "Need Login",
      },
    };
  },
  methods: {
    onSubmit() {
      this.$store.dispatch("login");
      this.$router.push("/");
    },
  },
};
</script>
<style scoped lang="sass">
.form-group
  width: 600px
</style>
