export const state = () => ({
  users: [],
});

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },
};

export const actions = {
  async getAllUsers({ commit }) {
    const users = await this.$axios.$get(
      "https://jsonplaceholder.typicode.com/users/"
    );
    commit("setUsers", users);
  },
};

export const getters = {
  users: (s) => s.users,
  getUserById: (state) => (id) => {
    return state.users.find((u) => u.id == id);
  },
};
