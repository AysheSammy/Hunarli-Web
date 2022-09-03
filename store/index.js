export const state = () => ({
  isLoggedIn: false,
});

export const mutations = {
  changeLoggedStatus(state, payload) {
    state.isLoggedIn = payload.status;
  },
};

export const actions = {
  login(context) {
    context.commit("changeLoggedStatus", { status: true });
  },
  logout(context) {
    context.commit("changeLoggedStatus", { status: false });
  },
};

export const getters = {
  isAuthenticated(state) {
    return state.isLoggedIn;
  },
};
