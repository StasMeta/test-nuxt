export const state = {
  users: [],
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },

  changeUserEmail(state, newValue) {
    state.users.forEach((user, index) => {
      if (user.id == newValue.id) {
        state.users[index].email = newValue.email;
      }
      console.log(newValue.id);
    });
  },
  changeUserCity(state, newValue) {
    state.users.forEach((user, index) => {
      if (user.id == newValue.id) {
        state.users[index].address.city = newValue.city;
      }
    });
  },
  changeUserStreet(state, newValue) {
    state.users.forEach((user, index) => {
      if (user.id == newValue.id) {
        state.users[index].address.street = newValue.street;
      }
    });
  },
  changeUserPhone(state, newValue) {
    state.users.forEach((user, index) => {
      if (user.id == newValue.id) {
        state.users[index].phone = newValue.phone;
      }
    });
  },
  changeUserWebsite(state, newValue) {
    state.users.forEach((user, index) => {
      if (user.id == newValue.id) {
        state.users[index].website = newValue.website;
      }
    });
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
  users: (state) => state.users,
  getUserById: (state) => (id) => {
    return state.users.find((user) => user.id == id);
  },
};
