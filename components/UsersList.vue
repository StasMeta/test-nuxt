<template>
  <ul>
    <li v-for="user of users" :key="user.id" :user_data="user">
      <nuxt-link :to="`/users/${user.id}/`" @click.prevent="openUser(user)">{{
        user.name
      }}</nuxt-link>
    </li>
  </ul>
</template>
<script>
export default {
  name: "UsersList",
  async fetch({ store }) {
    if (store.getters["users/users"].length === 0) {
      await store.dispatch("users/fetch");
    }
  },
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
