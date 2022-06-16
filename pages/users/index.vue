<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <ul>
      <li v-for="user of users" :key="user.id">
        <nuxt-link :to="`/users/${user.id}/`" @click.prevent="openUser(user)">{{
          user.name
        }}</nuxt-link>
      </li>
    </ul>
  </section>
</template>
<script>
export default {
  name: "UsersList",
  middleware: ["auth"],
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
  },
  data: () => ({
    pageTitle: "Users Page",
  }),
  computed: {
    users() {
      return this.$store.getters["users/users"];
    },
  },
  methods: {
    openUser(user) {
      this.$router.push(`/users/${user.id}/`);
    },
  },
};
</script>
