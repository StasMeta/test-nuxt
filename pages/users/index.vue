<template>
  <section>
    <h1>{{ pageTitle }}</h1>
    <UsersList></UsersList>
  </section>
</template>
<script>
import UsersList from "../../components/UsersList";
export default {
  name: "UsersPage",
  components: { UsersList },
  middleware: ["auth"],
  data: () => ({
    pageTitle: "Users Page",
  }),
};
</script>
