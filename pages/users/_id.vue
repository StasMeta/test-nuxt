<template>
  <section v-if="user">
    <h1>{{ user.name }}</h1>
    <ul class="list-group list-group-flush mb-3">
      <li class="list-group-item">
        <span class="text-success">Email:</span> {{ user.email }}
        <input
          type="text"
          :value="user.email"
          @input="changeEmail"
          v-show="isElVisible"
        />
      </li>
      <li class="list-group-item">
        <span class="text-success">City:</span> {{ user.address.city }}
        <input
          type="text"
          :value="user.address.city"
          @input="changeCity"
          v-show="isElVisible"
        />
      </li>
      <li class="list-group-item">
        <span class="text-success">Street:</span> {{ user.address.street }}
        <input
          type="text"
          :value="user.address.street"
          @input="changeStreet"
          v-show="isElVisible"
        />
      </li>
      <li class="list-group-item">
        <span class="text-success">Phone:</span> {{ user.phone }}
        <input
          type="text"
          :value="user.phone"
          @input="changePhone"
          v-show="isElVisible"
        />
      </li>
      <li class="list-group-item">
        <span class="text-success">Website:</span> {{ user.website }}
        <input
          type="text"
          :value="user.website"
          @input="changeWebsite"
          v-show="isElVisible"
        />
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
    changeEmail(e) {
      this.$store.commit("users/changeUserEmail", {
        id: this.$route.params.id,
        email: e.target.value,
      });
    },
    changePhone(e) {
      this.$store.commit("users/changeUserPhone", {
        id: this.$route.params.id,
        phone: e.target.value,
      });
    },
    changeCity(e) {
      this.$store.commit("users/changeUserCity", {
        id: this.$route.params.id,
        city: e.target.value,
      });
    },
    changeStreet(e) {
      this.$store.commit("users/changeUserStreet", {
        id: this.$route.params.id,
        street: e.target.value,
      });
    },
    changeWebsite(e) {
      this.$store.commit("users/changeUserWebsite", {
        id: this.$route.params.id,
        website: e.target.value,
      });
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
