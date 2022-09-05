export const state = () => {
  return {
    users: [
      {
        id: 0,
        name: "Ayshe",
        username: "Ashley",
        phone: "+99365833299",
        address: [
          "Bla bla bla bla bla bla ...",
          "Another Bla bla bla bla bla..",
        ],
        password: "DandikBirParola!",
        regTime: "25.08.2022",
      },
    ],
    isConfirmed: false,
  };
};

export const mutations = {
  addNewUser(state, payload) {
    state.users.push(payload.data);
  },
  authenticateUser(state, payload) {
    console.log(state.isConfirmed);
    for (let i = 0; i < state.users.length; i++) {
      if (
        (state.users[i].username == payload.userdata ||
          state.users[i].phone == payload.userdata) &&
        state.users[i].password == payload.userPassword
      ) {
        state.isConfirmed = true;
      } else {
        alert("Agzalygynyz yok! Agza bolun!!");
        state.isConfirmed = false;
      }
    }
  },
  confirm(state, payload) {
    return (state.isConfirmed = payload.bool);
  },
  changeUserData(state, payload) {
    return (state.users[payload.index] = payload.userData);
  },
};

export const actions = {
  addUser(context, payload) {
    return context.dispatch("addNewUser", payload);
  },
  confirmUser(context, payload) {
    return context.commit("authenticateUser", payload);
  },
  confirmed(context) {
    context.commit("confirm", { bool: true });  
  },
  notConfirmed(context) {
    return context.commit("confirm", { bool: false });
  },
  changeUserInfo(context, payload) {
    return context.commit("changeUserData", payload);
  },
};

export const getters = {
  users(state) {
    return state.users;
  },
  isConfirmed(state) {
    return state.isConfirmed;
  },
};
