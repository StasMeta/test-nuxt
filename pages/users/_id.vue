<template>
  <section v-if="user">
    <h1>{{ user.name }}</h1>
    <ul class="list-group list-group-flush mb-3">
      <li class="list-group-item">
        <span class="text-success">Email:</span> {{ user.email }}
        <input type="text" v-model="user.email" v-show="isElVisible" />
      </li>
      <li class="list-group-item">
        <span class="text-success">City:</span> {{ user.address.city }}
        <input type="text" v-model="user.address.city" v-show="isElVisible" />
      </li>
      <li class="list-group-item">
        <span class="text-success">Street:</span> {{ user.address.street }}
        <input type="text" v-model="user.address.street" v-show="isElVisible" />
      </li>
      <li class="list-group-item">
        <span class="text-success">Phone:</span> {{ user.phone }}
        <input type="text" v-model="user.phone" v-show="isElVisible" />
      </li>
      <li class="list-group-item">
        <span class="text-success">Website:</span> {{ user.website }}
        <input type="text" v-model="user.website" v-show="isElVisible" />
      </li>
    </ul>

    <button @click="toggleElement" class="btn btn-primary mr-4">
      {{ textBtn }}
    </button>
    <nuxt-link to="/" class="btn btn-primary" role="button">
      {{ textLink }}
    </nuxt-link>
  </section>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "UserDate",
  data() {
    return {
      isElVisible: false,
      textBtn: "Редактировать",
      textLink: "Home Page",
      user: null,
    };
  },
  methods: {
    toggleElement() {
      this.isElVisible = !this.isElVisible;
    },
  },
  mounted() {
    // console.log(this.$route.params.id);
    this.user = this.$store.getters["users/getUserById"](this.$route.params.id);
  },
};
</script>
<style lang="sass">
.list-group
  width: 600px

  .list-group-item
    height: 50px
    input
      float: right
.btn-group
  max-width: 600px
</style>
