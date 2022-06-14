<template>
  <section>
    <h1>{{ user.name }}</h1>
    <ul class="list-group list-group-flush mb-3">
      <li class="list-group-item">
        <span class="text-success">Email:</span> {{ user.email }}
        <input type="text" v-model="user.email" />
      </li>
      <li class="list-group-item">
        <span class="text-success">City:</span> {{ user.address.city }}
        <input type="text" v-model="user.address.city" />
      </li>
      <li class="list-group-item">
        <span class="text-success">Street:</span> {{ user.address.street }}
        <input type="text" v-model="user.address.street" />
      </li>
      <li class="list-group-item">
        <span class="text-success">Phone:</span> {{ user.phone }}
        <input type="text" v-model="user.phone" />
      </li>
      <li class="list-group-item">
        <span class="text-success">Website:</span> {{ user.website }}
        <input type="text" v-model="user.website" />
      </li>
    </ul>

    <div class="btn-group-toggle mr-3" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="checkbox" autocomplete="off" /> Checked
      </label>
      <nuxt-link to="/" class="btn btn-primary" role="button">
        Home Page
      </nuxt-link>
    </div>
  </section>
</template>
<script>
export default {
  validate({ params }) {
    return /^\d+$/.test(params.id);
  },
  async asyncData({ $axios, params }) {
    const user = await $axios.$get(
      "https://jsonplaceholder.typicode.com/users/" + params.id
    );
    return { user };
  },
};
</script>
<style lang="sass">
.list-group
  width: 600px
  .list-group-item
    input
      float: right
</style>
